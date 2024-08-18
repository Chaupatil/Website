import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`customer-content-parent ${className}`}>
      <div className="customer-content">
        <div className="customer-testimonial">
          <div className="testimonial-list">
            <h2 className="m">Machine Learning with Python</h2>
            <div className="customers-visit-omeg">
              Proficient in neural networks, computer vision, and natural
              language processing
            </div>
          </div>
          <div className="testimonial-list1">
            <h2 className="m">{`JavaScript & Web Development`}</h2>
            <div className="customers-visit-omeg1">
              Experienced in backend development using Node.js and frontend
              technologies like HTML5 and CSS3
            </div>
          </div>
          <div className="testimonial-list2">
            <h2 className="m">Tools and Technologies</h2>
            <div className="customers-visit-omeg">
              Proficient in Django, MySQL, and familiar with API development and
              integration.
            </div>
          </div>
        </div>
      </div>
      <div className="hero2">
        <div className="bg5" />
        <h1 className="about">About</h1>
        <div className="hello-im-jishnue">
          Hello! I’m Jishnue, a high school student with a profound interest in
          machine learning and computer vision. My journey began in elementary
          school, where I was captivated by the complexities of mathematics and
          programming. Since then, I've advanced through rigorous academic
          challenges, including a machine learning certification from Stanford
          University where I scored 97%, and speaking at a TEDx event. My goal
          is to leverage technology to create solutions that make a meaningful
          difference in people's lives.
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
