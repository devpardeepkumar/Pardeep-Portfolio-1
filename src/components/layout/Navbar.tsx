import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../../data/portfolio'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label="Pardeep Kumar, home">
        PK<span>.</span>
      </a>

      <div className="nav-group">
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navigation.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <ArrowUpRight size={14} />
          </a>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="mobile-menu"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  )
}
