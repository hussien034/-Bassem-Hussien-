import React, { useRef, useState, useEffect } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (default: 10)
  glareOpacity?: number; // 0 to 1
  onClick?: () => void;
  scaleOnHover?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  maxTilt = 8,
  glareOpacity = 0.15,
  onClick,
  scaleOnHover = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>("none");
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isMobileOrTouch, setIsMobileOrTouch] = useState(true);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const checkResponsiveness = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isSmallScreen = window.innerWidth < 1024; // Keep 3D active only on desktop for peak stability
      setIsMobileOrTouch(isCoarse || prefersReducedMotion || isSmallScreen);
    };

    checkResponsiveness();
    window.addEventListener("resize", checkResponsiveness, { passive: true });
    return () => window.removeEventListener("resize", checkResponsiveness);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobileOrTouch || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const percentX = (mouseX / rect.width) * 100;
    const percentY = (mouseY / rect.height) * 100;

    const rotateY = ((mouseX - rect.width / 2) / (rect.width / 2)) * maxTilt;
    const rotateX = -((mouseY - rect.height / 2) / (rect.height / 2)) * maxTilt;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const scale = scaleOnHover ? 1.015 : 1;
      setTransformStyle(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );
      setGlarePosition({
        x: percentX,
        y: percentY,
        opacity: glareOpacity,
      });
    });
  };

  const handleMouseLeave = () => {
    if (isMobileOrTouch) return;
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
      setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: isMobileOrTouch ? "none" : transformStyle,
        transformStyle: isMobileOrTouch ? "flat" : "preserve-3d",
        transition: isMobileOrTouch
          ? "transform 0.2s ease, box-shadow 0.2s ease"
          : "transform 0.15s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease",
        willChange: isMobileOrTouch ? "auto" : "transform",
      }}
      className={`relative group ${className}`}
    >
      {/* Glare sheen overlay on desktop only */}
      {!isMobileOrTouch && (
        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{ opacity: glarePosition.opacity }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.25), transparent 75%)`,
            }}
          />
        </div>
      )}
      {children}
    </div>
  );
};
