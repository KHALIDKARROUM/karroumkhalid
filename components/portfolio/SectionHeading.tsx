import type { ReactNode } from 'react';

type SectionHeadingProps = {
  label: string;
  title: string;
  id?: string;
  children?: ReactNode;
};

export function SectionHeading({
  label,
  title,
  id,
  children,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span aria-hidden="true" />
        {label}
      </p>
      <h2 id={id}>{title}</h2>
      {children}
    </div>
  );
}
