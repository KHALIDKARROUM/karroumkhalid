import Link from 'next/link';

export function BackToHome() {
  return (
    <p className="back-link">
      <Link href="/">← Back to home</Link>
    </p>
  );
}
