function Home() {
    return (
        <div>
            <section className="home" id="home">
                <div className="home-content">
                    {/* INTRO */}
                    <h1>Hello! <br></br> My name is <span>Desiree.</span></h1>
                    <h3 className="text-animation">
                        I'm a
                        <span><div className="text-wrapper">
                            <div className="box b1">Web Developer</div>
                            <div className="box b2">Student Leader</div>
                            <div className="box b3">Active Volunteer</div>
                        </div></span>
                    </h3>
                    <p>A driven leader with a curious mind for the ever-evolving world of technology and innovation, blending logical problem-solving with creative expression. Passion lies in exploring the intersection of computing and the arts—bringing ideas to life through illustration, design, music, and storytelling. Whether immersed in lines of code or lines of prose, there's always a pursuit of meaning, growth, and purposeful creation.</p>

                    {/* BUTTONS */}
                    <div className="buttons">
                        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Send a message</a>
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
