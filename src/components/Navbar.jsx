import { useState } from 'react'
import { ArrowDownToLine, Menu, Moon, Sparkles, Sun, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101426]/95 text-white shadow-sm shadow-black/5 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[62px] max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" aria-label="Hajra Bibi portfolio home" className="flex shrink-0 items-center gap-2.5" onClick={closeMenu}>
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#a78bfa] text-[#17142b]">
            <Sparkles size={17} fill="currentColor" />
          </span>
          <span className="font-display text-sm font-bold tracking-tight">Hajra<span className="text-[#b6a2ff]">Portfolio</span></span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium text-[#c4c6d2] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-white/10"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="/Hajra-Bibi-CV.txt"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-[#a78bfa] px-4 py-2.5 text-[11px] font-bold text-[#17142b] transition hover:bg-[#c3b2ff]"
          >
            Download CV <ArrowDownToLine size={13} />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#101426] px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#d3d3df] hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Hajra-Bibi-CV.txt"
              download
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#a78bfa] px-4 py-3 text-sm font-bold text-[#17142b]"
            >
              Download CV <ArrowDownToLine size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
