import { Github, ExternalLink, Image as ImageIcon, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Chat Application",
      description: "A real-time chat application with AI-powered responses and sentiment analysis. Built with modern web technologies and machine learning integration.",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "Socket.io", "MongoDB"],
      category: "AI/ML",
      status: "Completed",
      features: [
        "Real-time messaging with WebSocket",
        "AI-powered auto-responses",
        "Sentiment analysis of conversations",
        "User authentication and profiles"
      ],
      githubUrl: "https://github.com/username/ai-chat-app",
      liveUrl: "https://ai-chat-demo.com",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "Personal Finance Tracker",
      description: "A comprehensive mobile application for tracking expenses, managing budgets, and analyzing spending patterns with beautiful data visualizations.",
      technologies: ["Flutter", "Dart", "Firebase", "Chart.js", "SQLite"],
      category: "Mobile App",
      status: "In Progress",
      features: [
        "Expense tracking and categorization",
        "Budget planning and alerts",
        "Interactive spending analytics",
        "Cross-platform compatibility"
      ],
      githubUrl: "https://github.com/username/finance-tracker",
      liveUrl: null,
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "Smart Home IoT Dashboard",
      description: "A web-based dashboard for monitoring and controlling smart home devices with real-time data visualization and automated controls.",
      technologies: ["React", "Python", "Flask", "IoT", "MQTT", "Chart.js"],
      category: "IoT",
      status: "Completed",
      features: [
        "Real-time device monitoring",
        "Automated control systems",
        "Energy consumption analytics",
        "Mobile-responsive design"
      ],
      githubUrl: "https://github.com/username/smart-home",
      liveUrl: "https://smart-home-demo.com",
      imageUrl: "/api/placeholder/600/400"
    },
    {
      title: "Machine Learning Stock Predictor",
      description: "A machine learning model that predicts stock prices using historical data and various technical indicators with a web interface for visualization.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "D3.js", "APIs"],
      category: "AI/ML",
      status: "Completed",
      features: [
        "LSTM neural network for prediction",
        "Technical indicator analysis",
        "Interactive stock charts",
        "Portfolio optimization suggestions"
      ],
      githubUrl: "https://github.com/username/stock-predictor",
      liveUrl: null,
      imageUrl: "/api/placeholder/600/400"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-primary text-primary-foreground';
      case 'Mobile App':
        return 'bg-secondary text-secondary-foreground';
      case 'IoT':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-card-border text-foreground-secondary';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-success/20 text-success border-success/30';
      case 'In Progress':
        return 'bg-warning/20 text-warning border-warning/30';
      default:
        return 'bg-card-border text-foreground-secondary border-border';
    }
  };

  return (
    <section id="projects" className="section-padding bg-background-secondary">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating skills in AI, web development, 
            mobile applications, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-portfolio group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-primary/10 border border-border-light">
                <div className="aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <ImageIcon className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <p className="text-foreground-secondary font-medium">Project Screenshot</p>
                    <p className="text-sm text-foreground-muted mt-2">
                      UI/Demo mockup placeholder
                    </p>
                  </div>
                </div>
                {/* Overlay with quick actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" className="btn-hero">
                    <Code className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  {project.liveUrl && (
                    <Button size="sm" variant="outline" className="btn-ghost">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start text-foreground-secondary text-sm"
                      >
                        <span className="text-primary mr-2 mt-1">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="skill-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="btn-ghost flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      className="btn-hero flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-16">
          <div className="card-portfolio max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-primary">More Projects Coming Soon</h4>
            <p className="text-foreground-secondary leading-relaxed mb-6">
              I'm constantly working on new projects and exploring emerging technologies. 
              Check out my GitHub for the latest updates and code repositories.
            </p>
            <Button className="btn-hero">
              <Github className="h-4 w-4 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;