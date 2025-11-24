import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            alert("Message sent! (Demo)");
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1200);
    };

    return (
        <section className="bg-[#050505] text-white py-20 px-6 lg:px-12 font-sans relative overflow-hidden" id="connect">
            
            {/* Ambient Background - Adjusted for new layout */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#db0a0a]/10 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-t from-[#db0a0a]/5 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    
                    {/* --- LEFT COLUMN: Large Engaging Text (7 Columns) --- */}
                    <div className="lg:col-span-7 space-y-10">
                        <div>
                            <span className="flex items-center gap-3 text-[#db0a0a] font-mono text-sm tracking-widest uppercase mb-6">
                                <span className="w-8 h-[1px] bg-[#db0a0a]"></span>
                                Get in Touch
                            </span>
                            
                            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                                Let’s build something <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">extraordinary together.</span>
                            </h2>
                            
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-light">
                                I'm currently available for freelance work and open to new opportunities. 
                                If you have a project that needs a creative touch, or just want to discuss 
                                the latest tech, I'm all ears.
                            </p>
                        </div>

                        {/* Contact Info Row */}
                        <div className="flex flex-col sm:flex-row gap-8 py-6 border-t border-white/5 border-b">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 text-[#db0a0a] border border-white/5">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email Me</p>
                                    <a href="mailto:hello@yourdomain.com" className="text-lg font-medium text-white hover:text-[#db0a0a] transition-colors">
                                        desireesoronio@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 text-[#db0a0a] border border-white/5">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Based In</p>
                                    <p className="text-lg font-medium text-white">Philippines</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Follow Me</p>
                            <div className="flex gap-4">
                                {[Github, Linkedin, Instagram, Twitter].map((Icon, index) => (
                                    <a key={index} href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#db0a0a] hover:border-[#db0a0a] hover:-translate-y-1 transition-all duration-300">
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: Compact Form (5 Columns) --- */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative shadow-2xl">
                            {/* Decorative glow behind form */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>

                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                                
                                <div className="space-y-1">
                                    <label className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${focusedField === 'name' ? 'text-[#db0a0a]' : 'text-gray-500'}`}>Name</label>
                                    <input
                                        type="text" name="name" value={formData.name} onChange={handleChange}
                                        onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                                        required placeholder="Your Name"
                                        className="w-full bg-[#0a0a0a]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#db0a0a] focus:ring-1 focus:ring-[#db0a0a] transition-all placeholder-gray-700"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${focusedField === 'email' ? 'text-[#db0a0a]' : 'text-gray-500'}`}>Email</label>
                                    <input
                                        type="email" name="email" value={formData.email} onChange={handleChange}
                                        onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                                        required placeholder="your_email@example.com"
                                        className="w-full bg-[#0a0a0a]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#db0a0a] focus:ring-1 focus:ring-[#db0a0a] transition-all placeholder-gray-700"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${focusedField === 'message' ? 'text-[#db0a0a]' : 'text-gray-500'}`}>Message</label>
                                    <textarea
                                        name="message" value={formData.message} onChange={handleChange}
                                        onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                                        required rows="4" placeholder="How can I help you?"
                                        className="w-full bg-[#0a0a0a]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#db0a0a] focus:ring-1 focus:ring-[#db0a0a] transition-all resize-none placeholder-gray-700"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-[#db0a0a] to-[#990808] text-white text-sm font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(219,10,10,0.3)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 mt-2"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;