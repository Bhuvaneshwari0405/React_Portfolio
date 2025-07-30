import React from "react";

const techIcons = {
  HTML: "fab fa-html5",
  CSS: "fab fa-css3-alt",
  PHP: "fab fa-php",
  Bootstrap: "fab fa-bootstrap",
  MySQL: "fas fa-database",
  Laravel: "fab fa-laravel",
  MongoDB: "fas fa-leaf",
  Express: "fas fa-server",
  React: "fab fa-react",
  "Node.js": "fab fa-node-js",
};

const techBadge = (tech) => (
  <span key={tech} className="badge bg-light me-2 mb-2 p-2 text-black">
    <i className={`${techIcons[tech] || "fas fa-code"} me-1`}></i>
    {tech}
  </span>
);

const Projects = () => {
  return (
    <div>
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Projects</h2>
          <div className="row">
            {/* Complaint Management System */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Complaint Management System</h5>
                  <p className="card-text">
                    Platform for complaint handling with tracking and feedback.
                  </p>
                  <div className="mb-3">
                    {["HTML", "CSS", "PHP", "Bootstrap", "MySQL"].map((tech) =>
                      techBadge(tech)
                    )}
                  </div>
                  <a
                    href="https://github.com/Bhuvaneshwari0405/Complaint-Management-System"
                    className="btn btn-outline-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Task Manager */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Task Manager</h5>
                  <p className="card-text">
                    Laravel web app with role-based access and deadlines.
                  </p>
                  <div className="mb-3">
                    {["Laravel", "PHP", "MySQL", "Bootstrap"].map((tech) =>
                      techBadge(tech)
                    )}
                  </div>
                  <a
                    href="https://github.com/Bhuvaneshwari0405/Task_Manager"
                    className="btn btn-outline-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Expense Tracker */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Expense Tracker</h5>
                  <p className="card-text">
                    MERN app for tracking expenses with charts and analytics.
                  </p>
                  <div className="mb-3">
                    {["MongoDB", "Express", "React", "Node.js"].map((tech) =>
                      techBadge(tech)
                    )}
                  </div>
                  <a
                    href="https://github.com/Bhuvaneshwari0405/Expense_Tracker_MERN"
                    className="btn btn-outline-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* View All Projects Button */}
          <a
            href="https://github.com/Bhuvaneshwari0405"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-5 d-block mx-auto"
          >
            View All Projects <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
