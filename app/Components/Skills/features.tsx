import React from 'react';
import { Globe, TrendingUp, Briefcase } from 'lucide-react';

const SkillDevelopmentSection = () => {
  const features = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      stat: "75%",
      title: "Employer Priorities",
      description: "Employers prioritize soft skills over academic performance"
    },
    {
      icon: <Globe className="w-12 h-12 text-green-600" />,
      stat: "Global",
      title: "Holistic Profiles",
      description: "Universities seek students with comprehensive skill sets beyond traditional metrics"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-orange-600" />,
      stat: "Better",
      title: "Career Opportunities",
      description: "Strong communication skills unlock superior internships and job prospects"
    }
  ];

  return (
    <section className="relative py-16 bg-white">
      <div className="container mx-auto px-4">
        

        <div className="relative flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-white p-6 rounded-xl ring-1 ring-slate-200 transform transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
                {feature.icon}
              </div>
              <div className="text-center pt-8 mt-5">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.stat}</h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-3">{feature.title}</h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute -top-16 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-30 -z-10"></div>
      <div className="absolute -bottom-16 right-0 w-40 h-40 bg-green-100 rounded-full opacity-30 -z-10"></div>
    </section>
  );
};

export default SkillDevelopmentSection;