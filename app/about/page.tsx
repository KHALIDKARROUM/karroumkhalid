import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Languages,
  MapPin,
} from 'lucide-react';
import { BackToHome } from '@/components/portfolio/BackToHome';
import { ContactCTA } from '@/components/portfolio/ContactCTA';
import { EducationTimeline } from '@/components/portfolio/EducationTimeline';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { languages, profile, technicalInterests } from '@/data/profile';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Khalid Karroum’s experience at Delta Holding, education in data science and information systems security, and language skills.',
};

export default function AboutPage() {
  const currentEducation = education[0];

  return (
    <main id="main-content" className="inner-page about-page" tabIndex={-1}>
      <BackToHome />
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-intro">
          <p className="eyebrow">
            <span aria-hidden="true" />
            BEHIND THE WORK
          </p>
          <h1 id="about-title">
            About<span className="heading-dot">.</span>
          </h1>
          <p className="about-name">{profile.name}</p>
          <p className="about-role">{profile.role}</p>
          <p>{profile.positioning}</p>
          <p>
            I build projects that cover data preparation, model evaluation, and
            application development. I’m particularly interested in financial
            risk and anomaly detection.
          </p>
          <div className="about-actions">
            <Link href="/projects" className="button button-primary">
              View my projects <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="text-link">
              Let’s connect <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <aside className="about-profile-card" aria-label="Profile at a glance">
          <div className="profile-card-top">
            <span className="profile-monogram" aria-hidden="true">
              KK
            </span>
            <span className="eyebrow">AT A GLANCE</span>
          </div>
          <dl className="profile-facts">
            <div>
              <dt>
                <MapPin size={15} aria-hidden="true" />
                BASED IN
              </dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>
                <GraduationCap size={15} aria-hidden="true" />
                CURRENT STUDIES
              </dt>
              <dd>
                {currentEducation.degree}
                <span>{currentEducation.field}</span>
              </dd>
            </div>
            <div>
              <dt>
                <BriefcaseBusiness size={15} aria-hidden="true" />
                OPEN TO
              </dt>
              <dd>
                PFE & internship opportunities<span>Data science & AI</span>
              </dd>
            </div>
          </dl>
          <div className="profile-language-preview">
            <Languages size={15} aria-hidden="true" />
            French · B2
            <span />
            English · B2
          </div>
        </aside>
      </section>

      <section className="about-block" aria-labelledby="experience-title">
        <SectionHeading
          label="01 / PROFESSIONAL EXPERIENCE"
          title="Experience"
          id="experience-title"
        />
        {experience.map((item) => (
          <article key={item.id} className="experience-card">
            <div className="experience-heading">
              <span className="company-monogram" aria-hidden="true">
                DH
              </span>
              <div>
                <p className="experience-type">{item.type}</p>
                <h3>{item.company}</h3>
                <p className="experience-focus">{item.focus}</p>
              </div>
              <span className="project-label">{item.project}</span>
            </div>
            <p className="experience-summary">{item.summary}</p>
            <ul className="experience-highlights">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <ul className="tech-tags" aria-label="Technologies and focus areas">
              {item.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="about-block" aria-labelledby="education-title">
        <SectionHeading
          label="02 / ACADEMIC JOURNEY"
          title="Education"
          id="education-title"
        />
        <EducationTimeline />
      </section>

      <section className="about-block" aria-labelledby="languages-title">
        <SectionHeading
          label="03 / COMMUNICATION"
          title="Languages"
          id="languages-title"
        />
        <div className="language-grid">
          {languages.map((language) => (
            <article className="language-card" key={language.name}>
              <span className="language-code" aria-hidden="true">
                {language.name === 'French' ? 'FR' : 'EN'}
              </span>
              <div>
                <h3>{language.name}</h3>
                <p>{language.description} · CEFR</p>
              </div>
              <span
                className="language-level"
                aria-label={language.name + ' level ' + language.level}
              >
                {language.level}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-block" aria-labelledby="approach-title">
        <SectionHeading
          label="04 / MY APPROACH"
          title="How I work"
          id="approach-title"
        />
        <ul className="approach-list">
          <li>Define the problem and establish a baseline.</li>
          <li>Keep training, model selection, and testing separate.</li>
          <li>Use consistent preprocessing in training and inference.</li>
          <li>Document limitations and test the application.</li>
        </ul>
        <div className="about-interests">
          <h3>Interests</h3>
          <ul className="tech-tags">
            {technicalInterests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA>
        <p>{profile.availability}</p>
      </ContactCTA>
    </main>
  );
}
