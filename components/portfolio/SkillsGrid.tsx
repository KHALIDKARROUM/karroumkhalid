import { skillGroups } from '@/data/skills';
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
                {group.items.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
