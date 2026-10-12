import {
  ArrowUpRight,
  Check,
  Database,
  FileCheck2,
  ScanLine,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';

export function PipelineVisual() {
  const project = projects[0];

  return (
    <div className="pipeline-wrap">
      <div className="pipeline-panel">
        <div className="panel-titlebar">
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>{project.title} / workflow</span>
          <span className="panel-status">
            <i />
            overview
          </span>
        </div>
        <div className="pipeline-canvas">
          <div className="pipeline-track" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="pipeline-nodes">
            <div>
              <span className="pipeline-node">
                <Database size={20} />
              </span>
              <strong>Application inputs</strong>
            </div>
            <div>
              <span className="pipeline-node">
                <ShieldCheck size={20} />
              </span>
              <strong>Validation contract</strong>
            </div>
            <div>
              <span className="pipeline-node model-node">
                <ScanLine size={20} />
              </span>
              <strong>Calibrated risk model</strong>
            </div>
            <div>
              <span className="pipeline-node">
                <FileCheck2 size={20} />
              </span>
              <strong>Risk band & guidance</strong>
            </div>
          </div>
          <div className="pipeline-review">
            <span className="review-line" aria-hidden="true" />
            <span>
              <Check size={12} aria-hidden="true" />
              Human review
            </span>
          </div>
        </div>
        <div className="pipeline-tools">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="pipeline-log">
          <p>
            <span>01</span>
            <b>INPUT</b> Application inputs → Validation contract
          </p>
          <p>
            <span>02</span>
            <b>MODEL</b> Calibrated risk model → Human review
          </p>
          <p>
            <span>03</span>
            <b>AUDIT</b> Case & audit record → Monitoring
          </p>
        </div>
      </div>
      <Link href={`/projects/${project.slug}`} className="pipeline-caption">
        Explore the project <ArrowUpRight size={14} aria-hidden="true" />
      </Link>
    </div>
  );
}
