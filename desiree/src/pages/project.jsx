import { ArrowLeft, ChevronLeft, ChevronRight, Code, ExternalLink, GitBranch, Image as ImageIcon, Layers, Maximize2, Palette, PenTool, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('dev'); // 'dev', 'art', or 'graphics'
  
  // --- STATE FOR MODAL ---
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullView, setIsFullView] = useState(false); // Toggles between Card details & Full Image

  // --- PAGINATION STATE FOR DEV ---
  const [currentDevPage, setCurrentDevPage] = useState(1);
  const itemsPerPage = 3;

  // Effect: Lock body scroll when modal is open, unlock when closed
  useEffect(() => {
    if (selectedImage) {
      setIsFullView(false); // Always start in "Card/Details" mode
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);


  // ==========================================
  // 1. DEVELOPMENT DATA
  // ==========================================
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

  // Pagination Logic
  const indexOfLastItem = currentDevPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDevProjects = devProjects.slice(indexOfFirstItem, indexOfLastItem);
  const totalDevPages = Math.ceil(devProjects.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentDevPage(pageNumber);
  const nextPage = () => setCurrentDevPage((prev) => Math.min(prev + 1, totalDevPages));
  const prevPage = () => setCurrentDevPage((prev) => Math.max(prev - 1, 1));


  // ==========================================
  // 2. CREATIVE ARTS DATA
  // ==========================================
  
  // Uses the data defined at the bottom of this file
  const artProjects = artProjectsData;

  // --- RANDOMIZER LOGIC ---
  // This shuffles the array once when the component mounts
  const shuffledArt = useMemo(() => {
    return [...artProjects].sort(() => Math.random() - 0.5);
  }, [artProjects]); 


  // ==========================================
  // 3. GRAPHICS DATA
  // ==========================================
  const graphicProjects = [
    { title: "University Mascot Redesign", category: "Branding", tools: "IbisPaint", image: "https://placehold.co/400x400/1a1a1a/db0a0a?text=Mascot+Branding" },
    { title: "Tech Summit Poster", category: "Event Collateral", tools: "Adobe Illustrator", image: "https://placehold.co/400x600/1a1a1a/db0a0a?text=Event+Poster" },
    { title: "Student Council Social Media Kit", category: "Social Media", tools: "Canva / Figma", image: "https://placehold.co/600x400/1a1a1a/db0a0a?text=Social+Kit" },
    { title: "Annual Report Layout", category: "Editorial", tools: "InDesign", image: "https://placehold.co/400x500/1a1a1a/db0a0a?text=Report" },
    { title: "Coffee Shop Logo", category: "Logo Design", tools: "Illustrator", image: "https://placehold.co/500x500/1a1a1a/db0a0a?text=Logo" },
    { title: "Mobile App UI Kit", category: "UI Design", tools: "Figma", image: "https://placehold.co/300x600/1a1a1a/db0a0a?text=UI+Kit" },
    { title: "Music Festival Banner", category: "Advertising", tools: "Photoshop", image: "https://placehold.co/600x200/1a1a1a/db0a0a?text=Banner" }
  ];

  return (
    <section className="bg-[#080707] min-h-screen text-white py-20 px-2 lg:px-12 font-sans" id="projects">
      
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
            <h3 className="text-4xl lg:text-4xl font-bold text-white mb-4">Projects</h3>
            <div className="w- h-1 bg-[#db0a0a]"></div>
          </div>

          {/* TAB SWITCHER */}
          <div className="bg-[#1a1a1a] p-1.5 rounded-xl inline-flex flex-wrap gap-1 border border-white/5">
            {['dev', 'art', 'graphics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#db0a0a] text-white shadow-[0_0_15px_rgba(219,10,10,0.4)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab === 'dev' && <Code className="w-4 h-4" />}
                {tab === 'art' && <Palette className="w-4 h-4" />}
                {tab === 'graphics' && <PenTool className="w-4 h-4" />}
                <span className="capitalize">{tab === 'dev' ? 'Development' : tab === 'art' ? 'Creative Arts' : 'Graphics'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- DEVELOPMENT PROJECTS GRID (PAGINATED) --- */} 
        {activeTab === 'dev' && (
          <div>
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
                <button 
                  onClick={prevPage}
                  disabled={currentDevPage === 1}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg border border-white/5 transition-all
                    ${currentDevPage === 1 ? 'text-gray-600 cursor-not-allowed bg-[#1a1a1a]' : 'text-gray-300 bg-[#1a1a1a] hover:bg-white/5 hover:text-white'}`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                {[...Array(totalDevPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium border transition-all
                      ${currentDevPage === i + 1 ? 'bg-[#db0a0a] border-[#db0a0a] text-white' : 'bg-[#1a1a1a] border-white/5 text-gray-300 hover:bg-white/5 hover:text-white'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button 
                  onClick={nextPage}
                  disabled={currentDevPage === totalDevPages}
                  className={`flex items-center justify-center w-10 h-10 rounded-lg border border-white/5 transition-all
                    ${currentDevPage === totalDevPages ? 'text-gray-600 cursor-not-allowed bg-[#1a1a1a]' : 'text-gray-300 bg-[#1a1a1a] hover:bg-white/5 hover:text-white'}`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
            </div>
          </div>
        )}

        {/* --- CREATIVE ARTS (RANDOMIZED + CLICK TO OPEN) --- */}
        {activeTab === 'art' && (
          <div className="h-[800px] overflow-y-auto modern-scrollbar pr-2">
            <div className="columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
              {shuffledArt.map((art, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedImage(art)}
                  className="break-inside-avoid group relative overflow-hidden rounded-xl bg-[#0f0f0f] border border-white/5 mb-4 cursor-pointer"
                >
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

        {/* --- GRAPHICS PROJECTS --- */}
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

      {/* ==========================================
          UPDATED LIGHTBOX MODAL (Dual-View)
      ========================================== */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* MODAL CONTAINER */}
          <div 
            className={`
              bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative transition-all duration-500 ease-in-out
              ${isFullView ? 'w-full max-w-5xl h-[90vh] flex flex-col' : 'w-full max-w-md block'}
            `}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            
            {/* CLOSE BUTTON (Always Top Right) */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-20 p-1.5 bg-black/50 text-white rounded-full hover:bg-[#db0a0a] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* --- VIEW 1: FULL IMAGE MODE --- */}
            {isFullView ? (
               <div className="relative w-full h-full flex flex-col">
                  {/* Image Area */}
                  <div className="flex-1 bg-black flex items-center justify-center overflow-hidden p-2">
                    <img 
                      src={selectedImage.image} 
                      alt={selectedImage.title} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  
                  {/* Bottom Bar */}
                  <div className="p-4 bg-[#1a1a1a] border-t border-white/10 flex justify-between items-center">
                     <h3 className="text-white font-bold text-lg truncate mr-4">{selectedImage.title}</h3>
                     <button 
                        onClick={() => setIsFullView(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                     >
                        <ArrowLeft className="w-4 h-4" /> Back to Details
                     </button>
                  </div>
               </div>
            ) : (
              /* --- VIEW 2: CARD DETAILS MODE (Default) --- */
              <>
                {/* Image Header (Cropped) */}
                <div className="relative h-64 w-full overflow-hidden bg-black group">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                  />
                  {/* Hover Hint */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white w-8 h-8 drop-shadow-lg" />
                  </div>
                </div>

                {/* Text Details */}
                <div className="p-6">
                  <span className="text-[#db0a0a] text-xs font-bold uppercase tracking-wider mb-2 block">
                    {selectedImage.category}
                  </span>

                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white leading-tight">
                    {selectedImage.title}
                  </h5>

                  <p className="mb-6 text-gray-400 text-sm leading-relaxed">
                    {selectedImage.description}
                    <br/>
                    <span className="inline-block mt-3 text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                      Tool: {selectedImage.tools}
                    </span>
                  </p>

                  {/* Toggle Button */}
                  <button 
                    onClick={() => setIsFullView(true)}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-[#db0a0a] rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-900 transition-all shadow-lg hover:shadow-red-900/20"
                  >
                    View Image
                    <Maximize2 className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;


// ==========================================
// DATA: MANUALLY EDIT ART PROJECTS HERE
// ==========================================
const artProjectsData = [
    // --- ORIGINAL UNIQUE ITEMS (000 - 006) ---
    {
      id: "art-0",
      title: "Three Heroes Sketch",
      category: "Character Design",
      description: "A semi-realistic character exploration focusing on neon lighting and futuristic attire.",
      tools: "Procreate",
      image: "/arts/0000.jpg"
    },
    {
      id: "art-1",
      title: "Ethereal Landscapes",
      category: "Environment Art",
      description: "Digital painting series exploring atmospheric perspective and fantasy environments.",
      tools: "Adobe Photoshop",
      image: "/arts/001.jpg"
    },
    {
      id: "art-2",
      title: "Neon City",
      category: "Illustration",
      description: "Background art focusing on complex perspective and color theory.",
      tools: "Photoshop",
      image: "/arts/002.jpg"
    },
    {
      id: "art-3",
      title: "The Guardian",
      category: "Concept Art",
      description: "Fantasy creature design for a personal world-building project.",
      tools: "Krita",
      image: "/arts/003.jpg"
    },
    {
      id: "art-4",
      title: "Mecha Pilot",
      category: "Character Design",
      description: "Suit design and helmet HUD interface concepts.",
      tools: "Procreate",
      image: "/arts/004.jpg"
    },
    {
      id: "art-5",
      title: "Floating Islands",
      category: "Environment",
      description: "Whimsical sky islands concept art.",
      tools: "Photoshop",
      image: "/arts/005.jpg"
    },
    {
      id: "art-6",
      title: "Cyber Skull",
      category: "Illustration",
      description: "Anatomical study with cybernetic enhancements.",
      tools: "Krita",
      image: "/arts/006.jpg"
    },

    // --- MANUALLY EDIT THESE ITEMS (007 - 042) ---
    // I have created the structure for you. Fill in the details for each one.
    
    {
      id: "art-7",
      title: "Project Title 007",
      category: "Category Here",
      description: "Description for artwork 007...",
      tools: "Tool Used",
      image: "/arts/007.jpg"
    },
    {
      id: "art-8",
      title: "Project Title 008",
      category: "Category Here",
      description: "Description for artwork 008...",
      tools: "Tool Used",
      image: "/arts/008.jpg"
    },
    {
      id: "art-9",
      title: "Project Title 009",
      category: "Category Here",
      description: "Description for artwork 009...",
      tools: "Tool Used",
      image: "/arts/009.jpg"
    },
    {
      id: "art-10",
      title: "Project Title 010",
      category: "Category Here",
      description: "Description for artwork 010...",
      tools: "Tool Used",
      image: "/arts/0010.jpg"
    },
    {
      id: "art-11",
      title: "Project Title 011",
      category: "Category Here",
      description: "Description for artwork 011...",
      tools: "Tool Used",
      image: "/arts/0011.jpg"
    },
    {
      id: "art-12",
      title: "Project Title 012",
      category: "Category Here",
      description: "Description for artwork 012...",
      tools: "Tool Used",
      image: "/arts/0012.jpg"
    },
    {
      id: "art-13",
      title: "Project Title 013",
      category: "Category Here",
      description: "Description for artwork 013...",
      tools: "Tool Used",
      image: "/arts/0013.jpg"
    },
    {
      id: "art-14",
      title: "Project Title 014",
      category: "Category Here",
      description: "Description for artwork 014...",
      tools: "Tool Used",
      image: "/arts/0014.jpg"
    },
    {
      id: "art-15",
      title: "Project Title 015",
      category: "Category Here",
      description: "Description for artwork 015...",
      tools: "Tool Used",
      image: "/arts/0015.jpg"
    },
    {
      id: "art-16",
      title: "Project Title 016",
      category: "Category Here",
      description: "Description for artwork 016...",
      tools: "Tool Used",
      image: "/arts/0016.jpg"
    },
    {
      id: "art-17",
      title: "Project Title 017",
      category: "Category Here",
      description: "Description for artwork 017...",
      tools: "Tool Used",
      image: "/arts/0017.jpg"
    },
    {
      id: "art-18",
      title: "Project Title 018",
      category: "Category Here",
      description: "Description for artwork 018...",
      tools: "Tool Used",
      image: "/arts/0018.jpg"
    },
    {
      id: "art-19",
      title: "Project Title 019",
      category: "Category Here",
      description: "Description for artwork 019...",
      tools: "Tool Used",
      image: "/arts/0019.jpg"
    },
    {
      id: "art-20",
      title: "Project Title 020",
      category: "Category Here",
      description: "Description for artwork 020...",
      tools: "Tool Used",
      image: "/arts/0020.jpg"
    },
    {
      id: "art-21",
      title: "Project Title 021",
      category: "Category Here",
      description: "Description for artwork 021...",
      tools: "Tool Used",
      image: "/arts/0021.jpg"
    },
    {
      id: "art-22",
      title: "Project Title 022",
      category: "Category Here",
      description: "Description for artwork 022...",
      tools: "Tool Used",
      image: "/arts/0022.jpg"
    },
    {
      id: "art-23",
      title: "Project Title 023",
      category: "Category Here",
      description: "Description for artwork 023...",
      tools: "Tool Used",
      image: "/arts/0023.jpg"
    },
    {
      id: "art-24",
      title: "Project Title 024",
      category: "Category Here",
      description: "Description for artwork 024...",
      tools: "Tool Used",
      image: "/arts/0024.jpg"
    },
    {
      id: "art-25",
      title: "Project Title 025",
      category: "Category Here",
      description: "Description for artwork 025...",
      tools: "Tool Used",
      image: "/arts/0025.jpg"
    },
    {
      id: "art-26",
      title: "Project Title 026",
      category: "Category Here",
      description: "Description for artwork 026...",
      tools: "Tool Used",
      image: "/arts/0026.jpg"
    },
    {
      id: "art-27",
      title: "Project Title 027",
      category: "Category Here",
      description: "Description for artwork 027...",
      tools: "Tool Used",
      image: "/arts/0027.jpg"
    },
    {
      id: "art-28",
      title: "Project Title 028",
      category: "Category Here",
      description: "Description for artwork 028...",
      tools: "Tool Used",
      image: "/arts/0028.jpg"
    },
    {
      id: "art-29",
      title: "Project Title 029",
      category: "Category Here",
      description: "Description for artwork 029...",
      tools: "Tool Used",
      image: "/arts/0029.jpg"
    },
    {
      id: "art-30",
      title: "Project Title 030",
      category: "Category Here",
      description: "Description for artwork 030...",
      tools: "Tool Used",
      image: "/arts/0030.jpg"
    },
    {
      id: "art-31",
      title: "Project Title 031",
      category: "Category Here",
      description: "Description for artwork 031...",
      tools: "Tool Used",
      image: "/arts/0031.jpg"
    },
    {
      id: "art-32",
      title: "Project Title 032",
      category: "Category Here",
      description: "Description for artwork 032...",
      tools: "Tool Used",
      image: "/arts/0032.jpg"
    },
    {
      id: "art-33",
      title: "Project Title 033",
      category: "Category Here",
      description: "Description for artwork 033...",
      tools: "Tool Used",
      image: "/arts/0033.jpg"
    },
    {
      id: "art-34",
      title: "Project Title 034",
      category: "Category Here",
      description: "Description for artwork 034...",
      tools: "Tool Used",
      image: "/arts/0034.jpg"
    },
    {
      id: "art-35",
      title: "Project Title 035",
      category: "Category Here",
      description: "Description for artwork 035...",
      tools: "Tool Used",
      image: "/arts/0035.jpg"
    },
    {
      id: "art-36",
      title: "Project Title 036",
      category: "Category Here",
      description: "Description for artwork 036...",
      tools: "Tool Used",
      image: "/arts/0036.jpg"
    },
    {
      id: "art-37",
      title: "Project Title 037",
      category: "Category Here",
      description: "Description for artwork 037...",
      tools: "Tool Used",
      image: "/arts/0037.jpg"
    },
    {
      id: "art-38",
      title: "Project Title 038",
      category: "Category Here",
      description: "Description for artwork 038...",
      tools: "Tool Used",
      image: "/arts/0038.jpg"
    },
    {
      id: "art-39",
      title: "Project Title 039",
      category: "Category Here",
      description: "Description for artwork 039...",
      tools: "Tool Used",
      image: "/arts/0039.jpg"
    },
    {
      id: "art-40",
      title: "Project Title 040",
      category: "Category Here",
      description: "Description for artwork 040...",
      tools: "Tool Used",
      image: "/arts/0040.jpg"
    },
    {
      id: "art-41",
      title: "Project Title 041",
      category: "Category Here",
      description: "Description for artwork 041...",
      tools: "Tool Used",
      image: "/arts/0041.jpg"
    },
    {
      id: "art-42",
      title: "Project Title 042",
      category: "Category Here",
      description: "Description for artwork 042...",
      tools: "Tool Used",
      image: "/arts/0042.jpg"
    }
];