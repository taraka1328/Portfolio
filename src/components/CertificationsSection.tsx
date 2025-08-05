import { FileText, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CertificatesSection = () => {
  const certificates = [
    {
      category: "NPTEL",
      icon: <FileText className="h-6 w-6" />,
      items: [
        {
          title: "Programming in Java",
          organization: "Swayam NPTEL",
          date: "Jan-Apr 2024",
          description: "Completed 12-week course with 64%.",
          certificateLink: "https://drive.google.com/file/d/1zAq-dicVhO2bH2RUVxnlsBx8Rp4wu9tk/view?usp=sharing"
        },
        {
          title: "The Joy of Computing with Python",
          organization: "Swayam NPTEL",
          date: "Jan-Apr 2024",
          description: "Earned certification with 80% and achieved Elite Silver.",
          certificateLink: "https://drive.google.com/file/d/18HI_Bmc_1PuS4QwyEF4HcZ-1kPJ9J3y1/view?usp=sharing"
        },
        {
          title: "Deep Learning for Natural Language Processing",
          organization: "Swayam NPTEL",
          date: "Jan-Apr 2024",
          description: "Gained pivot knowledge in this 12 week course.",
          certificateLink: "https://drive.google.com/file/d/1w1czJG7DLGOID3L1DxesWDgadRl-ugux/view?usp=sharing"
        },
        {
          title: "Cloud Computing and Distributed Systems",
          organization: "Swayam NPTEL",
          date: "Jan-Mar 2024",
          description: "Completed 8-Weeks course with 69%.",
          certificateLink: "https://drive.google.com/file/d/12BfdvIkUEi6GHWTuFtWJfls-cgvzkTl5/view?usp=sharing"
        }
      ]
    },
    {
      category: "Udemy",
      icon: <FileText className="h-6 w-6" />,
      items: [
        {
          title: "The Complete Flutter Development Bootcamp with Dart",
          organization: "Udemy",
          date: "May 2024",
          description: "Hands-on projects covering UI, Firebase, and deployment.",
          certificateLink: "https://drive.google.com/file/d/1IVnmk9g0NFHXl-yxeqmusKdIWXuJ0jzJ/view?usp=sharing"
        }
      ]
    },
    {
      category: "CodeTantra",
      icon: <FileText className="h-6 w-6" />,
      items: [
        {
          title: "Problem Solving Using Python",
          organization: "CodeTantra",
          date: "Jun 2023",
          description: "Practiced problem-solving using Python and gained confidence in coding.",
          certificateLink: "https://drive.google.com/file/d/1nTmEur3mlVt3N92_AE7JK_-7t2w5_low/view?usp=sharinghttps://example.com/codetantra-certificate"
        },
        {
          title: "Problem Solving Using C",
          organization: "CodeTantra",
          date: "Nov 2023",
          description: "Practiced problem-solving using C and gained confidence in coding.",
          certificateLink: "https://drive.google.com/file/d/1SmpMVhXjDyCcAC32Izz8t6BDyveajcJa/view?usp=sharinghttps://drive.google.com/file/d/1nTmEur3mlVt3N92_AE7JK_-7t2w5_low/view?usp=sharinghttps://example.com/codetantra-certificate"
        },
        {
          title: "Java Programming",
          organization: "CodeTantra",
          date: "Jul 2024",
          description: "Practiced problem-solving using Java and gained confidence in coding.",
          certificateLink: "https://drive.google.com/file/d/11z6DVaKk_RcmJndQE-o3ZJloqmII08rZ/view?usp=sharing"
        }
      ]
    },
    {
      category: "Forage",
      icon: <FileText className="h-6 w-6" />,
      items: [
        {
          title: "Accenture's Developer and Technology Job Simulation",
          organization: "Forage",
          date: "Oct 2024",
          description: "Gain insights about SDLC , Development Methodologies, STLC.",
          certificateLink: "https://drive.google.com/file/d/1IbTNGmT_Ml_Yt7z_CEiOvIGENdUCAwp5/view?usp=sharing"
        }
      ]
    },
    {
      category: "Coding Challenges",
      icon: <FileText className="h-6 w-6" />,
      items: [
        {
          title: "100 Days of Code Challenge",
          organization: "CodeExpress2.O via Hackerrank",
          date: "Jan – Apr 2024",
          description: "Successfully completed 100 consecutive days of problem-solving and coding practice.",
          certificateLink: "https://drive.google.com/file/d/1aTFd5C6COHGKTWfQ5xA0l_MyUvkMNfm8/view?usp=sharing"
        }
      ]
    },
    {
      category: "Guvi",
      icon: <FileText className="h-6 w-6" />,
      items: [
        {
          title: "Chatgpt for everyone",
          organization: "GUVI",
          date: "Mar 2024",
          description: "Learn about chatgpt and its usage.",
          certificateLink: "https://drive.google.com/file/d/1D3FAQOyIwidj9OwPEf-9xkGMiIbB5Emk/view?usp=sharing"
        },
        {
          title: "Generative AI",
          organization: "Guvi",
          date: "Oct 2024",
          description: "Learn about generative ai and how to build a RAG application.",
          certificateLink: "https://drive.google.com/file/d/1OkXGjp5NBQHw5ej74F0AcUWVu0z6242d/view?usp=sharing"
        }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "NPTEL":
        return "bg-gradient-to-r from-orange-500/20 to-yellow-400/20 border-orange-500/30";
      case "Udemy":
        return "bg-gradient-to-r from-pink-500/20 to-red-500/20 border-pink-500/30";
      case "CodeTantra":
        return "bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-blue-500/30";
      case "Forage":
        return "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30";
      case "Guvi":
        return "bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border-purple-500/30";
      case "Coding Challenges":
        return "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-500/30";
      default:
        return "bg-card border-border";
    }
  };

  const getIconColor = (category: string) => {
    switch (category) {
      case "NPTEL":
        return "text-orange-500";
      case "Udemy":
        return "text-pink-500";
      case "CodeTantra":
        return "text-blue-500";
      case "Forage":
        return "text-green-500";
      case "Guvi":
        return "text-purple-500";
      case "Coding Challenges":
        return "text-yellow-600";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="certificates" className="section-padding">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Here are some of the certifications I've earned across various platforms during my learning journey.
          </p>
        </div>

        <div className="space-y-12">
          {certificates.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-xl mr-4 ${getIconColor(category.category)}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className={`card-portfolio border ${getCategoryColor(category.category)}`}
                    style={{ animationDelay: `${(categoryIndex * 3 + itemIndex) * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-foreground leading-tight">
                        {item.title}
                      </h4>

                      <div className="space-y-2">
                        <p className="text-primary font-medium text-sm">{item.organization}</p>
                        <div className="flex items-center text-foreground-secondary text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.date}
                        </div>
                      </div>

                      <p className="text-foreground-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <Button 
                        variant="outline"
                        className="mt-2 text-sm"
                        onClick={() => window.open(item.certificateLink, "_blank")}
                      >
                        View Certificate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="card-portfolio max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-primary">Lifelong Learning</h4>
            <p className="text-foreground-secondary leading-relaxed">
              Each certification marks a milestone in my journey of continuous learning. I’m constantly upgrading my skills to stay aligned with evolving tech trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
