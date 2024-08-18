import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`see-the-project-parent ${className}`}>
      <div className="see-the-project">See the project</div>
      <a href="#">
        <img className="arrow-outward-icon" alt="" src="/arrow-outward.svg" />
      </a>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
