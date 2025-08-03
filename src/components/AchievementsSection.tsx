import { Trophy, Award, Star, Target, Calendar } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      category: "Awards & Recognition",
      icon: <Trophy className="h-6 w-6" />,
      items: [
        {
          title: "Dean's List",
          organization: "University Computer Science Department",
          date: "Fall 2023, Spring 2024",
          description: "Achieved GPA of 3.8+ for consecutive academic semesters"
        },
        {
          title: "Outstanding Student Award",
          organization: "Tech Excellence Foundation",
          date: "May 2024",
          description: "Recognized for exceptional academic performance and leadership in technology"
        }
      ]
    },
    {
      category: "Hackathons & Competitions",
      icon: <Star className="h-6 w-6" />,
      items: [
        {
          title: "1st Place - AI Innovation Hackathon",
          organization: "TechCorp Annual Hackathon",
          date: "March 2024",
          description: "Led team to victory with AI-powered sustainability solution, competing against 50+ teams"
        },
        {
          title: "2nd Place - Mobile App Challenge",
          organization: "University Tech Fair",
          date: "November 2023",
          description: "Developed innovative mobile application for student productivity and collaboration"
        },
        {
          title: "Finalist - National Coding Competition",
          organization: "CodeMasters Championship",
          date: "August 2023",
          description: "Ranked top 20 out of 500+ participants in algorithmic programming competition"
        }
      ]
    },
    {
      category: "Academic Excellence",
      icon: <Award className="h-6 w-6" />,
      items: [
        {
          title: "Perfect Score - Data Structures & Algorithms",
          organization: "University Course",
          date: "Spring 2024",
          description: "Achieved 100% final grade in advanced computer science course"
        },
        {
          title: "Research Publication",
          organization: "IEEE Conference Proceedings",
          date: "June 2024",
          description: "Co-authored paper on 'Machine Learning Applications in Edge Computing'"
        },
        {
          title: "Academic Scholarship Recipient",
          organization: "Merit-Based Excellence Fund",
          date: "2023-2024",
          description: "Awarded full tuition scholarship for outstanding academic achievement"
        }
      ]
    },
    {
      category: "Professional Milestones",
      icon: <Target className="h-6 w-6" />,
      items: [
        {
          title: "Open Source Contributor",
          organization: "Major Tech Projects",
          date: "2023-Present",
          description: "Contributing to popular open-source projects with 10+ merged pull requests"
        },
        {
          title: "Technical Workshop Leader",
          organization: "University Coding Club",
          date: "Fall 2023",
          description: "Led weekly workshops on web development for 30+ students"
        },
        {
          title: "Mentorship Program",
          organization: "Peer Learning Initiative",
          date: "2023-Present",
          description: "Mentoring 5+ junior students in programming and career development"
        }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Awards & Recognition":
        return "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30";
      case "Hackathons & Competitions":
        return "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30";
      case "Academic Excellence":
        return "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30";
      case "Professional Milestones":
        return "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30";
      default:
        return "bg-card border-border";
    }
  };

  const getIconColor = (category: string) => {
    switch (category) {
      case "Awards & Recognition":
        return "text-yellow-500";
      case "Hackathons & Competitions":
        return "text-purple-500";
      case "Academic Excellence":
        return "text-blue-500";
      case "Professional Milestones":
        return "text-green-500";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="achievements" className="section-padding">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            A collection of awards, recognitions, and milestones that highlight my academic 
            excellence, competitive spirit, and professional growth.
          </p>
        </div>

        <div className="space-y-12">
          {achievements.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-xl mr-4 ${getIconColor(category.category)}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{category.category}</h3>
              </div>

              {/* Achievement Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className={`card-portfolio border ${getCategoryColor(category.category)}`}
                    style={{ animationDelay: `${(categoryIndex * 3 + itemIndex) * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      {/* Achievement Title */}
                      <h4 className="text-lg font-semibold text-foreground leading-tight">
                        {item.title}
                      </h4>

                      {/* Organization & Date */}
                      <div className="space-y-2">
                        <p className="text-primary font-medium text-sm">
                          {item.organization}
                        </p>
                        <div className="flex items-center text-foreground-secondary text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.date}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-foreground-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center card-portfolio">
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <p className="text-foreground-secondary text-sm">Awards & Recognition</p>
            </div>
            <div className="text-center card-portfolio">
              <div className="text-3xl font-bold text-gradient mb-2">5+</div>
              <p className="text-foreground-secondary text-sm">Hackathon Wins</p>
            </div>
            <div className="text-center card-portfolio">
              <div className="text-3xl font-bold text-gradient mb-2">3.8+</div>
              <p className="text-foreground-secondary text-sm">Cumulative GPA</p>
            </div>
            <div className="text-center card-portfolio">
              <div className="text-3xl font-bold text-gradient mb-2">10+</div>
              <p className="text-foreground-secondary text-sm">Published Projects</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="card-portfolio max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-primary">Continuous Growth</h4>
            <p className="text-foreground-secondary leading-relaxed">
              These achievements represent just the beginning of my journey. I'm committed to 
              continuous learning, innovation, and making meaningful contributions to the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;