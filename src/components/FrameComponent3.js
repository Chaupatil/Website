import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`features-container ${className}`}>
      <div className="features1">
        <div className="bg8" data-scroll-to="bG1" />
        <h1 className="achievements">Achievements</h1>
        <div className="achievement-item">
          <div className="dedicated-project-ma-container">
            <p className="discussed-the-impact-of-ai-on">TEDx Speaker 2019 -</p>
            <p className="discussed-the-impact-of-ai-on">
              <span className="discussed">{`Discussed `}</span>
              <span className="the-impact-of">
                The Impact of AI on Modern Education
              </span>
              <span>
                {" "}
                in front of an audience of over 300 educators and students
              </span>
            </p>
          </div>
          <div className="dedicated-project-ma-container">
            <p className="discussed-the-impact-of-ai-on">
              <span className="span">
                <span className="duke-university-talent">
                  Duke University Talent Identification Program
                </span>
              </span>
              <span>
                <span className="span"> -</span>
              </span>
            </p>
            <p className="discussed-the-impact-of-ai-on">
              <span>
                <span>Achieved top merit in the 24th annual competition.</span>
              </span>
            </p>
          </div>
          <div className="dedicated-project-ma-container">
            <p className="discussed-the-impact-of-ai-on">
              <span>{`Machine Learning Certification by `}</span>
              <span className="stanford-university-">
                <span className="duke-university-talent">
                  Stanford University
                </span>
                <span className="scored"> -</span>
              </span>
            </p>
            <p className="discussed-the-impact-of-ai-on">
              <span className="scored">
                <span className="scored1">{`Scored `}</span>
              </span>
              <span className="duke-university-talent">
                <span className="stanford-university-">97%</span>
              </span>
              <span>
                <span className="duke-university-talent">,</span>
                <span> mastering complex algorithms and data processing.</span>
              </span>
            </p>
          </div>
          <div className="dedicated-project-ma-container">
            <p className="discussed-the-impact-of-ai-on">Patents -</p>
            <p className="discussed-the-impact-of-ai-on">
              <span className="discussed">Inventor of the "</span>
              <span className="the-impact-of">
                Autonomous Flying Spacenet Car
              </span>
              <span>
                ," a patent that introduces innovative solutions in
                transportation.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
