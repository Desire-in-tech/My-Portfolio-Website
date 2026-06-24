import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone, ExternalLink, LucideIcon, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { profile } from '../data/profile';
import { socials } from '../data/socials';
import { AnimatedSection } from '../components';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: profile.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-bg pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-bg/30 to-transparent" />
        <div className="absolute inset-0 bg-[url('/images/Contact_page.png')] bg-cover bg-center opacity-5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Get In Touch
              </h1>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Have a project in mind or want to discuss opportunities? I'd love
                to hear from you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <motion.a
                      href={`mailto:${profile.email}`}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-4 bg-card rounded-xl border border-gray-800 hover:border-primary-accent/50 transition-colors"
                    >
                      <div className="p-3 bg-primary-accent/10 rounded-lg text-primary-accent mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted">Email</p>
                        <p className="text-white">{profile.email}</p>
                      </div>
                    </motion.a>

                    <motion.a
                      href={`tel:${profile.phone}`}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-4 bg-card rounded-xl border border-gray-800 hover:border-primary-accent/50 transition-colors"
                    >
                      <div className="p-3 bg-primary-accent/10 rounded-lg text-primary-accent mr-4">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted">Phone</p>
                        <p className="text-white">{profile.phone}</p>
                      </div>
                    </motion.a>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-4 bg-card rounded-xl border border-gray-800"
                    >
                      <div className="p-3 bg-secondary-accent/10 rounded-lg text-secondary-accent mr-4">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted">Location</p>
                        <p className="text-white">{profile.location}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <ExternalLink size={18} className="mr-2 text-primary-accent" />
                    Social Links
                  </h3>
                  <div className="flex items-center space-x-4">
                    {socials.map((social) => {
                      const Icon = iconMap[social.icon];
                      return (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center p-4 bg-card rounded-xl border border-gray-800 hover:border-primary-accent/50 hover:bg-secondary-bg transition-all"
                        >
                          <Icon size={24} color="white" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 rounded-xl border border-primary-accent/20"
                >
                  <p className="text-muted mb-2">
                    I typically respond within 24-48 hours. For urgent inquiries,
                    please reach out via email directly.
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-2xl border border-gray-800 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h2>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-500" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                      >
                        <AlertCircle size={18} className="text-red-400 shrink-0" />
                        <p className="text-red-400 text-sm">
                          Something went wrong. Please email me directly at{' '}
                          <a href={`mailto:${profile.email}`} className="underline">
                            {profile.email}
                          </a>
                        </p>
                      </motion.div>
                    )}

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 bg-secondary-bg border border-gray-700 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 bg-secondary-bg border border-gray-700 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary-accent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-secondary-bg border border-gray-700 rounded-lg text-white placeholder-muted focus:outline-none focus:border-primary-accent transition-colors resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-primary-accent text-primary-bg font-semibold rounded-lg hover:bg-primary-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={18} />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
