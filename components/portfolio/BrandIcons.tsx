import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function GithubIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M9 19c-4.3 1.3-4.3-2.1-6-2.6M15 22v-3.9a3.4 3.4 0 0 0-1-2.6c3.3-.4 6.7-1.6 6.7-7.3A5.7 5.7 0 0 0 19.2 4a5.4 5.4 0 0 0-.2-4s-1.2-.4-4 1.5a13.6 13.6 0 0 0-7 0C5.2-.4 4 0 4 0a5.4 5.4 0 0 0-.2 4 5.7 5.7 0 0 0-1.5 4.2c0 5.7 3.4 6.9 6.7 7.3A3.4 3.4 0 0 0 8 18.1V22"
        transform="translate(1 1) scale(.92)"
      />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v7M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
      <circle cx="7.5" cy="7" r=".7" fill="currentColor" stroke="none" />
    </svg>
  );
}
