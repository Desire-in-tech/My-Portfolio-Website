import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CircleCheck as CheckCircle, Layers } from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { AnimatedSection, RelatedArticles, Breadcrumbs, CloudinaryImage } from '../components';
import { useSeo } from '../hooks/use-seo';
import { getRelatedArticlesForProject } from '../lib/related';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const relatedArticles = useMemo<BlogPost[]>(() => {
    if (!project) return [];
    return getRelatedArticlesForProject(project, blogPosts);
  }, [project]);

  useSeo({
    title: project ? `${project.title} | Desire Eyotaru` : 'Project | Desire Eyotaru',
    description: project?.description ?? '',
    image: project?.image,
    type: 'article',
    canonical: project ? `https://desireeyotaru.vercel.app/projects/${project.slug}` : undefined,
  });

  if (!project) {
    return (
      <div className="min-h-screen bg-primary-bg pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary-accent hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-primary-bg pt-20">
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-bg/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Breadcrumbs
              items={[
                { label: 'Home', path: '/' },
                { label: 'Projects', path: '/projects' },
                { label: project.title },
              ]}
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted hover:text-primary-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Projects
            </Link>

            <div className="flex items-center gap-3 mb-4 text-sm text-muted">
              <span className="px-2 py-1 bg-primary-accent/10 text-primary-accent rounded font-medium">
                {project.category}
              </span>
              <span
                className={`px-2 py-1 rounded font-medium ${
                  project.status === 'Deployed'
                    ? 'bg-green-500/10 text-green-400'
                    : 'bg-secondary-accent/10 text-secondary-accent'
                }`}
              >
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-muted text-lg mb-8">{project.description}</p>

            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-secondary-bg text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github size={18} /> View Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-primary-accent text-primary-bg rounded-lg hover:bg-primary-accent/90 transition-colors"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="aspect-video rounded-2xl overflow-hidden bg-secondary-bg border border-gray-800"
          >
            <CloudinaryImage
              src={project.image}
              alt={project.title}
              aspectClass="w-full h-full"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {project.longDescription && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-muted leading-relaxed">{project.longDescription}</p>
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-muted">
                      <CheckCircle size={18} className="text-primary-accent mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.architecture && project.architecture.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Architecture</h2>
                <div className="space-y-3">
                  {project.architecture.map((layer, i) => (
                    <div
                      key={layer}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl border border-gray-800"
                    >
                      <Layers size={18} className="text-primary-accent shrink-0" />
                      <span className="text-white">{layer}</span>
                      {i < project.architecture!.length - 1 && (
                        <span className="ml-auto text-muted text-xs">layer {i + 1}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside>
            <div className="sticky top-24 bg-card rounded-xl border border-gray-800 p-6">
              <h3 className="text-white font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary-bg text-muted rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedArticles posts={relatedArticles} />
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className="py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.slug}`}
                  className="group bg-card rounded-xl overflow-hidden hover:ring-1 hover:ring-primary-accent/50 transition-all"
                >
                  <div className="aspect-video overflow-hidden bg-secondary-bg">
                    <CloudinaryImage
                      src={p.image}
                      alt={p.title}
                      aspectClass="w-full h-full"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-muted text-sm mt-2 line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
