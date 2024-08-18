import SkillInstance from "./SkillInstance";
import SkillInstanceTwo from "./SkillInstanceTwo";
import Component from "./Component";
import SkillsInstance1 from "./SkillsInstance1";
import SkillsInstance from "./SkillsInstance";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`hero-wrapper ${className}`}>
      <div className="hero4">
        <div className="bg9" />
        <div className="skills-wrapper">
          <h1 className="skills">Skills</h1>
        </div>
        <div className="skill-content">
          <div className="rectangle-parent">
            <div className="rectangle-div" />
            <div className="frame-child62" />
            <div className="frame-child63" />
            <div className="skill-item">
              <div className="skill-icon" />
              <div className="skill-name-container">
                <div className="skill-name-background" />
              </div>
            </div>
          </div>
          <div className="skill-set-container">
            <div className="skill-set">
              <div className="skill-instance-container">
                <SkillInstance />
                <div className="skill-instance-two-container">
                  <SkillInstanceTwo />
                </div>
              </div>
              <div className="skill-instance-three-container">
                <div className="skill-instance-two-container">
                  <Component />
                </div>
                <SkillsInstance1 />
              </div>
              <div className="skill" />
              <div className="skill1" />
              <div className="skill2" />
              <div className="skill3" />
              <div className="skill4" />
              <SkillsInstance />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
