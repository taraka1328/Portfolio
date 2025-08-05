import { useState } from 'react';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cpProject from '@/assets/cp-project.png';
import constitution from '@/assets/constitution.jpg';
import Rag from '@/assets/Rag.jpg';
import flutter from '@/assets/flutter.png';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: string;
  features: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  imageUrl: string;
}

const ProjectImage: React.FC<{ src: string; title: string }> = ({ src, title }) => {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative mb-6 rounded-xl overflow-hidden border border-border-light group">
      <div className="aspect-video w-full overflow-hidden bg-gray-50 flex items-center justify-center">
        {!errored ? (
          <div className="relative w-full h-full flex items-center justify-center">
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-sm text-foreground-secondary">
                  Loading image...
                </div>
              </div>
            )}
            <img
              src={src}
              alt={`${title} screenshot`}
              className="max-w-full max-h-full"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setErrored(true)}
              style={{ backgroundColor: 'rgba(243, 244, 246, 1)' }}
            />
          </div>
        ) : (
          <div className="text-center p-8">
            <ImageIcon className="h-16 w-16 mx-auto mb-4 text-primary" />
            <p className="text-foreground-secondary font-medium">
              Project Screenshot
            </p>
            <p className="text-sm text-foreground-muted mt-2">
              UI/Demo mockup placeholder
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: 'Crop Monitoring',
      description:
        'A web based application for easy crop recommendation, disease detection, weather forecasting and a chatbot for solving farmer queries.',
      technologies: ['Streamlit', 'Python', 'Hugging face models', 'APIs'],
      category: 'AI/ML',
      status: 'Completed',
      features: [
        'Crop recommendation based on soil',
        'Disease Detection',
        'Weather forecasting',
        'Chatbot',
      ],
      githubUrl: 'https://github.com/taraka1328/cp-project',
      liveUrl: 'https://cropmonitoring.streamlit.app/',
      imageUrl: cpProject,
    },
    {
      title: 'Learn India Constitution',
      description:
        'A mobile application for learning Indian constitution easily with better interaction.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      category: 'Mobile App',
      status: 'In Progress',
      features: [
        'Provide content for Preamble, Articles, Amendments, Schedules',
        'Chatbot for easy doubt clarification',
        'Weekly Quizes',
        'Learning materials',
      ],
      githubUrl: null,
      liveUrl: null,
      imageUrl: constitution,
    },
    {
      title: 'AI based Medical Chatbot',
      description:
        'It is a chatbot which can generate solutions for the user queries related to health and medicine.',
      technologies: ['Python', 'Hugging face model'],
      category: 'AI/ML',
      status: 'Completed',
      features: ['Medical chatbot to solve user queries'],
      githubUrl: "https://github.com/taraka1328/Medical-Chabot-RAG",
      liveUrl: null,
      imageUrl: Rag,
    },
    {
      title: 'Flutter Projects',
      description:
        'Developed various flutter project like flash chart,bmi calculator, xylophone to improve my skills.',
      technologies: ['Flutter', "Dart", "Firebase"],
      category: 'Mobile App',
      status: 'Completed',
      features: [
        'FlashChat: A group chat mobile app',
        "BMI Calculator: Check wherether user in under weight or not.",
        "Todoey: A todo application for noting tasks."
      ],
      githubUrl: 'https://github.com/taraka1328/flutter_projects',
      liveUrl: null,
      imageUrl: flutter,
    },
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
            A showcase of my technical projects demonstrating skills in AI, web
            development, mobile applications, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-portfolio group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <ProjectImage src={project.imageUrl} title={project.title} />

              {/* Project Details */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                          project.category
                        )}`}
                      >
                        {project.category}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          project.status
                        )}`}
                      >
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
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    Key Features
                  </h4>
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
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge">
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
                    onClick={() =>
                      project.githubUrl
                        ? window.open(project.githubUrl, '_blank')
                        : undefined
                    }
                    disabled={!project.githubUrl}
                    aria-label={
                      project.githubUrl ? 'Open GitHub' : 'GitHub link unavailable'
                    }
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="btn-hero flex-1"
                      onClick={() => window.open(project.liveUrl!, '_blank')}
                      aria-label="Live demo"
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
            <h4 className="text-xl font-semibold mb-4 text-primary">
              More Projects Coming Soon
            </h4>
            <p className="text-foreground-secondary leading-relaxed mb-6">
              I'm constantly working on new projects and exploring emerging
              technologies. Check out my GitHub for the latest updates and code
              repositories.
            </p>
            <Button
              className="btn-hero"
              onClick={() =>
                window.open(
                  'https://github.com/taraka1328',
                  '_blank',
                  'noopener'
                )
              }
              aria-label="View all on GitHub"
            >
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
