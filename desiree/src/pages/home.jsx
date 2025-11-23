import React from 'react';

function Home() {
    return (
        <div className="relative min-h-screen bg-[#080707] text-white font-['Poppins'] overflow-hidden selection:bg-[#db0a0a] selection:text-black">

            {/* --- CUSTOM STYLES & ANIMATIONS --- */}
            <style>
                {`
                /* Text Rotate Animation */
                @keyframes fadeSlideEnhanced {
                    0%, 100% { opacity: 0; transform: translateY(100%) scale(0.95) skewY(4deg); filter: blur(4px); }
                    8% { opacity: 1; transform: translateY(0) scale(1.05) skewY(0deg); filter: blur(0); }
                    30% { opacity: 1; transform: translateY(0) scale(1.05) skewY(0deg); filter: blur(0); }
                    38% { opacity: 0; transform: translateY(-100%) scale(0.95) skewY(-4deg); filter: blur(4px); }
                    90% { opacity: 0; transform: translateY(-100%) scale(0.95) skewY(-4deg); filter: blur(4px); }
                }
                
                /* Image Float Animation */
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }

                /* Tech Grid Background Pattern */
                .bg-grid {
                    background-size: 40px 40px;
                    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                }
                `}
            </style>

            {/* --- BACKGROUND ELEMENTS --- */}
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>

            {/* Ambient Red Glow (Bottom Left) */}
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#db0a0a] opacity-20 blur-[150px] rounded-full z-0"></div>

            <section className="relative z-10 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20 gap-12 lg:gap-20" id="home">

                {/* --- LEFT: TEXT CONTENT --- */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

                    <span className="text-[#db0a0a] font-bold tracking-widest uppercase text-sm lg:text-base mb-4 animate-pulse">
                        Welcome to my Portfolio
                    </span>

                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                        Hello, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#db0a0a] via-red-500 to-white drop-shadow-[0_0_20px_rgba(219,10,10,0.5)]">
                            Desiree.
                        </span>
                    </h1>

                    {/* Animated Role Container */}
                    <div className="flex items-center justify-center lg:justify-start gap-1 mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold">

                        <span className="text-gray-300">I am</span>

                        {/* Added pl-4 to prevent the first letter/glow from being cut off */}
                        <div className="relative h-[1.3em] w-[280px] sm:w-[350px] lg:w-[450px] overflow-hidden text-left pl-2">
                            <div className="absolute w-full h-full">
                                <span className="absolute left-4 top-0 text-[#db0a0a] drop-shadow-[0_0_10px_rgba(219,10,10,0.8)] animate-[fadeSlideEnhanced_9s_infinite] [animation-delay:0s]">
                                    a Web Developer
                                </span>
                                <span className="absolute left-4 top-0 text-[#db0a0a] drop-shadow-[0_0_10px_rgba(219,10,10,0.8)] animate-[fadeSlideEnhanced_9s_infinite] [animation-delay:3s]">
                                    a Student Leader
                                </span>
                                <span className="absolute left-4 top-0 text-[#db0a0a] drop-shadow-[0_0_10px_rgba(219,10,10,0.8)] animate-[fadeSlideEnhanced_9s_infinite] [animation-delay:6s]">
                                    an Active Volunteer
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-2xl mt-8 mb-10">
                        A driven leader with a curious mind for the ever-evolving world of technology and innovation.
                        I blend logical problem-solving with creative expression, exploring the intersection of
                        <span className="text-white font-semibold"> computing and the arts</span>.
                    </p>

                    {/* Buttons & Socials Area */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <a href="#readMore"
                            className="group relative px-8 py-4 bg-[#db0a0a] text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(219,10,10,0.6)]">
                            <span className="relative z-10">Read More</span>
                            {/* Button Shine Effect */}
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
                        </a>

                        {/* Social Icons Placeholder */}
                        <div className="flex gap-4">
                            {/* You can duplicate these for GitHub/LinkedIn */}
                            <button className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-[#db0a0a] hover:bg-[#db0a0a] hover:text-black hover:border-[#db0a0a] transition-all duration-300 hover:shadow-[0_0_20px_#db0a0a]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </button>
                            <button className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-[#db0a0a] hover:bg-[#db0a0a] hover:text-black hover:border-[#db0a0a] transition-all duration-300 hover:shadow-[0_0_20px_#db0a0a]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT: IMAGE --- */}
                <div className="flex-1 flex justify-center lg:justify-end relative">

                    {/* Glow behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-[#db0a0a] opacity-20 blur-[80px] rounded-full animate-pulse"></div>

                    {/* Image with Float Animation */}
                    <div className="relative z-10 animate-[float_6s_ease-in-out_infinite]">
                        <div className="relative w-[60vw] h-[60vw] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full p-2 border-2 border-[#db0a0a]/30">
                            <img
                                src="./src/assets/mbj.jpg"
                                alt="Desiree"
                                className="w-full h-full object-cover rounded-full shadow-[0_0_30px_rgba(219,10,10,0.3)] group-hover:shadow-[0_0_60px_#db0a0a] transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;