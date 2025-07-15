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
        </div>
    );
}

export default Home;