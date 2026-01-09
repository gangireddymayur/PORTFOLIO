import { Download, User, Award, FolderOpen, Eye } from 'lucide-react';

const Resume = () => {
  const resumeFeatures = [
    {
      icon: User,
      label: 'Complete Background',
      description: 'Full professional history and experience',
    },
    {
      icon: Award,
      label: 'Achievements',
      description: 'Certifications and accomplishments',
    },
    {
      icon: FolderOpen,
      label: 'Project Details',
      description: 'Comprehensive project descriptions',
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mayur_Gangireddy_Resume.pdf';
    link.download = 'Mayur_Gangireddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    window.open('/Mayur_Gangireddy_Resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT */}
            <div>
              <div className="w-24 h-24 bg-gray-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <FolderOpen className="w-12 h-12 text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Professional Profile
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Download or view my comprehensive resume to explore my background,
                education, detailed project work, and achievements.
              </p>
            </div>
            {/* RIGHT – FEATURES */}
            <div className="space-y-6">
              {resumeFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
                >
                  <feature.icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{feature.label}</p>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BUTTONS AT BOTTOM */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleViewResume}
              className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-3 text-lg"
            >
              <Eye size={22} />
              View Resume
            </button>

            <button
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition flex items-center gap-3 text-lg shadow-lg"
            >
              <Download size={22} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
