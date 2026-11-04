import { ArrowDown, ArrowDownRight, ArrowUpRight, Code2, ExternalLink } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { personal } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { TypewriterText } from '../ui/TypewriterText'

const heroPhrases = [
  'scalable SaaS platforms',
  'AI-powered applications',
  'enterprise systems',
  'Web3 products',
  'cross-platform mobile apps',
]

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <motion.div
          className="availability"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
        >
          <span className="availability-dot" /> FULL-CYCLE PRODUCT DEVELOPMENT
        </motion.div>
        <motion.p
          className="hero-kicker"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.08, duration: reduceMotion ? 0 : 0.6 }}
        >
          {personal.title.toUpperCase()} <span>·</span> {personal.location.toUpperCase()}
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.16, duration: reduceMotion ? 0 : 0.7 }}
        >
          {personal.name}<span>.</span>
        </motion.h1>
        <TypewriterText phrases={heroPhrases} />
        <motion.p
          className="hero-description"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.27, duration: reduceMotion ? 0 : 0.7 }}
        >
          Senior Full Stack Engineer with 9+ years of experience designing and developing scalable SaaS platforms, AI-powered applications, enterprise systems, Web3 products, and cross-platform mobile applications.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.4, duration: reduceMotion ? 0 : 0.6 }}
        >
          <Button href="#work">Explore my work <ArrowDownRight size={17} /></Button>
          <Button variant="secondary" href={personal.resume} download="Pardeep-Kumar-Resume.pdf">
            Download resume <ArrowUpRight size={16} />
          </Button>
        </motion.div>
        <div className="hero-socials">
          <a href={personal.github} target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub <ExternalLink size={12} /></a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer"><span className="brand-in" aria-hidden="true">in</span> LinkedIn <ExternalLink size={12} /></a>
        </div>
      </div>
      <motion.div
        className="hero-art"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reduceMotion ? 0 : 0.25, duration: reduceMotion ? 0 : 0.8 }}
      >
        <div className="art-glow" />
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-core">
          <span className="core-monogram">PK</span>
          <span className="core-caption">ENGINEERING<br />WITH INTENT</span>
        </div>
        <span className="orbit-tag tag-react">React · Next.js</span>
        <span className="orbit-tag tag-ai">AI / RAG</span>
        <span className="orbit-tag tag-node">Node.js</span>
        <span className="orbit-tag tag-web3">Web3</span>
        <span className="art-index">01 — 04 / FULL STACK</span>
      </motion.div>
      <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
      {/* <span className="hero-side-note">INDEPENDENT THINKING. THOUGHTFUL ENGINEERING.</span> */}
    </section>
  )
}
