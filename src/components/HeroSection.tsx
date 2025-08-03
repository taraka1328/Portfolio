import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Animated Background Elements */}
      <div className="floating-orb w-72 h-72 -top-36 -left-36 animate-float" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-96 h-96 -bottom-48 -right-48 animate-float" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-64 h-64 top-1/2 right-1/4 animate-float" style={{ animationDelay: '4s' }} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground">Hello, I'm</span>
            <span className="block text-gradient text-glow">Your Name</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-6">
            Aspiring AI & Software Engineer
          </h2>
          
          <p className="text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about creating innovative solutions at the intersection of artificial intelligence 
            and software development. Building the future, one line of code at a time.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button className="btn-hero group" onClick={() => scrollToAbout()}>
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
          </Button>
          
          <Button variant="outline" className="btn-ghost">
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border-light hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border-light hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:your@email.com"
            className="p-3 rounded-full border border-border-light hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;