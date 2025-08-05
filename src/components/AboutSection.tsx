import { GraduationCap, Target, Heart, Lightbulb } from 'lucide-react';
import profilePhoto from '@/assets/profile.jpg';

const AboutSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      description: "Computer Science student with focus on AI and Machine Learning"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goals",
      description: "Building innovative solutions that make technology more accessible"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "Creating impactful applications that solve real-world problems"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Exploring cutting-edge technologies in AI and software engineering"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            I am a passionate Computer Science Student with a strong interest in Artificial Intelligence (AI),
            Machine Learning, Web Development, and Mobile Applications. I'm driven by the desire to build innovative solutions that address real-world challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">My Journey</h3>
            <p className="text-foreground-secondary leading-relaxed">
              As an aspiring Full Stack Engineer, I'm constantly exploring the intersection 
              of technology and innovation. My journey began with a curiosity about how computers 
              work, which evolved into a passion for creating intelligent systems that can make 
              a meaningful impact.
            </p>
            <p className="text-foreground-secondary leading-relaxed">
              Through my studies and hands-on projects, I've developed expertise in multiple 
              programming languages and frameworks. I'm particularly drawn to machine learning, 
              web development, and mobile applications, always seeking to bridge the gap between 
              complex algorithms and user-friendly interfaces.
            </p>
            <p className="text-foreground-secondary leading-relaxed">
              My goal is to contribute to the advancement of AI technology while building 
              applications that solve real-world problems. I believe in the power of technology 
              to create positive change, and I'm committed to being part of that transformation.
            </p>
          </div>

          {/* Profile Image */}
          <div className="max-w-md mx-auto">
            <div className="aspect-square w-full rounded-2xl bg-gradient-to-r from-primary to-secondary p-1">
              <div className="w-full h-full rounded-xl bg-card flex flex-col items-center justify-center p-6">
                <div className="relative w-56 h-56 mb-4 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src={profilePhoto}
                    alt="Kakumanu Taraka Lakshmi Prasanna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-foreground-secondary font-medium text-center">
                  Kakumanu Taraka Lakshmi Prasanna
                </p>
                <p className="text-sm text-foreground-muted mt-2 text-center">
                  Aspiring Full Stack Engineer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="card-portfolio group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-primary">{item.title}</h4>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
