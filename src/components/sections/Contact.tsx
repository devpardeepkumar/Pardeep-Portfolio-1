import { useState, type ChangeEvent, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { AlertCircle, ArrowUpRight, CheckCircle2, Code2, Loader2, Mail } from 'lucide-react'
import { personal } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { sendContactEmail, type ContactFormData } from '../../services/emailService'

type FeedbackStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormFeedback {
  type: 'success' | 'error'
  text: string
}

const INITIAL_FORM_STATE: ContactFormData = {
  name: '',
  email: '',
  message: '',
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE)
  const [status, setStatus] = useState<FeedbackStatus>('idle')
  const [feedback, setFeedback] = useState<FormFeedback | null>(null)

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear previous error feedback when the user begins modifying the form
    if (feedback && feedback.type === 'error') {
      setFeedback(null)
    }
  }

  function validate(): string | null {
    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName || trimmedName.length < 2) {
      return 'Please enter your name (at least 2 characters).'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return 'Please enter a valid email address.'
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      return 'Please write a message with at least 10 characters.'
    }

    return null
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Prevent duplicate submissions while a request is in flight
    if (status === 'submitting') {
      return
    }

    const validationError = validate()
    if (validationError) {
      setFeedback({
        type: 'error',
        text: validationError,
      })
      return
    }

    setStatus('submitting')
    setFeedback(null)

    try {
      await sendContactEmail(formData)
      setStatus('success')
      setFeedback({
        type: 'success',
        text: `Thank you, ${formData.name.trim()}! Your message has been sent successfully.`,
      })
      setFormData(INITIAL_FORM_STATE)
    } catch (error) {
      console.error('EmailJS submission error:', error)
      setStatus('error')
      setFeedback({
        type: 'error',
        text: `Unable to send message right now. Please try again or email ${personal.email} directly.`,
      })
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <section className="contact section-wrap section-space" id="contact">
      <ScrollReveal className="contact-banner">
        <div className="contact-banner-copy">
          <SectionLabel number="07">HAVE A GOOD ONE IN MIND?</SectionLabel>
          <h2>Let’s make it <span>real.</span></h2>
          <p>Have a product challenge, a team to build with, or an interesting idea? I’d love to hear about it.</p>
          <Button href={`mailto:${personal.email}`}>Start a conversation <ArrowUpRight size={16} /></Button>
        </div>
        <div className="contact-details">
          <a href={`mailto:${personal.email}`}><Mail size={17} /><span><small>EMAIL</small>{personal.email}</span><ArrowUpRight size={15} /></a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer"><span className="brand-in" aria-hidden="true">in</span><span><small>LINKEDIN</small>Connect with me</span><ArrowUpRight size={15} /></a>
          <a href={personal.github} target="_blank" rel="noreferrer"><Code2 size={17} /><span><small>GITHUB</small>Explore my code</span><ArrowUpRight size={15} /></a>
        </div>
      </ScrollReveal>
      <ScrollReveal className="contact-form-wrap">
        <div>
          <h3>Prefer a note?</h3>
          <p>Send me a message below and I’ll get back to you soon, or feel free to email directly.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              autoComplete="name"
              placeholder="Your name"
              required
              minLength={2}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              autoComplete="email"
              placeholder="you@company.com"
              required
            />
          </label>
          <label className="message-field">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              rows={3}
              placeholder="A little about what you have in mind..."
              required
              minLength={10}
            />
          </label>
          <button type="submit" className="button button-secondary" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="button-spinner" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send message</span>
                <ArrowUpRight size={16} />
              </>
            )}
          </button>
          <AnimatePresence>
            {feedback && (
              <motion.p
                className={`form-note is-${feedback.type}`}
                role="status"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {feedback.type === 'success' && <CheckCircle2 size={14} aria-hidden="true" />}
                {feedback.type === 'error' && <AlertCircle size={14} aria-hidden="true" />}
                <span>{feedback.text}</span>
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </ScrollReveal>
    </section>
  )
}
