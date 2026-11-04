import { achievements } from '../../data/portfolio'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'

export function Achievements() {
  return (
    <section className="impact section-space">
      <div className="impact-inner section-wrap">
        <ScrollReveal className="impact-intro">
          <SectionLabel number="03">THE WORK, IN NUMBERS</SectionLabel>
          <h2 className="section-title">Impact that <span>speaks.</span></h2>
          <p>Selected outcomes from products and teams I’ve contributed to. Production integrations include OpenAI, LangChain, Pinecone, Stripe, PayPal, HubSpot, and GoHighLevel; Web3 work includes wallet authentication, token-gated access, blockchain analytics, and DAO tooling.</p>
        </ScrollReveal>
        <div className="impact-grid">
          {achievements.map((achievement, index) => (
            <ScrollReveal className="impact-item" key={achievement.value + achievement.label} delay={index * 0.06} amount={0.2}>
              <AnimatedCounter achievement={achievement} />
              <span>{achievement.label}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
