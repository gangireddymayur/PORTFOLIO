import {
  Layout,
  Code2,
  Database,
  Monitor,
  Smartphone,
  GitBranch,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Layout,
      skills: [
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'JavaScript', level: 75 },
        { name: 'React', level: 70 },
        { name: 'Responsive Design', level: 85 },
        { name: 'steemit', level: 90}
      ],
    },
    {
      category: 'Backend Development',
      icon: Code2,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'REST APIs', level: 75 },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'Supabase', level: 80 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      category: 'IDEs & Development Tools',
      icon: Monitor,
      skills: [
        { name: 'Visual Studio Code', level: 90 },
        { name: 'Jupyter Notebook', level: 85 },
        { name: 'PyCharm', level: 80 },
        { name: 'Android Studio', level: 85 },
      ],
    },
  ];

  const techIcons = [
    { icon: Layout, name: 'Frontend' },
    { icon: Code2, name: 'Backend' },
    { icon: Database, name: 'Databases' },
    { icon: Smartphone, name: 'Android' },
    { icon: GitBranch, name: 'Git & Version Control' },
    { icon: Monitor, name: 'Tools' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build real-world, production-ready applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {techIcons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-xl transform group-hover:-translate-y-2 transition-all duration-200">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <span className="mt-2 text-sm text-gray-600 font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
