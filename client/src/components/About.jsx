import React from "react";
import AImage from "../assests/images/hero.jpeg";

const About = () => {
  return (
    <div>
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={AImage}
                alt="Bhuvaneshwari's Profile"
                className="profile-img enhanced-profile-img mb-3"
              />
            </div>
            <div className="col-md-7">
              <div className="about-card p-4 shadow-sm">
                <h2 className="section-title mb-3">About Me</h2>
                <h4 className="fw-bold mb-2" style={{color:"#007bff;"}}>
                  Aspiring Full Stack Developer
                </h4>
                <p className="lead mb-3">
                  IT Student | WE Scholar'23 | Passionate about building
                  impactful web solutions
                </p>
                <hr className="about-divider mb-3" />
                <p>
                  I'm an IT student at MKCE and a WE Scholar by TalentSprint &
                  Google (Top 1% from 22,000+). I enjoy solving real-world
                  problems through web development and am skilled in PHP,
                  Python, MySQL, and currently learning the MERN stack.
                </p>
                <ul className="list-unstyled about-info mb-4">
                  <li>
                    <i className="bi bi-geo-alt-fill me-2"></i>Rasipuram, Tamil
                    Nadu, India
                  </li>
                  <li>
                    <i className="bi bi-mortarboard-fill me-2"></i>MKCE - B.Tech
                    IT
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill me-2"></i>
                    <a href="mailto:bhuvanachinnaduri@gmail.com">
                      bhuvanachinnaduri@gmail.com
                    </a>
                  </li>
                </ul>
                <a href="#contact" className="btn btn-outline-primary">
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
