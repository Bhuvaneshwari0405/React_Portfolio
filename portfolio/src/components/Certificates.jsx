import React from 'react'
import Certificate1 from "../assests/certificates/certificate1.jpg";
import Certificate2 from "../assests/certificates/certificate2.jpg";
import Certificate3 from "../assests/certificates/certificate3.jpg";
import Certificate4 from "../assests/certificates/certificate4.jpg";
import Certificate5 from "../assests/certificates/certificate5.png";
import Certificate6 from "../assests/certificates/certificate6.jpg";
const Certificates = () => {
  return (
    <div>
        <section id="certificates" className="py-5">
    <div className="container">
      <h2 className="section-title text-center">Certificates</h2>
      <div className="row g-4">
        {/* Certificate 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img
              src={Certificate1}
              className="card-img-top"
              alt="Certificate 1"
            />
            <div className="card-body text-center">
              <h5 className="card-title">PHP and MySQL</h5>
            </div>
          </div>
        </div>
        {/* Certificate 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img
              src={Certificate2}
              className="card-img-top"
              alt="Certificate 2"
            />
            <div className="card-body text-center">
              <h5 className="card-title">
                Introduction to Industry 4.0 &amp; IoT - NPTEL
              </h5>
            </div>
          </div>
        </div>
        {/* Certificate 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img
              src={Certificate3}
              className="card-img-top"
              alt="Certificate 3"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Participated in Hackathon</h5>
            </div>
          </div>
        </div>
        {/* Certificate 4 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img
              src={Certificate4}
              className="card-img-top"
              alt="Certificate 4"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Programming in Java</h5>
            </div>
          </div>
        </div>
        {/* Certificate 5 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img
              src={Certificate5}
              className="card-img-top"
              alt="Certificate 5"
            />
            <div className="card-body text-center">
              <h5 className="card-title">
                Getting Started with Data analytics on AWS
              </h5>
            </div>
          </div>
        </div>
        {/* Certificate 6 */}
        <div className="col-md-4">
          <a
            href="https://github.com/Bhuvaneshwari0405/Microsoft-Azure/"
            target=""
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card h-100 shadow-sm">
              <img
                src={Certificate6}
                className="card-img-top"
                alt="Certificate 3"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Azure Fundamentals </h5>
              </div>
            </div>
          </a>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  </section>
    </div>
  )
}

export default Certificates