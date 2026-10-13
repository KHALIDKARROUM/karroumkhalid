import Link from 'next/link';
import { skillEvidence, skillGroups } from '@/data/skills';
import { getProject } from '@/data/projects';
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Search,
} from 'lucide-react';

const icons = [BrainCircuit, Search, BarChart3, Database, Code2, GitBranch];

export function SkillsGrid() {
  return (
    <dl className="skills-list">
      {skillGroups.map((group, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div className="skill-card" key={group.title}>
            <dt>
              <span className="skill-icon">
                <Icon size={21} aria-hidden="true" />
              </span>
              {group.title}
            </dt>
            <dd>
              <p>{group.description}</p>
              <ul className="skill-items">
                {group.items.map((item) => {
                  const evidence = skillEvidence[item];
                  const project = evidence
                    ? getProject(evidence.project)
                    : undefined;
                  return (
                    <li key={item}>
                      <span aria-hidden="true" />
                      {project ? (
                        <Link
                          className="skill-evidence-link"
                          href={`/projects/${project.slug}${evidence.section ? '#' + evidence.section : ''}`}
                          aria-label={`${item} — see evidence in ${project.title}`}
                        >
                          {item}
                          <small>{project.title} ↗</small>
                        </Link>
                      ) : (
                        <span className="skill-familiarity">
                          {item}
                          <small>Familiarity</small>
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
