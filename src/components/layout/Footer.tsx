import { ArrowUpRight } from 'lucide-react'
import { currentYear, personal } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="footer section-wrap">
      <a className="wordmark" href="#home">PK<span>.</span></a>
      <span>Designed & built with care by {personal.name}.</span>
      <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a>
      <span className="footer-year">© {currentYear}</span>
    </footer>
  )
}
