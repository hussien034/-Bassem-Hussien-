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
  provider: 'formsubmit' | 'emailjs' | 'gmail_direct' | 'client_fallback';
  message: string;
  needsActivation?: boolean;
  activationEmail?: string;
  details?: string;
  error?: string;
}

/**
 * Constructs the official Google Gmail Web Composer URL
 * Prefills To, Subject, and Body text cleanly.
 */
export function createGmailComposeUrl(params: {
  recipientEmail?: string;
  name?: string;
  senderEmail?: string;
  subject?: string;
  message?: string;
}): string {
  const to = params.recipientEmail || 'bassemh594@gmail.com';
  const su = encodeURIComponent(
    params.subject
      ? `${params.subject} [From: ${params.name || 'Recruiter'}]`
      : `Hiring Opportunity / Inquiry - ${params.name || 'Visitor'}`
  );

  const bodyLines = [
    `Dear Bassem,`,
    ``,
    params.message || `I am reaching out regarding a frontend engineering opportunity...`,
    ``,
    `----------------------------------------`,
    `Sender Information:`,
    `Name: ${params.name || 'Not specified'}`,
    `Email: ${params.senderEmail || 'Not specified'}`,
    `Subject: ${params.subject || 'Opportunity'}`,
    `Sent from Bassem Hussein Portfolio Showcase`,
  ];

  const body = encodeURIComponent(bodyLines.join('\n'));
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${su}&body=${body}`;
}

/**
 * Constructs a native mailto: link for system email clients (Outlook, Apple Mail, etc.)
 */
export function createMailtoUrl(params: {
  recipientEmail?: string;
  name?: string;
  senderEmail?: string;
  subject?: string;
  message?: string;
}): string {
  const to = params.recipientEmail || 'bassemh594@gmail.com';
  const su = encodeURIComponent(params.subject || `Opportunity from ${params.name || 'Recruiter'}`);
  const body = encodeURIComponent(
    `Name: ${params.name}\nEmail: ${params.senderEmail}\n\nMessage:\n${params.message}\n\nSent from Portfolio`
  );
  return `mailto:${to}?subject=${su}&body=${body}`;
}

/**
 * Multi-channel email dispatcher:
 * 1. Checks EmailJS if configured in environment.
 * 2. Uses FormSubmit AJAX API directly to recipient's email (bassemh594@gmail.com).
 *    - Detects if activation is needed and gives crystal clear feedback to the user.
 * 3. Fallback with direct Gmail composer URL.
 */
export async function sendContactEmail(
  params: EmailParams,
  isAr: boolean = false
): Promise<EmailSendResult> {
  const recipient = params.recipientEmail || 'bassemh594@gmail.com';

  // 1. Try EmailJS if environment variables are provided
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (serviceId && templateId && publicKey) {
    try {
      const templateParams = {
        from_name: params.name,
        from_email: params.email,
        reply_to: params.email,
        subject: params.subject,
        message: params.message,
        to_email: recipient,
        to_name: 'Bassem Hussein',
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      if (response.status === 200) {
        return {
          success: true,
          provider: 'emailjs',
          message: isAr
            ? `تم إرسال رسالتك بنجاح عبر EmailJS إلى بريد المهندس باسم حسين (${recipient})!`
            : `Your message was delivered successfully via EmailJS to ${recipient}!`,
        };
      }
    } catch (err: any) {
      console.warn('EmailJS attempt failed, falling back to FormSubmit:', err);
    }
  }

  // 2. Dispatch via FormSubmit AJAX gateway to bassemh594@gmail.com
  try {
    const endpoint = `https://formsubmit.co/ajax/${recipient}`;
    const payload = {
      name: params.name || 'Portfolio Visitor',
      email: params.email,
      _replyto: params.email,
      _subject: `[Portfolio Opportunity] ${params.subject || 'Direct Inquiry'} - from ${params.name || 'Recruiter'}`,
      message: params.message,
      _captcha: 'false',
      _template: 'table',
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (res.ok && (data?.success === 'true' || data?.success === true)) {
      return {
        success: true,
        provider: 'formsubmit',
        message: isAr
          ? `تم إرسال رسالتك بنجاح ووصلت إلى صندوق بريد باسم حسين (${recipient})!`
          : `Message delivered successfully to Bassem Hussein (${recipient})!`,
      };
    }

    // Check if FormSubmit sent a one-time activation request to the owner's email
    if (data?.message && typeof data.message === 'string' && data.message.toLowerCase().includes('activation')) {
      return {
        success: false,
        needsActivation: true,
        activationEmail: recipient,
        provider: 'formsubmit',
        message: isAr
          ? `مطلوب تفعيل البريد لمرة واحدة فقط: أرسلت خدمة FormSubmit رابط تفعيل إلى (${recipient}). يرجى فتح بريدك والضغط على (Activate Form) لمرة واحدة فقط لتفعيل الاستلام الآلي الدائم!`
          : `One-time activation required: FormSubmit sent an activation link to ${recipient}. Please check your Gmail and click 'Activate Form' once to enable automatic form delivery!`,
        details: isAr
          ? `يمكنك أيضاً الضغط على زر "فتح Gmail المباشر" أدناه لإرسال الرسالة فوراً من بريدك دون انتظار التفعيل.`
          : `You can also use the "Open in Gmail" button below to dispatch the message immediately without waiting for activation.`,
      };
    }

    if (data?.message) {
      throw new Error(data.message);
    }
  } catch (apiErr: any) {
    console.warn('FormSubmit gateway error:', apiErr);
  }

  // 3. Fallback: Instruct user to send directly via pre-filled Gmail or WhatsApp
  return {
    success: false,
    provider: 'client_fallback',
    message: isAr
      ? `تم تجهيز رسالتك بالكامل! اضغط على زر "فتح في Gmail" أدناه لإرسالها مباشرة من بريدك إلى (${recipient}).`
      : `Your message is fully drafted! Click "Open in Gmail" below to send it directly to ${recipient}.`,
  };
}
