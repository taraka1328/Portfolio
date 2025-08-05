import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const experiences = [
    {
      type: "work",
      title: "Web Developer Intern",
      company: "Abhyaz",
      location : "remote",
      period: "Jun 2025-Present",
      description: "Developed applications using Zoho sites. Collaborated with cross-functional teams to deliver high-quality solutions.",
      achievements: [
        "Build a website using zoho sites",
        "Build figma designs for web pages with better user experience",
        "Collaborated with the design team members"
      ],
      technologies: ["Zoho Sites","Figma","Canva"]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'project':
        return '🔬';
      case 'certification':
        return '🏆';
      default:
        return '📋';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'text-primary';
      case 'project':
        return 'text-secondary';
      case 'certification':
        return 'text-accent';
      default:
        return 'text-foreground-secondary';
    }
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            My journey through internships, research projects, and professional certifications 
            that have shaped my expertise and career path.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-12"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>

                {/* Experience card */}
                <div className="card-portfolio">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">{getTypeIcon(exp.type)}</span>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                        <span className={`font-medium ${getTypeColor(exp.type)}`}>
                          {exp.company}
                        </span>
                        <div className="flex items-center text-foreground-secondary text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center text-foreground-secondary text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                   {/* <Button variant="outline" size="sm" className="btn-ghost lg:ml-4">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button> */}
                  </div>

                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="flex items-center text-sm font-semibold text-primary mb-3">
                      <Award className="h-4 w-4 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start text-foreground-secondary text-sm"
                        >
                          <span className="text-primary mr-2 mt-1">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="skill-badge"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="card-portfolio max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-primary">Ready for New Challenges</h4>
            <p className="text-foreground-secondary leading-relaxed mb-6">
              I'm always looking for opportunities to apply my skills and learn from experienced professionals. 
              Let's discuss how I can contribute to your team.
            </p>
            <Button
              className="btn-hero"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Me
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;