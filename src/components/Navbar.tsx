import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ChevronDown } from 'lucide-react';
import { projects } from '../data/projects';
import { images } from '../data/images';
import CloudinaryImage from './CloudinaryImage';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects', hasDropdown: true },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProjectsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-bg/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <CloudinaryImage src={images.logo} alt="Desire Eyotaru logo" className="h-8 w-8 rounded-lg" loading="eager" />
            <span className="text-xl font-bold text-white">
              Desire<span className="text-primary-accent">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setIsProjectsOpen(true)}
                  onMouseLeave={() => setIsProjectsOpen(false)}
                >
                  <button
                    onClick={() => setIsProjectsOpen((v) => !v)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                      location.pathname.startsWith('/projects')
                        ? 'text-primary-accent'
                        : 'text-muted hover:text-white'
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isProjectsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-card rounded-xl border border-gray-800 shadow-xl shadow-black/40 overflow-hidden"
                      >
                        <Link
                          to="/projects"
                          className="block px-4 py-2 text-sm text-muted hover:text-primary-accent hover:bg-secondary-bg transition-colors border-b border-gray-800"
                        >
                          All Projects
                        </Link>
                        {projects.map((p) => (
                          <Link
                            key={p.id}
                            to={`/projects/${p.slug}`}
                            className="block px-4 py-2 text-sm text-muted hover:text-primary-accent hover:bg-secondary-bg transition-colors"
                          >
                            {p.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary-accent'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <a
              href="/documents/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-primary-accent/10 border border-primary-accent text-primary-accent rounded-lg hover:bg-primary-accent hover:text-primary-bg transition-all duration-200"
            >
              <Download size={16} />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-gray-800">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.path} className="space-y-2">
                      <Link
                        to={link.path}
                        className={`block py-2 text-base font-medium ${
                          location.pathname.startsWith('/projects')
                            ? 'text-primary-accent'
                            : 'text-muted'
                        }`}
                      >
                        {link.name}
                      </Link>
                      <div className="pl-4 space-y-1 border-l border-gray-800">
                        {projects.map((p) => (
                          <Link
                            key={p.id}
                            to={`/projects/${p.slug}`}
                            className="block py-1.5 text-sm text-muted hover:text-primary-accent transition-colors"
                          >
                            {p.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block py-2 text-base font-medium ${
                        location.pathname === link.path
                          ? 'text-primary-accent'
                          : 'text-muted'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <a
                  href="/documents/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 py-2 text-primary-accent"
                >
                  <Download size={18} />
                  <span className="font-medium">Resume</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
