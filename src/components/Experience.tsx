import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'achievement',
      title: 'Smart India Hackathon 2022 – Finalist',
      organization: 'Ministry of Education, Government of India',
      period: 'August 2022',
      description:
        'Selected for the Grand Finale of Smart India Hackathon 2022 (Senior Software Edition) after developing a Python-based application as part of a national-level team competition.',
      achievements: [
        'Developed a Python application addressing a real-world problem statement',
        'Shortlisted among top teams nationwide',
        'Participated in the Grand Finale held on August 25–26, 2022',
        'Gained exposure to large-scale problem solving and team collaboration',
      ],
    },
    {
      type: 'work',
      title: 'Android App Development Intern',
      organization: 'Acmegrade',
      period: 'Nov 2023 – Jan 2024',
      description:
        'Completed an internship focused on Android application development, gaining hands-on experience in building, structuring, and deploying mobile applications.',
      achievements: [
        'Developed Android application modules using Java and XML',
        'Worked on UI layouts, navigation, and activity lifecycle',
        'Strengthened fundamentals of mobile app development',
      ],
    },
    {
      type: 'work',
      title: 'Android Application Developer',
      organization: 'Telangana State Police Academy (TGPA), Hyderabad',
      period: 'Mar 2024 – Aug 2024',
      description:
        'Contributed to the development of an official Android application for TGPA that provides a comprehensive repository of Indian criminal laws, published on the Google Play Store.',
      achievements: [
        'Implemented structured content for old and new criminal laws',
        'Added law comparison features and legal reference sections',
        'Collaborated with faculty and TGPA officials',
        'Successfully deployed and maintained the Play Store application',
      ],
    },
    {
      type: 'work',
      title: 'Web Development Intern (MERN Stack)',
      organization: 'EY Global Delivery Services × AICTE (Edunet Foundation)',
      period: 'Mar 2025 – Apr 2025',
      description:
        'Successfully completed a 6-week industry-focused internship on building modern web applications using the MERN stack.',
      achievements: [
        'Built full-stack features using MongoDB, Express, React, and Node.js',
        'Designed and integrated RESTful APIs',
        'Developed responsive UI components following modern practices',
        'Collaborated using Git and version control workflows',
      ],
    },
    {
  type: 'work',
  title: 'Full Stack Developer – Private Client Project',
  organization: 'Chit Fund Management System (Production)',
  period: '2024 – Present',
  description:
    'Designed and developed a secure, production-ready chit fund management system for a private client, handling both frontend and backend with accurate financial logic and secure deployment.',
  achievements: [
    'Built backend using Flask and Firebase Realtime Database',
    'Developed frontend using HTML',
    'Implemented accurate monthly payment and balance calculations',
    'Ensured secure server-side authentication and data access',
    'Deployed and maintained a live production system on Render',
  ],
}
,
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey, professional experience, and key achievements
            across national competitions, internships, and real-world projects.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center z-10">
                  {exp.type === 'education' ? (
                    <GraduationCap className="w-6 h-6 text-white" />
                  ) : exp.type === 'achievement' ? (
                    <Award className="w-6 h-6 text-white" />
                  ) : (
                    <Briefcase className="w-6 h-6 text-white" />
                  )}
                </div>

                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {exp.organization}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-700 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
