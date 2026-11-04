import emailjs from '@emailjs/browser'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export const EMAILJS_CONFIG = {
  serviceId:
    'service_zknjkyc',
  templateId: 
    'template_qbzm2kn',
  publicKey:
    'IKDO9zu9Y4v8lxeGj',
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
