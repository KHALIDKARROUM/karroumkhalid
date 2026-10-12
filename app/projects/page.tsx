import type { Metadata } from 'next';
import { BackToHome } from '@/components/portfolio/BackToHome';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Machine learning, data analysis, and backend projects by Khalid Karroum.',
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="inner-page" tabIndex={-1}>
      <BackToHome />
      <div className="page-heading">
        <p className="eyebrow">
          <span aria-hidden="true" />
          THE PORTFOLIO
        </p>
        <h1>
          Projects<span className="heading-dot">.</span>
        </h1>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} headingLevel={2} />
        ))}
      </div>
    </main>
  );
}
