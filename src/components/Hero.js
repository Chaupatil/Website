import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "", cardImage, rectangle2 }) => {
  return (
    <section className={`hero3 ${className}`}>
      <div className="bg6" data-scroll-to="bG2" />
      <div className="project-content">
        <div className="projects-parent">
          <h1 className="projects">Projects</h1>
          <div className="explore-my-selected">
            Explore my selected projects, showcasing my dedication to innovative
            and heartfelt design.
          </div>
        </div>
      </div>
      <div className="project-card-container">
        <div className="project-card">
          <img
            className="card-image-icon"
            loading="lazy"
            alt=""
            src={cardImage}
          />
          <div className="card-content">
            <h3 className="kids-seedbank-mobile">
              Kids SeedBank Mobile Application
            </h3>
            <div className="project-summary">
              <div className="a-mobile-app">
                A mobile app designed to educate children about agriculture and
                help farmers by identifying and counting seeds using AI
              </div>
              <FrameComponent5 />
            </div>
          </div>
        </div>
        <div className="project-card">
          <img className="card-image-icon" alt="" src={rectangle2} />
          <div className="pneumonia-identification-using-parent">
            <h3 className="kids-seedbank-mobile">
              Pneumonia Identification using ML
            </h3>
            <div className="project-summary">
              <div className="a-mobile-app">
                Developed a highly accurate deep learning model to detect
                pneumonia from chest X-ray images
              </div>
              <div className="instance-wrapper">
                <FrameComponent5 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  cardImage: PropTypes.string,
  rectangle2: PropTypes.string,
};

export default Hero;
