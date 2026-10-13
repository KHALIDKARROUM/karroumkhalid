import type { ReactNode } from 'react';
import { profile } from '@/data/profile';
import { ResumeLink } from './ResumeLink';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedInIcon } from './BrandIcons';

type ContactCTAProps = {
  headingLevel?: 1 | 2;
  children?: ReactNode;
};

export function ContactCTA({ headingLevel = 2, children }: ContactCTAProps) {
  const Heading = headingLevel === 1 ? 'h1' : 'h2';

  return (
    <section
      id="contact"
      className="contact-panel"
      aria-labelledby="contact-title"
    >
      <div className="contact-copy">
        <p className="eyebrow">
          <span aria-hidden="true" />
          LET’S CONNECT
        </p>
        <Heading id="contact-title">Contact</Heading>
        {children}
      </div>
      <div className="links">
        {profile.email && (
          <a className="contact-link" href={`mailto:${profile.email}`}>
            <Mail size={20} aria-hidden="true" />
            <span>
              <small>EMAIL</small>
              {profile.email}
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        )}
        <a className="contact-link" href={`tel:${profile.phone.number}`}>
          <Phone size={20} aria-hidden="true" />
          <span>
            <small>PHONE</small>
            {profile.phone.display}
          </span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        {profile.linkedIn && (
          <a className="contact-link" href={profile.linkedIn}>
            <LinkedInIcon size={20} />
            <span>
              <small>LINKEDIN</small>
              khalid-karroum
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        )}
        <a className="contact-link" href={profile.github}>
          <GithubIcon size={22} />
          <span>
            <small>GITHUB</small>
            {profile.github.split('/').pop()}
          </span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <ResumeLink />
      </div>
    </section>
  );
}
