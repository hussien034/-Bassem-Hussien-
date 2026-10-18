import emailjs from '@emailjs/browser';

export interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
  recipientEmail?: string;
}

export interface EmailSendResult {
  success: boolean;
  provider: 'emailjs' | 'web3forms' | 'client_fallback';
  message: string;
  error?: string;
}

/**
 * Robust multi-tier email dispatcher.
 * Priority 1: EmailJS (@emailjs/browser) if VITE_EMAILJS_* environment variables are defined.
 * Priority 2: Direct portfolio webhook API (Web3Forms).
 * Priority 3: Client-side Gmail / mailto deep-link fallback.
 */
export async function sendContactEmail(params: EmailParams, isAr: boolean = false): Promise<EmailSendResult> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // 1. Attempt EmailJS if credentials are configured
  if (serviceId && templateId && publicKey) {
    try {
      const templateParams = {
        from_name: params.name,
        from_email: params.email,
        reply_to: params.email,
        subject: params.subject,
        message: params.message,
        to_email: params.recipientEmail || 'bassemh594@gmail.com',
        to_name: 'Bassem Hussein',
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        return {
          success: true,
          provider: 'emailjs',
          message: isAr
            ? 'تم إرسال رسالتك بنجاح عبر EmailJS إلى بريد باسم حسين!'
            : 'Your message was delivered successfully via EmailJS to Bassem Hussein!',
        };
      }
    } catch (err: any) {
      console.warn('EmailJS delivery error, falling back to secondary channel:', err);
    }
  }

  // 2. Secondary API Channel (Web3Forms API)
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '078a6358-1f1f-4cb1-97b7-567fbf7dd78f',
        from_name: params.name || 'Portfolio Visitor',
        name: params.name,
        email: params.email,
        subject: `[Portfolio Opportunity] ${params.subject} - from ${params.name}`,
        message: params.message,
        to_email: params.recipientEmail || 'bassemh594@gmail.com',
      }),
    });

    if (response.ok) {
      return {
        success: true,
        provider: 'web3forms',
        message: isAr
          ? 'تم إرسال رسالتك بنجاح وسيتلقاها باسم حسين فوراً على بريده الإلكتروني!'
          : "Your message has been delivered directly to Bassem Hussein's inbox!",
      };
    }
  } catch (apiErr: any) {
    console.warn('Secondary webhook delivery error:', apiErr);
  }

  // 3. Fallback: Instruct user to use one-click WhatsApp / Gmail
  return {
    success: true,
    provider: 'client_fallback',
    message: isAr
      ? 'تم تجهيز رسالتك! يمكنك الآن إرسالها بنقرة واحدة عبر Gmail أو WhatsApp لضمان الوصول الفوري.'
      : 'Message drafted! Click below to dispatch instantly via Gmail or WhatsApp.',
  };
}
