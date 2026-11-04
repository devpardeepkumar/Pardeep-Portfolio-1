import emailjs from '@emailjs/browser'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export const EMAILJS_CONFIG = {
  serviceId:
    import.meta.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
    import.meta.env.VITE_EMAILJS_SERVICE_ID ||
    'service_v0x1spc',
  templateId:
    import.meta.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
    'template_e9zkbw2',
  publicKey:
    import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
    'o0ZPE5JFUeW4XvWmc',
}

/**
 * Sends contact email via EmailJS
 */
export async function sendContactEmail(data: ContactFormData) {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration is missing. Please check your environment variables.')
  }

  // Map variables to support all common EmailJS template naming conventions:
  // e.g., {{name}}, {{from_name}}, {{user_name}}, {{email}}, {{from_email}}, {{reply_to}}, {{message}}
  const templateParams: Record<string, string> = {
    name: data.name.trim(),
    from_name: data.name.trim(),
    user_name: data.name.trim(),
    email: data.email.trim(),
    from_email: data.email.trim(),
    user_email: data.email.trim(),
    reply_to: data.email.trim(),
    message: data.message.trim(),
  }

  return emailjs.send(serviceId, templateId, templateParams, publicKey)
}
