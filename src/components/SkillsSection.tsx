import { Code, Database, Smartphone, Globe, Brain, Users, MessageCircle, Zap } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { category: "Programming Languages", icon: <Code className="h-6 w-6" />, skills: ["Python", "Java", "C", "Dart", "JavaScript", "HTML", "CSS"] },
    { category: "Databases", icon: <Database className="h-6 w-6" />, skills: ["MySQL", "MongoDB", "Firebase"] },
    { category: "Frameworks & Tools", icon: <Globe className="h-6 w-6" />, skills: ["Flutter", ".NET", "React", "Node.js"] },
    { category: "AI & Machine Learning", icon: <Brain className="h-6 w-6" />, skills: ["TensorFlow", "PyTorch", "Scikit-learn","KNN Model","SVM"] }
  ];

  const softSkills = [
    { name: "Adaptability", icon: <Zap className="h-5 w-5" />, level: 90 },
    { name: "Teamwork", icon: <Users className="h-5 w-5" />, level: 85 },
    { name: "Communication", icon: <MessageCircle className="h-5 w-5" />, level: 88 },
    { name: "Leadership", icon: <Users className="h-5 w-5" />, level: 80 }
  ];

  return (
    <section id="skills" className="section-padding bg-background-secondary">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills 
            developed through projects, internships, and continuous learning.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-12 text-primary">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => (
              <div 
                key={index}
                className="card-portfolio"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-primary text-white mr-3">
                    {category.icon}
                  </div>
                  <h4 className="font-semibold text-foreground">{category.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12 text-primary">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="card-portfolio"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-gradient-secondary text-white mr-3">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">{skill.name}</h4>
                  </div>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="card-portfolio max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-primary">Always Learning</h4>
            <p className="text-foreground-secondary leading-relaxed">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              I regularly explore new frameworks, languages, and methodologies to stay 
              current with industry trends and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;