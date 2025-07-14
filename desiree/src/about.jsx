function Home() {
    return (
        <div>
            <section className="home" id="home">
                <div className="home-content">
                    <h1>Hello! <br /> My name is <span>Desiree.</span></h1>

                    <div className="text-animation">
                        <div className="static-text">
                            I'm&nbsp;
                        </div>
                        <div className="text-wrapper">
                            <span>
                                <h3>
                                    <span className="box b1">a Web Developer</span>
                                    <span className="box b2">a Student Leader</span>
                                    <span className="box b3">an Active Volunteer</span>
                                </h3>
                            </span>
                        </div>
                    </div>

                    <p className="home-text">
                        A driven leader with a curious mind for the ever-evolving world of technology and innovation, blending logical problem-solving
                        with creative expression. Passion lies in exploring the intersection of computing and the arts—bringing ideas to life through
                        illustration, design, music, and storytelling. Whether immersed in lines of code or lines of prose, there's always a pursuit of meaning,
                        growth, and purposeful creation.
                    </p>

                    <div className="buttons">
                        <a href="#readMore" style={{ textDecoration: 'none', color: 'inherit' }}>Read more</a>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="home-image">
                    <img src="./src/assets/mbj.jpg" alt="Desiree" />
                </div>
            </section>
            <section className="readMore" id="readMore">
                <div>
                    <div className="exp_timeline">
                        <h1>EXPERIENCE TIMELINE</h1>
                        <ul className="timeline">
                            <li>
                                <span>Training and Development Director</span> - Davao Young Executives (2025)
                            </li>
                            <li>
                                <span>Customer Service Representative for American Home Shield</span> - Alorica Davao (2025)
                            </li>
                            <li>
                                <span>President</span> - College of Computing Education Student Government (2024-2025)
                            </li>
                            <li>
                                <span>Marketing and Multimedia Unit Supervisor</span> - College of Computing Education Student Government (2024-2025)
                            </li>
                            <li>
                                <span>Vice President External</span> - University of Mindanao (2024-2025)
                            </li>
                            <li>
                                <span>Assistant Recreational Head Officer</span> - Philippine Society of Information Technology Students Region XI (2024-2025)
                            </li>
                            <li>
                                <span>Logistic and Event Management Volunteer</span> - Davao StartUp Week (2024)
                            </li>
                            <li>
                                <span>Documentation Photographer Volunteer</span> - Blockchain Campus Conference (2024)
                            </li>
                            <li>
                                <span>Operation Block Committee Member</span> - Junior Blockchain Consortium of the Philippines - UM Chapter (2024)
                            </li>
                            <li>
                                <span>Secretary</span> - College of Computing Education Student Government (2023-2024)
                            </li>
                            <li>
                                <span>Assistant Secretary</span> - Philippine Society of Information Technology Students Region XI (2023-2024)
                            </li>
                            <li>
                                <span>Publication and Documentation Head</span> - Girl Up Davao (2023)
                            </li>
                            <li>
                                <span>Delegate</span> - United Nations Girl Up Southeast Asia STEAM and Leadership Training Camp (2022)
                            </li>
                            <li>
                                <span>Digital Artist</span> - Freelance (2020-2023)
                            </li>
                            <li>
                                <span>Personal Assistant</span> - English Academic High School Teacher (2020-2021)
                            </li>
                        </ul>
                    </div>
                    <div className="certifications">
                        <h1>CERTIFICATIONS</h1>
                        <ul className="certification-list">
                            <li>
                                <span>Google Project Management: Professional Certificate</span> - Coursera (2024)
                            </li>
                            <li>
                                <span>Google UX Design: Professional Certificate</span> - Coursera (2024)
                            </li>
                            <li>
                                <span>Introduction to Cybersecurity Tools & Cyber Attacks</span> - Coursera (2024)
                            </li>
                            <li>
                                <span>Introduction to Cybersecurity</span> - Coursera (2024)
                            </li>
                            <li>
                                <span>Introduction to Cybersecurity Tools & Cyber Attacks</span> - Coursera (2024)
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;