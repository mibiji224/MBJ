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
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;