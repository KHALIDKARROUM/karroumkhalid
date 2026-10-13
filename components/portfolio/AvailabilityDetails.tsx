import { profile } from '@/data/profile';

export function AvailabilityDetails() {
  const { internship } = profile;
  return (
    <dl className="availability-details" aria-label="Internship availability">
      <div>
        <dt>Preferred start</dt>
        <dd>{internship.startDate}</dd>
      </div>
      <div>
        <dt>Duration</dt>
        <dd>{internship.duration}</dd>
      </div>
      <div className="availability-roles">
        <dt>Target roles</dt>
        <dd>{internship.targetRoles.join(' · ')}</dd>
      </div>
      <div>
        <dt>Remote work</dt>
        <dd>
          {internship.remote === undefined
            ? 'To discuss'
            : internship.remote
              ? 'Open to remote work'
              : 'On-site preferred'}
        </dd>
      </div>
      <div>
        <dt>Relocation</dt>
        <dd>
          {internship.relocation === undefined
            ? 'To discuss'
            : internship.relocation
              ? 'Open to relocation'
              : 'Based in Skhirate / Rabat'}
        </dd>
      </div>
    </dl>
  );
}
