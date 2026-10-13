import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { AvailabilityDetails } from '@/components/portfolio/AvailabilityDetails';
import { BackToHome } from '@/components/portfolio/BackToHome';
import { GithubIcon, LinkedInIcon } from '@/components/portfolio/BrandIcons';
import { ResumeLink } from '@/components/portfolio/ResumeLink';
import { profile, socialAccounts } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Email or call Khalid Karroum, view his CV, and explore six-month PFE internship opportunities starting January 2027.',
};

const socialIcons = { linkedin: LinkedInIcon, github: GithubIcon };

export default function ContactPage() {
  return (
    <main id="main-content" className="inner-page contact-page" tabIndex={-1}>
      <BackToHome />
      <section className="contact-hero" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">
            <span aria-hidden="true" />
            LET’S CONNECT
          </p>
          <h1 id="contact-title">
            Contact<span className="heading-dot">.</span>
          </h1>
          <p className="contact-lead">
            A conversation can be the start of something great.
          </p>
          <p className="contact-introduction">
            Get in touch about data science and machine-learning opportunities,
            or view my CV in your browser.
          </p>
        </div>
        <div className="contact-identity-card">
          <span className="profile-monogram" aria-hidden="true">
            KK
          </span>
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.role}</p>
            <span>
              <MapPin size={13} aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>
      </section>

      <section
        className="contact-direct"
        aria-labelledby="direct-contact-title"
      >
        <div>
          <h2 id="direct-contact-title">Get in touch</h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <Mail size={20} aria-hidden="true" />
            <span>{profile.email}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a
            className="contact-email contact-phone"
            href={`tel:${profile.phone.number}`}
          >
            <Phone size={20} aria-hidden="true" />
            <span>{profile.phone.display}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-cv">
          <p>Explore my experience</p>
          <ResumeLink />
          <span className="muted">English · PDF</span>
        </div>
      </section>

      <section className="social-section" aria-labelledby="social-title">
        <div className="contact-section-heading">
          <h2 id="social-title">Find me online</h2>
          <span className="eyebrow">MY SOCIAL ACCOUNTS</span>
        </div>
        <div className="social-grid">
          {socialAccounts.map((account) => {
            const Icon = socialIcons[account.platform];
            return (
              <a
                className="social-card"
                href={account.url}
                key={account.platform}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  account.name +
                  ' — ' +
                  account.handle +
                  ' (opens in a new tab)'
                }
              >
                <div className="social-card-top">
                  <span className="social-icon">
                    <Icon size={26} />
                  </span>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </div>
                <h3>{account.name}</h3>
                <p>{account.description}</p>
                <div className="social-card-bottom">
                  <span>@{account.handle}</span>
                  <span>
                    Visit profile <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section
        className="contact-opportunity"
        aria-labelledby="opportunity-title"
      >
        <div>
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            OPEN TO OPPORTUNITIES
          </p>
          <h2 id="opportunity-title">Let’s put data to work.</h2>
          <p>{profile.availability}</p>
          <AvailabilityDetails />
        </div>
        <div className="contact-opportunity-actions">
          <a
            className="button button-primary"
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <Link className="text-link" href="/projects">
            View my work <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <ResumeLink />
        </div>
      </section>
    </main>
  );
}
