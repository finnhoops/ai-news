'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SECTORS } from '@/lib/feeds'

const NAV_ORDER = ['main', 'finance', 'software', 'healthcare', 'education', 'marketing', 'freelance', 'fun']

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <div className="logo-mark">⬡</div>
        <div>
          <div className="logo-title">NEURAL<span className="logo-accent">FEED</span></div>
          <div className="logo-sub">News about AI, from the web's best sources</div>
        </div>
      </div>

      <div className="nav-section-label">DASHBOARDS</div>

      <ul className="nav-list">
        {NAV_ORDER.map((key) => {
          const s = SECTORS[key]
          const href = s.slug ? `/${s.slug}` : '/'
          const isActive = s.slug ? pathname === href : pathname === '/'
          return (
            <li key={key}>
              <Link
                href={href}
                className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
                style={isActive ? { '--item-accent': s.accent } as React.CSSProperties : {}}
              >
                <span className="nav-icon" style={isActive ? { color: s.accent } : {}}>{s.icon}</span>
                <span className="nav-label">{s.label}</span>
                {isActive && <span className="nav-dot" style={{ background: s.accent }} />}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="sidebar-footer">
        <div className="live-indicator">
          <span className="pulse-dot" />
          <span>Live feeds · 1h refresh</span>
        </div>
      </div>
    </nav>
  )
}
