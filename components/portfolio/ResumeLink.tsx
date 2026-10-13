import { profile } from '@/data/profile';
import { FileText } from 'lucide-react';

type ResumeLinkProps = {
  compact?: boolean;
};

export function ResumeLink({ compact = false }: ResumeLinkProps) {
  if (!profile.resume.available) return null;

  return (
    <a
      className="button button-secondary"
      href={profile.resume.path}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View CV (opens in a new tab)"
    >
      <FileText size={16} aria-hidden="true" />
      {compact ? 'Resume' : 'View CV'}
    </a>
  );
}
