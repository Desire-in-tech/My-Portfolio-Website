import { motion } from 'framer-motion';
import { User, Code, Laptop, Lightbulb, Rocket } from 'lucide-react';
import { profile } from '../data/profile';
import { skillCategories } from '../data/skills';
import { images } from '../data/images';
import { AnimatedSection, SkillBadge, Breadcrumbs, CloudinaryImage } from '../components';

const highlights = [
  {
    icon: Code,
    title: 'Self-Taught Engineer',
    description:
      'Started with curiosity and built expertise through hands-on projects and continuous learning.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description:
      'Passionate about creating practical solutions that address real business challenges.',
  },
  {
    icon: Laptop,
    title: 'Full-Stack Developer',
    description:
      'Comfortable working across the entire stack from ML models to REST APIs to React frontends.',
  },
  {
    icon: Rocket,
    title: 'Continuous Learner',
    description:
      'Always exploring new technologies, frameworks, and methodologies in software development.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-primary-bg pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-bg/30 to-transparent" />
        <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: `url(${images.aboutPage})` }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'About' }]} />
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                About Me
              </h1>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Get to know my journey, skills, and what drives me as a developer
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection>
              <div className="lg:sticky lg:top-24">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden bg-card ring-1 ring-gray-800"
                >
                  <CloudinaryImage
                    src={images.profilePhoto}
                    alt={profile.name}
                    aspectClass="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-50" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-muted">Available</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection delay={0.1}>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <User className="mr-3 text-primary-accent" size={28} />
                    Who I Am
                  </h2>
                  <div className="space-y-4 text-muted leading-relaxed">
                    <p>
                      I'm a project-based software engineer and data scientist with
                      hands-on experience building real-world applications. I
                      developed a Dash segmentation app, a churn prediction
                      platform, FastAPIs, and more — each one tackling a genuine
                      business problem.
                    </p>
                    <p>
                      I specialize in machine learning and backend development,
                      bridging the gap between data science and production systems.
                      From training ML models with XGBoost and BERT to deploying
                      Django REST APIs, I enjoy every step of the process.
                    </p>
                    <p>
                      I am always willing to learn, grow, and put in the work to
                      deliver. I'm seeking remote opportunities worldwide and am
                      open to employers hiring from Africa (Uganda, GMT+3).
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-5 bg-card rounded-xl border border-gray-800 hover:border-primary-accent/30 transition-colors"
                    >
                      <highlight.icon
                        size={24}
                        className="text-primary-accent mb-3"
                      />
                      <h3 className="text-white font-semibold mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted text-sm">{highlight.description}</p>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Technical Skills
              </h2>
              <p className="text-muted">
                Technologies and tools I work with on a daily basis
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={category.category} delay={index * 0.1}>
                <div className="p-6 bg-card rounded-xl border border-gray-800 hover:border-primary-accent/30 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill}>{skill}</SkillBadge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 rounded-2xl border border-primary-accent/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Looking for a Developer?
              </h3>
              <p className="text-muted mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting
                projects, or just chatting about technology.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center px-6 py-3 bg-primary-accent text-primary-bg font-semibold rounded-lg hover:bg-primary-accent/90 transition-all"
              >
                Get In Touch
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
