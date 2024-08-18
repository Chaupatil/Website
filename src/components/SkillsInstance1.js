import PropTypes from "prop-types";
import "./SkillsInstance1.css";

const SkillsInstance1 = ({ className = "" }) => {
  return (
    <div className={`skills-instance ${className}`}>
      <div className="group-div">
        <div className="machine-learning-with3">
          Machine Learning with Python
        </div>
        <img className="frame-child38" alt="" src="/rectangle-5.svg" />
        <div className="machine-learning-with3">Computer Vision</div>
        <img className="frame-child39" alt="" src="/rectangle-5.svg" />
        <div className="machine-learning-with3">Image Classification</div>
        <img className="frame-child40" alt="" src="/rectangle-5.svg" />
        <div className="neural-networks3">Neural Networks</div>
        <img className="frame-child41" alt="" src="/rectangle-5.svg" />
        <div className="k-means-clustering3">K-Means clustering</div>
        <img className="frame-child42" alt="" src="/rectangle-5.svg" />
        <div className="nlp3">NLP</div>
        <img className="frame-child43" alt="" src="/rectangle-5.svg" />
        <div className="html5-css33">HTML5 , CSS3</div>
        <img className="frame-child44" alt="" src="/rectangle-5.svg" />
        <div className="rnn-cnn3">RNN, CNN</div>
        <img className="frame-child45" alt="" src="/rectangle-5.svg" />
        <div className="sentiment-analysis3">Sentiment Analysis</div>
        <img className="frame-child46" alt="" src="/rectangle-5.svg" />
        <div className="data-pre-processing3">Data pre-processing</div>
        <img className="frame-child47" alt="" src="/rectangle-5.svg" />
        <div className="javascript3">JavaScript </div>
        <img className="frame-child48" alt="" src="/rectangle-5.svg" />
        <div className="nodejs-with-mysql3">
          NodeJS with MySQL User Interface  
        </div>
        <img className="frame-child49" alt="" src="/rectangle-5.svg" />
      </div>
    </div>
  );
};

SkillsInstance1.propTypes = {
  className: PropTypes.string,
};

export default SkillsInstance1;
