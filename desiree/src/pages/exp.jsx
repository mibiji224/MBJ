import React from 'react';
import { Briefcase, GraduationCap, Code, Award } from 'lucide-react';

const About = () => {
  // DATA: Your specific details
  const experienceData = [
    {
      title: "Administrative Secretary",
      company: "Department of Education Region XI - Office of the Assistant Regional Director",
      date: "July 2025",
      type: "LATEST",
      description: "Handling administrative tasks, document processing, and scheduling for the Assistant Regional Director office."
    },
    {
      title: "Customer Service Representative",
      company: "Awesome CX & Alorica Davao",
      date: "April 2025 - October 2025",
      type: null,
      description: "Handled Inbound Voice Accounts. Resolved customer inquiries efficiently while maintaining high quality assurance scores."
    },
    {
      title: "President",
      company: "College of Computing Education Student Government - University of Mindanao",
      date: "July 2024",
      type: "LEADERSHIP",
      description: "Led the student body of the College of Computing Education. Organized events, facilitated student welfare programs, and bridged communication between students and faculty."
    },
    {
      title: "External Vice President",
      company: "Council of College Student Governments - University of Mindanao",
      date: "July 2024",
      type: "LEADERSHIP",
      description: "Led external affairs for the University of Mindanao’s central student government, representing the entire student body. I negotiated strategic partnerships and executed university-wide welfare programs to bridge student advocacy with administrative policy."
    },
    {
      title: "Digital Artist",
      company: "Freelance",
      date: "March 2020",
      type: null,
      description: "Conceptualizing and executing custom digital artwork for global clients using industry-standard tools (e.g., Adobe Photoshop, Procreate, IbisPaint). Specializing in Character Design, Semi-Realism, Anime /2D Style, etc., I translate client ideas into compelling visual narratives with a focus on composition, color theory, and detail."
    }
  ];

  const educationData = [
    {
      school: "University of Mindanao",
      degree: "Bachelor of Science in Computer Science",
      year: "2023 - Present",
      status: "Currently Enrolled"
    },
    {
      school: "Davao City National High School",
      degree: "Science, Technology, Engineering, and Mathematics (STEM) Strand",
      year: "2018 - 2022",
      status: "With High Honors"
    }
  ];

  // NEW SKILLS DATA
  const coreSkills = [
    "Leadership & Team Management",
    "Project Management & Execution",
    "Organizational Skills & Time Management",
    "Communication & Technical Writing",
    "Creative Design & Visual Communication",
    "Web Development & Programming",
    "Marketing & Branding Strategies",
    "Data Analysis & Problem Solving",
    "Documentation & Event Photography",
    "Administrative & Office Support"
  ];

  const technicalSkills = [
    { category: "Frontend", items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "React"] },
    { category: "Backend", items: ["JavaScript", "Python", "PHP", "Java"] },
    { category: "Database", items: ["MySQL", "MongoDB"] },
    { category: "Tech Tools", items: ["Git", "GitHub", "VSCode", "Eclipse", "NetBeans"] },
    { category: "Creative Tools", items: ["Figma", "Adobe Photoshop", "Canva", "Blender", "Photopea", "GIMP", "Krita"] }
  ];

return (
    <section className="bg-[#080707] text-white py-20 px-6 lg:px-12 font-sans relative overflow-hidden" id="about">
        
        {/* CSS for custom scrollbar */}
        <style>{`
            .modern-scrollbar::-webkit-scrollbar { width: 4px; }
            .modern-scrollbar::-webkit-scrollbar-track { background: #1a1a1a; border-radius: 4px; }
            .modern-scrollbar::-webkit-scrollbar-thumb { background: #db0a0a; border-radius: 4px; }
            .modern-scrollbar::-webkit-scrollbar-thumb:hover { background: #ff1f1f; }
        `}</style>

        <div className="max-w-7xl mx-auto">
            
            {/* Section Title */}
            <div className="mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
                <div className="w-24 h-1 bg-[#db0a0a]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* LEFT COLUMN: EXPERIENCE (Takes up 7 columns) */}
                <div className="lg:col-span-7 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-[#db0a0a]/10 rounded-lg">
                            <Briefcase className="w-6 h-6 text-[#db0a0a]" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-100">Experience</h3>
                    </div>

                    {/* Scrollable Container */}
                    <div className="relative h-[730px] overflow-y-auto pr-6 modern-scrollbar bg-[#0f0f0f]/50 rounded-2xl p-6 border border-white/5">
                        <ol className="relative border-l border-neutral-800 ml-3 space-y-12">
                            {experienceData.map((item, index) => (
                                <li key={index} className="relative ml-8 group">
                                    {/* Dot Indicator */}
                                    <span className="absolute -left-[43px] top-1 flex items-center justify-center w-6 h-6 bg-[#080707] rounded-full border border-neutral-700 group-hover:border-[#db0a0a] group-hover:shadow-[0_0_10px_#db0a0a] transition-all duration-300">
                                        <div className="w-2 h-2 bg-neutral-600 rounded-full group-hover:bg-[#db0a0a] transition-colors"></div>
                                    </span>

                                    {/* Content Card */}
                                    <div className="relative">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <span className="text-xs font-mono font-medium text-[#db0a0a] border border-[#db0a0a]/30 px-2 py-1 rounded bg-[#db0a0a]/5">
                                                {item.date}
                                            </span>
                                            {item.type && (
                                                <span className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                                    {item.type}
                                                </span>
                                            )}
                                        </div>

                                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#db0a0a] transition-colors">
                                            {item.title}
                                        </h4>
                                        
                                        <h5 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                                            {item.company}
                                        </h5>

                                        <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                {/* RIGHT COLUMN: EDUCATION & SKILLS (Takes up 5 columns) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    
                    {/* Education Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-[#db0a0a]/10 rounded-lg">
                                <GraduationCap className="w-5 h-5 text-[#db0a0a]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-100">Education</h3>
                        </div>

                        <div className="space-y-2">
                            {educationData.map((edu, index) => (
                                <div key={index} className="group bg-[#0f0f0f] p-3 rounded-xl border border-white/5 hover:border-[#db0a0a]/50 transition-all hover:-translate-y-1 duration-300">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="text-sm font-bold text-white group-hover:text-[#db0a0a] transition-colors truncate pr-2">
                                            {edu.school}
                                        </h4>
                                        <span className="text-[10px] font-mono text-[#db0a0a] bg-[#db0a0a]/10 px-1.5 py-0.5 rounded border border-[#db0a0a]/20 whitespace-nowrap">
                                            {edu.year}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-400 text-[11px] truncate">{edu.degree}</p>
                                        <div className="flex items-center gap-1.5 shrink-0">
                                            <Award className="w-3 h-3 text-[#db0a0a]" />
                                            <span className="text-[10px] text-gray-300 font-medium">{edu.status}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* NEW SKILLS SECTION - Compacted with Grid */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-[#db0a0a]/10 rounded-lg">
                                <Code className="w-5 h-5 text-[#db0a0a]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-100">Skills</h3>
                        </div>

                        {/* Core Skills Group */}
                        <div className="mb-5">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-l-2 border-[#db0a0a] pl-3">
                                Core Competencies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {coreSkills.map((skill, index) => (
                                    <span 
                                        key={index} 
                                        className="px-2.5 py-1 bg-[#1a1a1a] text-gray-300 text-[10px] font-medium rounded-md border border-white/5 transition-all duration-200 cursor-default hover:border-[#db0a0a] hover:text-[#db0a0a] hover:bg-[#db0a0a]/8 hover:shadow-[0_0_8px_#db0a0a]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Technical Skills Group - Grid Layout */}
                        <div>
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-l-2 border-[#db0a0a] pl-3">
                                Technical Proficiency
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {technicalSkills.map((group, index) => (
                                    <div key={index} className={`bg-[#0f0f0f] p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors ${index === technicalSkills.length - 1 ? 'col-span-2' : ''}`}>
                                        <h5 className="text-[#db0a0a] text-[10px] font-bold uppercase mb-2 tracking-wider">
                                            {group.category}
                                        </h5>
                                        <div className="flex flex-wrap gap-1.5">
                                            {group.items.map((skill, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="text-[10px] text-gray-300 bg-black/50 px-1.5 py-0.5 rounded border border-white/5 transition-all duration-200 hover:text-[#db0a0a] hover:border-[#db0a0a] hover:bg-[#db0a0a]/8 hover:shadow-[0_0_8px_#db0a0a]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
);
};

export default About;