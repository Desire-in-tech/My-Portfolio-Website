import { useState } from 'react';
import { motion } from 'framer-motion';
import { ListFilter as Filter } from 'lucide-react';
import { projects, ProjectCategory } from '../data/projects';
import { images } from '../data/images';
import { ProjectCard, AnimatedSection, Breadcrumbs } from '../components';

const categories: { label: string; value: ProjectCategory | 'All' }[] = [
  { label: 'All Projects', value: 'All' },
  { label: 'Machine Learning', value: 'Machine Learning' },
  { label: 'Backend', value: 'Backend' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>(
    'All'
  );

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-primary-bg pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-bg/30 to-transparent" />
        <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: `url(${images.homePage})` }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Projects' }]} />
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                My Projects
              </h1>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                A showcase of my work in machine learning, backend development,
                and full-stack applications
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center justify-center flex-wrap gap-3 mb-12">
              <div className="flex items-center mr-4 text-muted">
                <Filter size={18} className="mr-2" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              {categories.map((category) => (
                <motion.button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === category.value
                      ? 'bg-primary-accent text-primary-bg'
                      : 'bg-card text-muted hover:bg-secondary-bg border border-gray-800'
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="p-8 bg-card rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in collaboration?
              </h3>
              <p className="text-muted mb-6 max-w-2xl mx-auto">
                I'm always looking for interesting projects and opportunities to
                apply my skills. Let's discuss how I can contribute to your
                team.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-accent text-primary-bg font-semibold rounded-lg hover:bg-primary-accent/90 transition-all"
              >
                Get In Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
