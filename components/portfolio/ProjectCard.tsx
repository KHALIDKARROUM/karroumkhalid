import Link from 'next/link';
import type { Project } from '@/types/portfolio';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ProjectArtwork } from './ProjectArtwork';

type ProjectCardProps = {
  project: Project;
  headingLevel?: 2 | 3;
};

export function ProjectCard({ project, headingLevel = 3 }: ProjectCardProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';

  return (
    <article className="project-card" data-accent={project.accent}>
      <Link
        className="artwork-link"
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title}`}
        tabIndex={-1}
      >
        <ProjectArtwork slug={project.slug} />
      </Link>
      <div className="project-card-body">
        <p className="project-eyebrow">{project.eyebrow}</p>
        <Heading>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </Heading>
        <p>{project.oneLine}</p>
        <ul className="tech-tags" aria-label="Technologies">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-card-links">
          <Link href={`/projects/${project.slug}`}>
            Case study <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <a
            href={project.repository}
            aria-label={`${project.title} source code on GitHub`}
          >
            Source code <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
