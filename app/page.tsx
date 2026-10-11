import Link from 'next/link';
import { profile } from '@/data/profile';

const sections = [
  { title: 'About', href: '/about' },
  { title: 'Skills', href: '/skills' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <main id="main-content" className="home-page" tabIndex={-1}>
      <h1 className="visually-hidden">{profile.name} — Portfolio</h1>
      <nav aria-label="Portfolio sections">
        <ul className="section-titles">
          {sections.map((section) => (
            <li key={section.href}>
              <h2>
                <Link className="section-title" href={section.href}>
                  {section.title}
                  <span aria-hidden="true">→</span>
                </Link>
              </h2>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
