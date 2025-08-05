// src/components/ContactSection.tsx
import { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honey: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honey: '', // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'tarakalakshmiprasanna286@gmail.com',
      href: 'mailto:tarakalakshmiprasanna286@gmail.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 8143546789',
      href: 'tel:+91 8143546789',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Guntur, Andhra Pradesh, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/taraka1328',
      username: '@taraka1328',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/prasanna286',
      username: 'prasanna286',
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || formData.honey !== '') return;

    setIsSubmitting(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '57691c88-5681-4774-afc7-7b8637098182',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: 'Message sent successfully!',
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honey: '',
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error: any) {
      toast({
        title: 'Error sending message',
        description: error?.message || 'Please try again or contact me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background-secondary">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations,
            or just having a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left info panel */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Let's Connect
              </h3>
              <p className="text-foreground-secondary leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss
                opportunities, or simply want to say hello, I'd love to hear
                from you. I'm currently open to internships, entry-level
                positions, and exciting projects.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Contact Information
              </h4>
              {contactInfo.map((contact, i) => (
                <div key={i} className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-lg bg-gradient-primary text-white group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-foreground-secondary">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group p-3 rounded-lg hover:bg-card border border-transparent hover:border-border transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-gradient-secondary text-white group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-foreground font-medium">
                        {social.label}
                      </p>
                      <p className="text-sm text-foreground-secondary">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="card-portfolio">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot (hidden) */}
              <div style={{ display: 'none' }}>
                <label htmlFor="honey">Leave this empty</label>
                <input
                  id="honey"
                  name="honey"
                  type="text"
                  value={formData.honey}
                  onChange={handleInputChange as any}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background-tertiary border-border-light focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background-tertiary border-border-light focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-background-tertiary border-border-light focus:border-primary"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background-tertiary border-border-light focus:border-primary resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                />
              </div>

              <Button
                type="submit"
                className="btn-hero w-full flex justify-center items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm text-primary">
                💡 <strong>Quick Response:</strong> I typically respond within 24
                hours. For urgent matters, feel free to reach out via email or
                LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
