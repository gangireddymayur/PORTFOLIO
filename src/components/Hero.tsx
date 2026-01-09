import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-down">
              Mayur Gangireddy
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 animate-slide-up">
              Full-Stack Developer | Android & Web Engineer | AI & Machine Learning Developer
            </p>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              I create AI and machine learning–driven solutions to address real-world challenges, while also building robust full-stack web systems and mobile applications ready for production use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-blue-200 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/image.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ArrowDown size={32} className="text-white" />
      </button>
    </section>
  );
};

export default Hero;
