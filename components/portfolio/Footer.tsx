import { profile } from '@/data/profile';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <Link className="site-name" href="/">
              KHALID<span className="brand-dot">.</span>K
            </Link>
            <p>{profile.positioning}</p>
          </div>
          <nav aria-label="Footer navigation">
            <span className="footer-label">EXPLORE</span>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="footer-elsewhere">
            <span className="footer-label">ELSEWHERE</span>
            <a href={profile.github}>
              GitHub <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            {profile.linkedIn && (
              <a href={profile.linkedIn}>
                LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            {profile.location}{' '}
            <span className="status-dot" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
