import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/taraka1328', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/prasanna286', label: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:tarakalakshmiprasanna286@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-50"></div>
      
      <div className="relative container-portfolio">
        {/* Main footer content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Your Portfolio</h3>
              <p className="text-foreground-secondary leading-relaxed">
                Aspiring Full Stack Engineer passionate about creating innovative 
                solutions and building the future through technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-lg border border-border-light hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-foreground-secondary hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-foreground-secondary">
                  Ready to collaborate on your next project?
                </p>
                <a
                  href="mailto:tarakalakshmiprasanna286@gmail.com"
                  className="block text-primary hover:text-primary-light transition-colors duration-300 font-medium"
                >
                  tarakalakshmiprasanna286@gmail.com
                </a>
                <p className="text-foreground-secondary text-sm">
                  Available for internships and entry-level positions
                </p>
              </div>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-hero w-full mt-4"
              >
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-foreground-secondary text-sm">
              <span>© {currentYear} Taraka Lakshmi Prasanna.</span>
              
              
            </div>

            {/* Back to top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="btn-ghost"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Additional info */}
        <div className="pb-6">
          <div className="text-center">
            <p className="text-xs text-foreground-muted">
              This portfolio showcases my journey in technology. 
              Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top FAB */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 btn-hero rounded-full shadow-hover z-40 hidden md:flex"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;