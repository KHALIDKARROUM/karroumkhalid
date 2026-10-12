import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { ContactCTA } from '@/components/portfolio/ContactCTA';
import { GithubIcon } from '@/components/portfolio/BrandIcons';
import { PipelineVisual } from '@/components/portfolio/PipelineVisual';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ResumeLink } from '@/components/portfolio/ResumeLink';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { SkillsGrid } from '@/components/portfolio/SkillsGrid';
import { education } from '@/data/education';
import { projects } from '@/data/projects';
import { profile, technicalInterests } from '@/data/profile';

export default function Home() {
  const [primaryRole, secondaryRole] = profile.role.split(' & ');

  return (
    <main id="main-content" className="home-page" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Link className="availability-badge" href="/contact">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </Link>
          <div className="hero-identity">
            <span className="monogram" aria-hidden="true">
              KK
              <span />
            </span>
            <div>
              <p>{profile.name}</p>
              <span>
                <MapPin size={12} aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </div>
          <h1 id="hero-title">
            {primaryRole}
            {secondaryRole && (
              <>
                {' '}
                <span className="hero-ampersand">&</span>
                <span className="gradient-text">{secondaryRole}.</span>
              </>
            )}
          </h1>
          <p className="hero-description">{profile.positioning}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#projects">
              View my projects <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <ResumeLink />
            <a className="button button-secondary" href={profile.github}>
              <GithubIcon size={17} />
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <a className="scroll-cue" href="#about">
            <ArrowDown size={13} aria-hidden="true" />
            SCROLL TO EXPLORE
          </a>
        </div>
        <PipelineVisual />
      </section>
      <section
        id="about"
        className="home-section about-preview"
        aria-labelledby="about-title"
      >
        <div>
          <SectionHeading
            label="BEHIND THE WORK"
            title="About"
            id="about-title"
          />
          <p>
            I’m {profile.name}, based in {profile.location}. I work on data
            analysis, machine learning, and backend development.
          </p>
          <p>
            I build projects that cover data preparation, model evaluation, and
            application development. I’m particularly interested in financial
            risk and anomaly detection.
          </p>
          <Link className="text-link" href="/about">
            More about me <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="about-preview-details">
          <p className="eyebrow">EDUCATION</p>
          {education.slice(0, 1).map((item) => (
            <div className="education-card" key={item.id}>
              <span className="education-dot" aria-hidden="true" />
              <p>{item.degree}</p>
              <h3>{item.field}</h3>
              <p>{item.institution}</p>
              <span className="muted">
                {item.startYear} — {item.endYear} (expected) · {item.location}
              </span>
            </div>
          ))}
          <p className="eyebrow interests-label">INTERESTS</p>
          <ul className="tech-tags">
            {technicalInterests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="skills"
        className="home-section"
        aria-labelledby="skills-title"
      >
        <div className="section-header-row">
          <SectionHeading
            label="THE TOOLKIT"
            title="Skills"
            id="skills-title"
          />
          <Link className="text-link" href="/skills">
            Explore my skills <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <SkillsGrid />
      </section>
      <section
        id="projects"
        className="home-section"
        aria-labelledby="projects-title"
      >
        <div className="section-header-row">
          <SectionHeading
            label="SELECTED WORK"
            title="Projects"
            id="projects-title"
          />
          <Link className="text-link" href="/projects">
            All projects <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <ContactCTA>
        <p>{profile.availability}</p>
      </ContactCTA>
    </main>
  );
}
