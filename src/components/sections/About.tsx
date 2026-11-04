import { industries } from '../../data/portfolio'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'

export function About() {
  return (
    <section className="about section-wrap section-space" id="about">
      <ScrollReveal><SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel></ScrollReveal>
      <div className="about-grid">
        <ScrollReveal>
          <h2 className="section-title about-title">
            Good software is built at the intersection of <span>curiosity</span> and craft.
          </h2>
        </ScrollReveal>
        <ScrollReveal className="about-body">
          <p>
            I’m Pardeep, a Senior Full Stack Engineer with 9+ years of experience designing and developing scalable SaaS platforms, AI-powered applications, enterprise systems, Web3 products, and cross-platform mobile applications.
          </p>
          <p>
            I have contributed to and led platforms serving millions of records, handling high-volume transactions, integrating AI capabilities, and supporting global users. I work directly with founders and business stakeholders on product roadmaps and technical architecture, and collaborate with UI/UX, QA, and project management teams.
          </p>
          <p>
            My experience also includes mentoring developers, integrating OpenAI and modern LLM tooling, and delivering healthcare applications with HIPAA-compliant workflows.
          </p>
          <div className="about-signoff">Pardeep Kumar <span>— Senior Full Stack Engineer</span></div>
        </ScrollReveal>
      </div>
      <div className="principles">
        <div><span>01</span><strong>Product roadmaps</strong><p>Defined with founders and business stakeholders.</p></div>
        <div><span>02</span><strong>Full cycle</strong><p>From discovery through deployment and scaling.</p></div>
        <div><span>03</span><strong>Team collaboration</strong><p>Across engineering, UI/UX, QA, and project management.</p></div>
      </div>
      <div className="industry-list" aria-label="Industry experience">
        <span>INDUSTRY EXPERIENCE</span>
        <p>{industries.join(' · ')}</p>
      </div>
    </section>
  )
}
