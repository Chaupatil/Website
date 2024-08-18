import PropTypes from "prop-types";
import "./SkillInstance.css";

const SkillInstance = ({ className = "" }) => {
  return (
    <div className={`skill-instance ${className}`}>
      <div className="machine-learning-with-python-parent">
        <div className="machine-learning-with">
          Machine Learning with Python
        </div>
        <img
          className="rectangle-icon"
          loading="lazy"
          alt=""
          src="/rectangle-5.svg"
        />
        <div className="machine-learning-with">Computer Vision</div>
        <img
          className="frame-child3"
          loading="lazy"
          alt=""
          src="/rectangle-5.svg"
        />
        <div className="machine-learning-with">Image Classification</div>
        <img className="frame-child4" alt="" src="/rectangle-5.svg" />
        <div className="neural-networks">Neural Networks</div>
        <img className="frame-child5" alt="" src="/rectangle-5.svg" />
        <div className="k-means-clustering">K-Means clustering</div>
        <img className="frame-child6" alt="" src="/rectangle-5.svg" />
        <div className="nlp">NLP</div>
        <img className="frame-child7" alt="" src="/rectangle-5.svg" />
        <div className="html5-css3">HTML5 , CSS3</div>
        <img className="frame-child8" alt="" src="/rectangle-5.svg" />
        <div className="rnn-cnn">RNN, CNN</div>
        <img className="frame-child9" alt="" src="/rectangle-5.svg" />
        <div className="sentiment-analysis">Sentiment Analysis</div>
        <img className="frame-child10" alt="" src="/rectangle-5.svg" />
        <div className="data-pre-processing">Data pre-processing</div>
        <img className="frame-child11" alt="" src="/rectangle-5.svg" />
        <div className="javascript">JavaScript </div>
        <img className="frame-child12" alt="" src="/rectangle-5.svg" />
        <div className="nodejs-with-mysql">
          NodeJS with MySQL User Interface  
        </div>
        <img className="frame-child13" alt="" src="/rectangle-5.svg" />
      </div>
    </div>
  );
};

SkillInstance.propTypes = {
  className: PropTypes.string,
};

export default SkillInstance;
