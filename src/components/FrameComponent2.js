import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "", line2 }) => {
  return (
    <section className={`features-wrapper ${className}`}>
      <div className="features">
        <div className="bg7" />
        <img className="features-child" loading="lazy" alt="" src={line2} />
        <div className="feature-item">
          <div className="feature-description">
            <div className="dedicated-project-ma">2016</div>
            <div className="dedicated-project-ma1">
              Winner at Pi Day Princeton Mathematics Competition
            </div>
          </div>
          <div className="feature-description1">
            <div className="dedicated-project-ma">{`2018 `}</div>
            <div className="dedicated-project-ma3">
              Participated in multiple mathematical olympiads, achieving top
              merits.
            </div>
          </div>
          <div className="feature-description2">
            <div className="dedicated-project-ma">2019</div>
            <div className="dedicated-project-ma5">TEDx Speaker</div>
          </div>
          <div className="feature-description3">
            <div className="dedicated-project-ma">2021</div>
            <div className="dedicated-project-ma7">
              Completed a Stanford University course in Machine Learning with a
              97% score.
            </div>
          </div>
          <div className="feature-description3">
            <div className="dedicated-project-ma">2022</div>
            <div className="dedicated-project-ma7">
              Internship at Digital On Us, developing applications for Johnson
              and Johnson.
            </div>
          </div>
        </div>
        <h1 className="timeline">Timeline</h1>
        <div className="instance-parent">
          <img className="frame-item" alt="" src="/frame-23.svg" />
          <img className="frame-item" alt="" src="/frame-23.svg" />
          <div className="frame-container">
            <div className="instance-group">
              <img className="frame-item" alt="" src="/frame-23.svg" />
              <img className="frame-item" alt="" src="/frame-23.svg" />
            </div>
            <img className="frame-item" alt="" src="/frame-23.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  line2: PropTypes.string,
};

export default FrameComponent2;
