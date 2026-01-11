import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Samarth – Intelligent Agricultural & Climate Q&A System',
      description:
        'An end-to-end intelligent Question-Answering system that enables natural-language analytics over Indian Government rainfall and crop production datasets with full SQL-backed traceability.',
      tech: ['FastAPI', 'DuckDB', 'Python', 'SQL', 'NLP', 'Streamlit'],
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/gangireddymayur/Samarth-theChatBot',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Ship Detection from Aerial Images (YOLOv8)',
      description:
        'A deep learning–based ship detection system using YOLOv8 for identifying vessels from high-resolution aerial and satellite images, featuring confidence-aware inference and a live Streamlit dashboard.',
      tech: ['Python', 'YOLOv8', 'Computer Vision', 'Deep Learning', 'OpenCV', 'Streamlit'],
      image:
        'https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: 'https://shipdetectionyolov8.streamlit.app/',
      github: 'https://github.com/gangireddymayur/Ship_Detection_YOLOv8',
      color: 'from-indigo-500 to-blue-600',
    },
    {
  title: 'Multimodal Emotion Detection System (Face + Voice)',
  description:
    'A Streamlit-based AI system that detects human emotions from facial expressions and voice, then fuses both signals to produce a final multimodal emotion prediction. Supports real-time webcam mode and uploaded video analysis.',
  tech: [
    'Python',
    'Streamlit',
    'PyTorch',
    'EfficientNet-B4',
    'OpenCV',
    'Librosa',
    'MFCC',
    'Machine Learning',
    'Deep Learning',
  ],
  image:
    'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  github: 'https://github.com/gangireddymayur/Multimodal-Emotion-Detection-System--Face---Voice-/tree/main',
  demo: '', // optional – remove Live Demo button if not deployed
  color: 'from-violet-500 to-purple-600',
  },
    {
      title: 'Timeless Curation – Modern E-Commerce Platform',
      description:
        'A modern, elegant e-commerce and lifestyle web application built with React and Tailwind CSS, focusing on clean UI/UX, reusable components, and scalable frontend architecture.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      image:
        'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: 'https://timeless-curation-collection-main.vercel.app/',
      github: 'https://github.com/gangireddymayur/timeless-curation-collection-main',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Criminal Laws by TGPA – Android Application',
      description:
        'An official Android application developed for the Telangana State Police Academy to provide a comprehensive repository of Indian criminal laws, including old vs new law comparisons and legal references.',
      tech: ['Android', 'Java', 'XML', 'Mobile App Development'],
      image:
        'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: 'https://play.google.com/store/apps/details?id=com.sphn.tgpa&hl=en_IN',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Chit Fund Management System',
      description:
        'A secure, production-ready chit fund management system built for a real-world private client, enabling accurate management of chits, schemes, members, payments, and monthly balances.',
      tech: ['Python', 'Flask', 'Firebase', 'Server-Side Auth', 'Render'],
      image:
        'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-slate-600 to-gray-800',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of real-world, academic, and production projects showcasing my skills
            across backend systems, machine learning, frontend engineering, and mobile development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                ></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
