import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Cpu, Rocket } from 'lucide-react';
import { profile } from '../data/profile';
import { getFeaturedProjects } from '../data/projects';
import { images } from '../data/images';
import { ProjectCard, AnimatedSection } from '../components';

const stats = [
  { icon: Code, label: 'Projects Built', value: '6+' },
  { icon: Rocket, label: 'Deployed Applications', value: 'Multiple' },
  { icon: Cpu, label: 'Focus Area', value: 'ML & Backend' },
];

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-primary-bg">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-primary-bg to-secondary-bg" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-accent/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${images.homePage})` }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-accent/10 border border-primary-accent/30 rounded-full text-primary-accent text-sm font-medium mb-6">
                {profile.available ? 'Available for Opportunities' : 'Currently Busy'}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {profile.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-10"
            >
              {profile.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/projects"
                className="flex items-center space-x-2 px-6 py-3 bg-primary-accent text-primary-bg font-semibold rounded-lg hover:bg-primary-accent/90 transition-all duration-200 shadow-lg shadow-primary-accent/20"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href="/documents/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-transparent border border-gray-700 text-white rounded-lg hover:border-primary-accent hover:text-primary-accent transition-all duration-200"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-accent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-secondary-bg/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center space-x-4 p-6"
                >
                  <div className="p-3 bg-card rounded-xl text-primary-accent">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-muted text-sm">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                A selection of my best work in machine learning and backend development
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 text-primary-accent hover:underline"
              >
                <span>View All Projects</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-primary-bg to-secondary-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Whether you
              need a machine learning solution, a robust API, or a full-stack
              application, let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-accent text-primary-bg font-semibold rounded-lg hover:bg-primary-accent/90 transition-all duration-200 shadow-lg shadow-primary-accent/20"
            >
              <span>Get In Touch</span>
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
