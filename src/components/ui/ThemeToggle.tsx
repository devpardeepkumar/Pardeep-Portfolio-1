import { AnimatePresence, motion } from 'motion/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      aria-label={
        theme === 'light'
          ? 'Current theme: Light Mode. Click to switch to Dark Mode'
          : 'Current theme: Dark Mode. Click to switch to Light Mode'
      }
      title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="theme-toggle-icon"
          initial={{ rotate: -80, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 80, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          {theme === 'light' ? (
            <Sun size={17} className="sun-icon" aria-hidden="true" />
          ) : (
            <Moon size={17} className="moon-icon" aria-hidden="true" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
