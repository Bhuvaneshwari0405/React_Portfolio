import React from "react";
import award1 from "../assests/achievements/award1.jpg";
import award2 from "../assests/achievements/award2.png";
export const Achievements = () => {
  return (
    <div>
      <section id="achievements" className="py-5">
        <div className="container">
          <h2 className="section-title text-center">Achievements</h2>
          <div className="row align-items-center mb-5 flex-md-row achievement-card">
            <div className="col-md-5 text-center mb-3 mb-md-0">
              <img
                src={award1}
                alt="Achievement 1"
                className="img-fluid rounded shadow"
                style={{ maxWidth: 180 }}
              />
            </div>
            <div className="col-md-7">
              <h5 className="fw-bold">WE Scholar - Top 1% Nationwide</h5>
              <p>
                Selected as a WE Scholar by TalentSprint &amp; Google,
                recognized among the top 1% from 22,000+ applicants for
                outstanding performance and leadership in technology.
              </p>
            </div>
          </div>
          <div className="row align-items-center mb-5 flex-md-row-reverse achievement-card">
            <div className="col-md-5 text-center mb-3 mb-md-0">
              <img
                src={award2}
                alt="Achievement 2"
                className="img-fluid rounded shadow"
                style={{ maxWidth: 180 }}
              />
            </div>
            <div className="col-md-7">
              <h5 className="fw-bold">Runner Up - Paper presentation 2024</h5>
              <p>
                Won 2nd place in paper presentation in National level technical
                Symposium
              </p>
            </div>
          </div>
          {/* Add more achievements as needed, alternating the row direction */}
        </div>
      </section>
    </div>
  );
};
