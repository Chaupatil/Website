import PropTypes from "prop-types";
import "./Features.css";

const Features = ({ className = "" }) => {
  return (
    <footer className={`features2 ${className}`}>
      <div className="bg10" />
      <h1 className="contact">Contact</h1>
      <div className="contact-info">
        <div className="dedicated-project-ma-container4">
          <p className="lets-connect">
            <span>
              <b className="lets-connect1">Let’s Connect!</b>
            </span>
            <span>
              <span>{` `}</span>
            </span>
          </p>
          <p className="whether-youre-a-fellow-studen">
            <span>
              <span>
                Whether you’re a fellow student, educator, or someone interested
                in technology and innovation, I’m always open to discussing new
                ideas and opportunities. Please use the form below to get in
                touch!
              </span>
            </span>
          </p>
        </div>
        <div className="contact-links">
          <div className="blink-container">
            <div className="blink-animation">
              <img className="blink-icon" alt="" src="/blink.svg" />
            </div>
            <div className="dedicated-project-ma10">Available for work</div>
          </div>
          <div className="social-links">
            <a href="linkedin">
              <div className="linkedin">
                <div className="linkedin-child" />
                <img
                  className="linkedin-symbolsvg-icon"
                  alt=""
                  src="/linkedin-symbolsvg.svg"
                />{" "}
              </div>
            </a>
            <a href="github">
              <div className="linkedin">
                <div className="linkedin-child" />

                <img className="symbolsvg-icon" alt="" src="/symbolsvg.svg" />
              </div>
            </a>
            <a href="gmail">
              <img
                className="email-icon"
                loading="lazy"
                alt=""
                src="/email.svg"
              />
            </a>
            <a href="telegram">
              <img className="email-icon" alt="" src="/email-1.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
