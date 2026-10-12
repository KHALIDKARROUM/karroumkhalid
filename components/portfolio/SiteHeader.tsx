'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          className="site-name"
          aria-label={`${profile.name} — home`}
          onClick={() => setMenuOpen(false)}
        >
          KHALID<span className="brand-dot">.</span>K
        </Link>
        <nav
          id="site-navigation"
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                pathname?.startsWith(item.href) ? 'page' : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={profile.github} onClick={() => setMenuOpen(false)}>
            GitHub <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <Link
            className="mobile-contact"
            href="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link
            href="/contact"
            className="button button-primary header-contact"
          >
            Let’s connect <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <button
            className="icon-button menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
