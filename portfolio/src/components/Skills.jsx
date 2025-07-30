import React, { useState, useEffect } from "react";
import '../Skills.css'
const skillData = {
  Languages: [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "Python", icon: "fab fa-python" },
  ],
  Frameworks: [
    { name: "React", icon: "fab fa-react" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
    { name: "Node.js", icon: "fab fa-node-js" },
  ],
  Database: [
    { name: "MySQL", icon: "fas fa-database" },
    { name: "MongoDB", icon: "fas fa-leaf" },
  ],
  "Web Tools": [
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "VS Code", icon: "fas fa-code" },
    { name: "Figma", icon: "fab fa-figma" },
  ],
  "Soft Skills": [
    { name: "Communication", icon: "fas fa-comments" },
    { name: "Teamwork", icon: "fas fa-users" },
    { name: "Problem Solving", icon: "fas fa-lightbulb" },
  ],
};

const categories = Object.keys(skillData);

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [fade, setFade] = useState(true);

  // Auto switch category every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade out
      setTimeout(() => {
        setActiveCategory((prev) => {
          const currentIndex = categories.indexOf(prev);
          const nextIndex = (currentIndex + 1) % categories.length;
          return categories[nextIndex];
        });
        setFade(true); // Trigger fade in
      }, 300); // Delay to let fade-out complete
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Side: Skills Display */}
        <div className="col-md-8">
          <h2 className="section-title text-primary">Skills</h2>
          <div
            className={`row g-3 transition-fade ${fade ? "fade-in" : "fade-out"}`}
          >
            {skillData[activeCategory].map((skill, index) => (
              <div className="col-6 col-md-4" key={index}>
                <div className="card text-center border-primary">
                  <div className="card-body">
                    <i className={`${skill.icon} fa-2x text-primary`}></i>
                    <p className="mt-2 mb-0 fw-semibold">{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Category Selector */}
        <div className="col-md-4">
          <div className="card shadow border-0">
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Skill Categories</h5>
              <ul className="list-group list-group-flush">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className={`list-group-item text-center fw-semibold ${
                      activeCategory === cat ? "text-primary" : "text-dark"
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
