import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface RelatedProjectsProps {
  projects: Project[];
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-white mb-6">Related Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-card rounded-xl overflow-hidden hover:ring-1 hover:ring-primary-accent/50 transition-all"
          >
            <Link to={`/projects/${project.slug}`} className="block aspect-video overflow-hidden bg-secondary-bg">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-accent transition-colors">
                  <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded ${
                    project.status === 'Deployed'
                      ? 'bg-green-500/10 text-green-400'
                      : 'bg-secondary-accent/10 text-secondary-accent'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-secondary-bg text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                >
                  <Github size={16} /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary-accent/10 text-primary-accent rounded-lg hover:bg-primary-accent hover:text-primary-bg transition-colors text-sm"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
                <Link
                  to={`/projects/${project.slug}`}
                  className="ml-auto inline-flex items-center gap-1 text-primary-accent text-sm font-medium"
                >
                  Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
