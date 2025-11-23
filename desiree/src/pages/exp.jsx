import React from 'react';

function Exp() {
    return (
        <section className="bg-black min-h-screen p-10 font-sans" id="readMore">
            {/* Main Container */}
            <div className="max-w-4xl mx-auto">

                <ol className="relative border-l-2 border-neutral-800 space-y-8 my-10">

                    {/* ITEM 1 */}
                    <li className="relative ml-10">
                        {/* Timeline Dot */}
                        <span className="absolute flex items-center justify-center w-10 h-10 -left-[2.8rem] bg-black rounded-full border-2 border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                            <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                        </span>

                        {/* Date */}
                        <time className="block mb-2 text-sm font-mono font-medium leading-none text-red-500 uppercase tracking-wider">
                            July 1st, 2025
                        </time>

                        {/* Heading */}
                        <h3 className="flex items-center mb-3 text-2xl font-bold text-white">
                            Administrative Secretary
                            <span className="ml-3 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full tracking-wide shadow-lg shadow-red-900/50">
                                LATEST
                            </span>
                        </h3>

                        {/* Description */}
                        <p className="mb-4 text-sm font-normal text-neutral-400 max-w-[90%] leading-relaxed">
                            Department of Education Region XI - Office of the Assistant Regional Director
                        </p>
                    </li>

                    {/* ITEM 2 */}
                    <li className="relative ml-10">
                        <span className="absolute flex items-center justify-center w-10 h-10 -left-[2.8rem] bg-black rounded-full border-2 border-neutral-700 hover:border-red-500 transition-colors duration-300">
                            <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                        </span>

                        <time className="block mb-2 text-sm font-mono font-medium leading-none text-neutral-500 uppercase tracking-wider">
                            April 7th, 2025
                        </time>

                        <h3 className="text-2xl font-bold text-white mb-3">
                            Customer Service Representative
                        </h3>

                        <p className="text-sm font-normal text-neutral-400 max-w-[90%] leading-relaxed">
                            Inbound Voice Account - Alorica Davao Philippines (April) <br />
                            Inbound Voice Account - Awesome CX (August)
                        </p>
                    </li>

                    {/* ITEM 3 */}
                    <li className="relative ml-10">
                        <span className="absolute flex items-center justify-center w-10 h-10 -left-[2.8rem] bg-black rounded-full border-2 border-neutral-700 hover:border-red-500 transition-colors duration-300">
                            <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                        </span>

                        <time className="block mb-2 text-sm font-mono font-medium leading-none text-neutral-500 uppercase tracking-wider">
                            July 28th, 2024
                        </time>

                        <h3 className="text-2xl font-bold text-white mb-3">
                            President
                        </h3>

                        <p className="text-sm font-normal text-neutral-400 max-w-[90%] leading-relaxed">
                            College of Computing Education Student Government
                            <br />University of Mindanao
                        </p>
                    </li>

                    {/* ITEM 4 */}
                    <li className="relative ml-10">
                        <span className="absolute flex items-center justify-center w-10 h-10 -left-[2.8rem] bg-black rounded-full border-2 border-neutral-700 hover:border-red-500 transition-colors duration-300">
                            <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                        </span>

                        <time className="block mb-2 text-sm font-mono font-medium leading-none text-neutral-500 uppercase tracking-wider">
                            July 28th, 2024
                        </time>

                        <h3 className="text-2xl font-bold text-white mb-3">
                            External Vice President
                        </h3>

                        <p className="text-sm font-normal text-neutral-400 max-w-[90%] leading-relaxed">
                            Council of College Student Governments
                            <br />University of Mindanao
                        </p>
                    </li>

                    {/* ITEM 5 */}
                    <li className="relative ml-10">
                        <span className="absolute flex items-center justify-center w-10 h-10 -left-[2.8rem] bg-black rounded-full border-2 border-neutral-700 hover:border-red-500 transition-colors duration-300">
                            <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                        </span>

                        <time className="block mb-2 text-sm font-mono font-medium leading-none text-neutral-500 uppercase tracking-wider">
                            July 28th, 2024
                        </time>

                        <h3 className="text-2xl font-bold text-white mb-3">
                            Assistant Recreational Head
                        </h3>

                        <p className="text-sm font-normal text-neutral-400 max-w-[90%] leading-relaxed">
                            Philippine Society of Information Technology Students
                            <br />Region XI
                        </p>
                    </li>

                    {/* ITEM 6 */}
                    <li className="relative ml-10">
                        <span className="absolute flex items-center justify-center w-10 h-10 -left-[2.8rem] bg-black rounded-full border-2 border-neutral-700 hover:border-red-500 transition-colors duration-300">
                            <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                        </span>

                        <time className="block mb-2 text-sm font-mono font-medium leading-none text-neutral-500 uppercase tracking-wider">
                            July 28th, 2024
                        </time>

                        <h3 className="text-2xl font-bold text-white mb-3">
                            Secretary
                        </h3>

                        <p className="text-sm font-normal text-neutral-400 max-w-[90%] leading-relaxed">
                            College of Computing Education Student Government
                            <br />University of Mindanao
                        </p>
                    </li>

                     {/* ITEM 7 */}
                     <li className="relative ml-10">
                        <span className="absolute flex items-center justify-center w-10 h-10 -left-[2.8rem] bg-black rounded-full border-2 border-neutral-700 hover:border-red-500 transition-colors duration-300">
                            <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                        </span>

                        <time className="block mb-2 text-sm font-mono font-medium leading-none text-neutral-500 uppercase tracking-wider">
                            July 28th, 2024
                        </time>

                        <h3 className="text-2xl font-bold text-white mb-3">
                            Assistant Secretary
                        </h3>

                        <p className="text-sm font-normal text-neutral-400 max-w-[90%] leading-relaxed">
                            Philippine Society of Information Technology Students
                            <br />Region XI
                        </p>
                    </li>

                </ol>
            </div>
        </section>
    );
}

export default Exp;
