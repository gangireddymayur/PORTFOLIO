import { Brain, Cpu, Smartphone, GraduationCap } from 'lucide-react';

const About = () => {
  const highlights = [
  { icon: Brain, label: 'AI & ML Projects' },
  { icon: Cpu, label: 'Full-Stack Engineering' },
  { icon: Smartphone, label: 'Android Development' },
  { icon: GraduationCap, label: 'Continuous Learning' },
];


  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I develop AI and machine learning projects and build intelligent solutions to address real-world problems. Alongside this, I design and develop Android and full-stack web applications with clean architecture and scalable systems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My experience includes building AI-driven applications, Android-based mobile apps, and full-stack web platforms. I focus on writing reliable, maintainable code and continuously improving my skills by working on real projects and exploring modern technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Outside of development, I actively learn new tools in AI and software engineering, refine my problem-solving approach, and work on personal and academic projects to deepen my technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <p className="text-gray-800 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
