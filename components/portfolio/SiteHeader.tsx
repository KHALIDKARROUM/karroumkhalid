import Link from 'next/link';
import { profile } from '@/data/profile';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-name">
        {profile.name}
      </Link>
      <ThemeToggle />
    </header>
  );
}
