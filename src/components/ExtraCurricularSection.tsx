import { Calendar } from 'lucide-react';
import tedxImage from '@/assets/tedXvvit.jpg'; // replace with your actual image
import doodle from '@/assets/doodle.jpg';
const ExtraCurricularSection = () => {
  const activities = [
    {
      title: "Volunteer",
      organization: "TEDxVVIT",
      date: "Oct 2024",
      description:
        "Part of the TEDxVVIT organizing team that led to a successful large-scale tech event attended by 500+ participants.",
      image: tedxImage,
    },
    {
      title: "Doodling",
      organization: "Hobbie",
      date:'During free time',
      description:
        "I love to doodle and draw, it helps me relax and express myself creatively.",
      image: doodle,
    }
    // Add more activities here as needed
  ];

  return (
    <section id="activities" className="section-padding">

      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Extra <span className="text-gradient">Curriculars</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Here are some of the co-curricular and leadership roles I actively participated in
            during my academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="card-portfolio border bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Image */}
                {activity.image && (
                  <img
                    src={activity.image}
                    alt={`${activity.title} event`}
                    className="w-full h-48 object-cover rounded-lg shadow"
                  />
                )}

                {/* Title and Description */}
                <h4 className="text-lg font-semibold text-foreground leading-tight">
                  {activity.title}
                </h4>
                <div className="space-y-2">
                  <p className="text-primary font-medium text-sm">{activity.organization}</p>
                  <div className="flex items-center text-foreground-secondary text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {activity.date}
                  </div>
                </div>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card-portfolio max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-primary">Beyond Academics</h4>
            <p className="text-foreground-secondary leading-relaxed">
              These experiences have helped me build leadership, creativity, and collaboration
              skills outside the classroom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricularSection;
