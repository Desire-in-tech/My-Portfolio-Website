import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';
import CloudinaryImage from './CloudinaryImage';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-xl overflow-hidden hover:ring-1 hover:ring-primary-accent/50 transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden bg-secondary-bg relative">
        <CloudinaryImage
          src={project.image}
          alt={project.title}
          aspectClass="w-full h-full"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-accent transition-colors">
            {project.title}
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

        <p className="text-muted text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-secondary-bg text-muted rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 bg-secondary-bg text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 bg-primary-accent/10 text-primary-accent rounded-lg hover:bg-primary-accent hover:text-primary-bg transition-colors text-sm"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
