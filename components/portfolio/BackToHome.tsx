import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function BackToHome() {
  return (
    <p className="back-link">
      <Link href="/">
        <ArrowLeft size={14} aria-hidden="true" />
        Back to home
      </Link>
    </p>
  );
}
