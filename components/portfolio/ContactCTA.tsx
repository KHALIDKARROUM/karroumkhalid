import type { ReactNode } from 'react';
import { profile } from '@/data/profile';
import { ResumeLink } from './ResumeLink';

type ContactCTAProps = {
  headingLevel?: 1 | 2;
  children?: ReactNode;
};

export function ContactCTA({ headingLevel = 2, children }: ContactCTAProps) {
  const Heading = headingLevel === 1 ? 'h1' : 'h2';

  return (
    <section id="contact" aria-labelledby="contact-title">
      <Heading id="contact-title">Contact</Heading>
      {children}
      <div className="links">
        {profile.email && <a href={`mailto:${profile.email}`}>Email</a>}
        {profile.linkedIn && <a href={profile.linkedIn}>LinkedIn</a>}
        <a href={profile.github}>GitHub</a>
        <ResumeLink />
      </div>
    </section>
  );
}
