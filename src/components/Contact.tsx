import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin, Sparkles, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mayur_Gangireddy_Resume.pdf';
    link.download = 'Mayur_Gangireddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#09090B] border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-indigo-600/15 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Board */}
        <div className="rounded-3xl bg-[#111113] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Text Info */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>GET IN TOUCH</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Let's Build Something Extraordinary
                </h2>
                
                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
                  Whether you are hiring for a Full-Time Software Engineer or AI/ML Engineer role, looking to collaborate on a production project, or discussing backend architecture—my inbox is always open.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                <a
                  href="mailto:mayurgangereddy12345@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-indigo-500/40 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-500 uppercase">Email Me Directly</p>
                    <p className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      mayurgangereddy12345@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-500 uppercase">Phone / WhatsApp</p>
                    <p className="text-sm font-bold text-white">
                      +91 6281192139
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-500 uppercase">Location & Work Status</p>
                    <p className="text-sm font-bold text-white">
                      Hyderabad, Telangana, India • <span className="text-emerald-400 font-normal">Remote / Hybrid / On-Site</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={handleDownloadResume}
                  className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 shadow-xl shadow-indigo-600/30 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </button>

                <a
                  href="https://github.com/gangireddymayur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-xl border border-white/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="http://www.linkedin.com/in/mayur-gangireddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-xl border border-white/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

            </div>

            {/* Right Side: Message Form */}
            <div className="lg:col-span-6 bg-zinc-900/90 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
              
              <h3 className="text-xl font-bold text-white mb-6">
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-zinc-400">
                    Thank you for reaching out. I will get back to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins (Recruiter / Hiring Manager)"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 text-xs font-medium transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 text-xs font-medium transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Message / Project Scope
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Mayur, we are interested in your profile for a Senior Software Engineer / AI Engineer role..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 text-xs font-medium transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-xl shadow-indigo-600/30 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
