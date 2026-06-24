import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, LucideIcon } from 'lucide-react';
import { socials } from '../data/socials';
import { profile } from '../data/profile';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
};

export default function Footer() {
  return (
    <footer className="bg-secondary-bg border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white">
                Desire<span className="text-primary-accent">.</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted hover:text-primary-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex items-center space-x-4">
              {socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-card rounded-lg text-muted hover:text-primary-accent hover:bg-card/80 transition-all"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
              <a
                href={`mailto:${profile.email}`}
                className="p-2 bg-card rounded-lg text-muted hover:text-primary-accent hover:bg-card/80 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
