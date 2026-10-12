import type { Metadata } from 'next';
import Link from 'next/link';
import { BackToHome } from '@/components/portfolio/BackToHome';
import { ContactCTA } from '@/components/portfolio/ContactCTA';
import { education } from '@/data/education';
import { profile, technicalInterests } from '@/data/profile';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Khalid Karroum’s education, interests, and approach to machine learning.',
};

export default function AboutPage() {
  return (
    <main id="main-content" className="inner-page about-page" tabIndex={-1}>
      <BackToHome />
      <section className="about-intro" aria-labelledby="about-title">
        <p className="eyebrow">
          <span aria-hidden="true" />
          BEHIND THE WORK
        </p>
        <h1 id="about-title">
          About<span className="heading-dot">.</span>
        </h1>
        <p className="about-role">
          {profile.role} · {profile.location}
        </p>
        <p>{profile.positioning}</p>
        <p>{profile.availability}</p>
        <p>
          I’m {profile.name}, based in {profile.location}. I work on data
          analysis, machine learning, and backend development.
        </p>
        <p>
          I build projects that cover data preparation, model evaluation, and
          application development. I’m particularly interested in financial risk
          and anomaly detection.
        </p>
      </section>

      <section className="about-block" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        {education.map((item) => (
          <div className="education-card" key={item.field}>
            <p>
              <strong>{item.degree}</strong>
              <br />
              {item.field}
              <br />
              {item.location}
            </p>
            {item.institution && <p>{item.institution}</p>}
            {item.startYear && (
              <p>
                {item.startYear}
                {item.endYear ? ` – ${item.endYear}` : ' – present'}
              </p>
            )}
            {item.coursework.length > 0 && (
              <p>Coursework: {item.coursework.join(', ')}</p>
            )}
          </div>
        ))}
      </section>

      <section className="about-block" aria-labelledby="approach-title">
        <h2 id="approach-title">How I work</h2>
        <ul className="approach-list">
          <li>Define the problem and establish a baseline.</li>
          <li>Keep training, model selection, and testing separate.</li>
          <li>Use consistent preprocessing in training and inference.</li>
          <li>Document limitations and test the application.</li>
        </ul>
      </section>

      <section className="about-block" aria-labelledby="interests-title">
        <h2 id="interests-title">Interests</h2>
        <ul className="tech-tags">
          {technicalInterests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
        <p>
          <Link href="/projects">View my projects</Link>
        </p>
      </section>

      <ContactCTA />
    </main>
  );
}
