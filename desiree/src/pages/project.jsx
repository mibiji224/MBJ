import { useState } from 'react';
import { Code, Palette, ExternalLink, GitBranch, Layers, Image as ImageIcon, PenTool, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('dev'); // 'dev', 'art', or 'graphics'
  
  // --- PAGINATION STATE ---
  const [currentDevPage, setCurrentDevPage] = useState(1);
  const itemsPerPage = 3;

  // --- DATA SECTIONS ---

  // 1. DEVELOPMENT PROJECTS (Added more items to demonstrate pagination)
  const devProjects = [
    {
      id: 1,
      title: "Student Portal Dashboard",
      description: "A comprehensive dashboard for tracking student grades and schedules. Built with a focus on data visualization and user experience.",
      tags: ["React", "Tailwind CSS", "Chart.js"],
      links: { demo: "#", github: "#" },
      image: "https://placehold.co/600x400/1a1a1a/db0a0a?text=Student+Dashboard"
    },
    {
      id: 2,
      title: "Event Registration System",
      description: "Automated registration flow for campus events with QR code generation and email notifications.",
      tags: ["Python", "Django", "PostgreSQL"],
      links: { demo: "#", github: "#" },
      image: "https://placehold.co/600x400/1a1a1a/db0a0a?text=Event+System"
    },
    {
      id: 3,
      title: "Personal Portfolio V1",
      description: "The first iteration of my personal website showcasing my journey as a developer and student leader.",
      tags: ["HTML", "CSS", "JavaScript"],
      links: { demo: "#", github: "#" },
      image: "https://placehold.co/600x400/1a1a1a/db0a0a?text=Portfolio+V1"
    },
    {
      id: 4,
      title: "E-Commerce API",
      description: "A robust backend API handling payments, inventory management, and user authentication.",
      tags: ["Node.js", "Express", "MongoDB"],
      links: { demo: "#", github: "#" },
      image: "https://placehold.co/600x400/1a1a1a/db0a0a?text=E-Commerce+API"
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time messaging platform supporting private chats and group rooms using WebSockets.",
      tags: ["React", "Socket.io", "Redis"],
      links: { demo: "#", github: "#" },
      image: "https://placehold.co/600x400/1a1a1a/db0a0a?text=Chat+App"
    },
    {
      id: 6,
      title: "Task Manager CLI",
      description: "A command-line interface tool for managing developer tasks and git workflows efficiently.",
      tags: ["Rust", "CLI", "Shell"],
      links: { demo: "#", github: "#" },
      image: "https://placehold.co/600x400/1a1a1a/db0a0a?text=CLI+Tool"
    }
  ];

  // Logic to slice the array for pagination
  const indexOfLastItem = currentDevPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDevProjects = devProjects.slice(indexOfFirstItem, indexOfLastItem);
  const totalDevPages = Math.ceil(devProjects.length / itemsPerPage);

  // Pagination Handlers
  const paginate = (pageNumber) => setCurrentDevPage(pageNumber);
  const nextPage = () => setCurrentDevPage((prev) => Math.min(prev + 1, totalDevPages));
  const prevPage = () => setCurrentDevPage((prev) => Math.max(prev - 1, 1));

  // 2. CREATIVE ARTS PROJECTS
  const artProjects = [
    {
      title: "Cyberpunk Character Study",
      category: "Character Design",
      description: "A semi-realistic character exploration focusing on neon lighting and futuristic attire.",
      tools: "Procreate",
      image: "https://placehold.co/400x600/1a1a1a/db0a0a?text=Character+Art"
    },
    {
      title: "Ethereal Landscapes",
      category: "Environment Art",
      description: "Digital painting series exploring atmospheric perspective and fantasy environments.",
      tools: "Adobe Photoshop",
      image: "https://placehold.co/600x400/1a1a1a/db0a0a?text=Landscape"
    },
    {
      title: "Neon City",
      category: "Illustration",
      description: "Background art focusing on complex perspective and color theory.",
      tools: "Photoshop",
      image: "https://placehold.co/600x300/1a1a1a/db0a0a?text=Neon+City"
    },
    {
      title: "The Guardian",
      category: "Concept Art",
      description: "Fantasy creature design for a personal world-building project.",
      tools: "Krita",
      image: "https://placehold.co/400x550/1a1a1a/db0a0a?text=Creature+Design"
    },
    {
      title: "Mecha Pilot",
      category: "Character Design",
      description: "Suit design and helmet HUD interface concepts.",
      tools: "Procreate",
      image: "https://placehold.co/400x600/1a1a1a/db0a0a?text=Mecha"
    },
    {
      title: "Floating Islands",
      category: "Environment",
      description: "Whimsical sky islands concept art.",
      tools: "Photoshop",
      image: "https://placehold.co/500x500/1a1a1a/db0a0a?text=Islands"
    },
    {
      title: "Cyber Skull",
      category: "Illustration",
      description: "Anatomical study with cybernetic enhancements.",
      tools: "Krita",
      image: "https://placehold.co/400x400/1a1a1a/db0a0a?text=Skull"
    },
    {
      title: "Retro Racer",
      category: "Vehicle Design",
      description: "80s inspired futuristic vehicle design.",
      tools: "Blender / PS",
      image: "https://placehold.co/600x400/1a1a1a/db0a0a?text=Racer"
    }
  ];

  // 3. GRAPHICS PROJECTS
  const graphicProjects = [
    {
      title: "University Mascot Redesign",
      category: "Branding",
      description: "Concept art for the modern reinterpretation of the college department mascot.",
      tools: "IbisPaint",
      image: "https://placehold.co/400x400/1a1a1a/db0a0a?text=Mascot+Branding"
    },
    {
      title: "Tech Summit Poster",
      category: "Event Collateral",
      description: "Promotional material design for the annual campus technology summit.",
      tools: "Adobe Illustrator",
      image: "https://placehold.co/400x600/1a1a1a/db0a0a?text=Event+Poster"
    },
    {
      title: "Student Council Social Media Kit",
      category: "Social Media",
      description: "A cohesive set of templates for Instagram and Facebook announcements.",
      tools: "Canva / Figma",
      image: "https://placehold.co/600x400/1a1a1a/db0a0a?text=Social+Kit"
    },
    {
      title: "Annual Report Layout",
      category: "Editorial",
      description: "Clean typography and layout for the year-end financial report.",
      tools: "InDesign",
      image: "https://placehold.co/400x500/1a1a1a/db0a0a?text=Report"
    },
    {
      title: "Coffee Shop Logo",
      category: "Logo Design",
      description: "Minimalist logo branding for a local startup cafe.",
      tools: "Illustrator",
      image: "https://placehold.co/500x500/1a1a1a/db0a0a?text=Logo"
    },
    {
      title: "Mobile App UI Kit",
      category: "UI Design",
      description: "Component library for a fitness application.",
      tools: "Figma",
      image: "https://placehold.co/300x600/1a1a1a/db0a0a?text=UI+Kit"
    },
    {
      title: "Music Festival Banner",
      category: "Advertising",
      description: "Large format print design for outdoor display.",
      tools: "Photoshop",
      image: "https://placehold.co/600x200/1a1a1a/db0a0a?text=Banner"
    }
  ];

  return (
    <section className="bg-[#080707] min-h-screen text-white py-20 px-6 lg:px-12 font-sans" id="projects">
      
      {/* CSS for custom scrollbar */}
      <style>{`
        .modern-scrollbar::-webkit-scrollbar { width: 6px; }
        .modern-scrollbar::-webkit-scrollbar-track { background: #1a1a1a; border-radius: 4px; }
        .modern-scrollbar::-webkit-scrollbar-thumb { background: #db0a0a; border-radius: 4px; }
        .modern-scrollbar::-webkit-scrollbar-thumb:hover { background: #ff1f1f; }
      `}</style>

      <div className="max-w-[1600px] mx-auto">
        
        {/* HEADER & TABS CONTAINER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          
          {/* Section Title */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Projects</h2>
            <div className="w-24 h-1 bg-[#db0a0a]"></div>
          </div>

          {/* TAB SWITCHER */}
          <div className="bg-[#1a1a1a] p-1.5 rounded-xl inline-flex flex-wrap gap-1 border border-white/5">
            <button
              onClick={() => setActiveTab('dev')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeTab === 'dev'
                  ? 'bg-[#db0a0a] text-white shadow-[0_0_15px_rgba(219,10,10,0.4)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Development</span>
            </button>
            <button
              onClick={() => setActiveTab('art')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeTab === 'art'
                  ? 'bg-[#db0a0a] text-white shadow-[0_0_15px_rgba(219,10,10,0.4)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Creative Arts</span>
            </button>
            <button
              onClick={() => setActiveTab('graphics')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                activeTab === 'graphics'
                  ? 'bg-[#db0a0a] text-white shadow-[0_0_15px_rgba(219,10,10,0.4)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <PenTool className="w-4 h-4" />
              <span>Graphics</span>
            </button>
          </div>
        </div>

        {/* --- DEVELOPMENT PROJECTS GRID (PAGINATED) --- */} 
        {activeTab === 'dev' && (
          <div>
            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 animate-in fade-in slide-in-from-right-8 duration-500 key={currentDevPage}">
              {currentDevProjects.map((project, index) => (
                <div key={index} className="group bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden hover:border-[#db0a0a]/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent z-10 opacity-60"></div>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                    <div className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10">
                      <Layers className="w-4 h-4 text-[#db0a0a]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#db0a0a] transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs font-mono text-[#db0a0a] bg-[#db0a0a]/10 px-2 py-1 rounded border border-[#db0a0a]/20">{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4 border-t border-white/5">
                      <a href={project.links.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"><GitBranch className="w-4 h-4" /> Code</a>
                      <a href={project.links.demo} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"><ExternalLink className="w-4 h-4" /> Live Demo</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-8">
                {/* Prev Button */}
                <button 
                  onClick={prevPage}
                  disabled={currentDevPage === 1}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg border border-white/5 transition-all
                    ${currentDevPage === 1 
                      ? 'text-gray-600 cursor-not-allowed bg-[#1a1a1a]' 
                      : 'text-gray-300 bg-[#1a1a1a] hover:bg-white/5 hover:text-white'}`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Number Buttons */}
                {[...Array(totalDevPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium border transition-all
                      ${currentDevPage === i + 1
                        ? 'bg-[#db0a0a] border-[#db0a0a] text-white'
                        : 'bg-[#1a1a1a] border-white/5 text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                {/* Next Button */}
                <button 
                  onClick={nextPage}
                  disabled={currentDevPage === totalDevPages}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg border border-white/5 transition-all
                    ${currentDevPage === totalDevPages 
                      ? 'text-gray-600 cursor-not-allowed bg-[#1a1a1a]' 
                      : 'text-gray-300 bg-[#1a1a1a] hover:bg-white/5 hover:text-white'}`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
            </div>
          </div>
        )}

        {/* --- CREATIVE ARTS (MASONRY - Fixed Height + Scrollable) --- */}
        {activeTab === 'art' && (
          <div className="h-[800px] overflow-y-auto modern-scrollbar pr-2">
            <div className="columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
              {artProjects.map((art, index) => (
                <div key={index} className="break-inside-avoid group relative overflow-hidden rounded-xl bg-[#0f0f0f] border border-white/5 mb-4">
                  <img src={art.image} alt={art.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[#db0a0a] text-[10px] font-bold uppercase tracking-wider mb-1">{art.category}</span>
                    <h3 className="text-sm font-bold text-white mb-1 leading-tight">{art.title}</h3>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono border-t border-white/10 pt-2 mt-1">
                      <ImageIcon className="w-3 h-3" /> {art.tools}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- GRAPHICS (MASONRY - Fixed Height + Scrollable) --- */}
        {activeTab === 'graphics' && (
          <div className="h-[800px] overflow-y-auto modern-scrollbar pr-2">
            <div className="columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
              {graphicProjects.map((graphic, index) => (
                <div key={index} className="break-inside-avoid group relative overflow-hidden rounded-xl bg-[#0f0f0f] border border-white/5 mb-4">
                  <img src={graphic.image} alt={graphic.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[#db0a0a] text-[10px] font-bold uppercase tracking-wider mb-1">{graphic.category}</span>
                    <h3 className="text-sm font-bold text-white mb-1 leading-tight">{graphic.title}</h3>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono border-t border-white/10 pt-2 mt-1">
                      <PenTool className="w-3 h-3" /> {graphic.tools}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;