import { GraduationCap } from 'lucide-react';
import { education } from '@/data/education';

export function EducationTimeline() {
  return (
    <ol
      className="education-timeline"
      aria-label="Education from baccalaureate to master’s studies"
    >
      {education.toReversed().map((item) => (
        <li
          className={
            item.expected ? 'timeline-entry is-current' : 'timeline-entry'
          }
          key={item.id}
        >
          <div className="timeline-marker">
            <GraduationCap size={18} aria-hidden="true" />
          </div>
          <div className="timeline-content">
            <div className="timeline-meta">
              {item.startYear && (
                <span>
                  {item.startYear} — {item.endYear}
                  {item.expected && ' (expected)'}
                </span>
              )}
              {item.expected && (
                <span className="current-study">
                  <span className="status-dot" aria-hidden="true" />
                  In progress
                </span>
              )}
            </div>
            <h3>{item.degree}</h3>
            <p className="education-field">{item.field}</p>
            {item.institution && (
              <p className="education-institution">
                {item.institution}
                <span>{item.location}</span>
              </p>
            )}
            {item.coursework.length > 0 && (
              <ul className="tech-tags" aria-label="Coursework">
                {item.coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
