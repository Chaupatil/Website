import PropTypes from "prop-types";
import "./SkillsInstance.css";

const SkillsInstance = ({ className = "" }) => {
  return (
    <div className={`skills-instance1 ${className}`}>
      <div className="machine-learning-with-python-parent1">
        <div className="machine-learning-with4">
          Machine Learning with Python
        </div>
        <img className="frame-child50" alt="" src="/rectangle-5.svg" />
        <div className="machine-learning-with4">Computer Vision</div>
        <img className="frame-child51" alt="" src="/rectangle-5.svg" />
        <div className="machine-learning-with4">Image Classification</div>
        <img className="frame-child52" alt="" src="/rectangle-5.svg" />
        <div className="neural-networks4">Neural Networks</div>
        <img className="frame-child53" alt="" src="/rectangle-5.svg" />
        <div className="k-means-clustering4">K-Means clustering</div>
        <img className="frame-child54" alt="" src="/rectangle-5.svg" />
        <div className="nlp4">NLP</div>
        <img className="frame-child55" alt="" src="/rectangle-5.svg" />
        <div className="html5-css34">HTML5 , CSS3</div>
        <img className="frame-child56" alt="" src="/rectangle-5.svg" />
        <div className="rnn-cnn4">RNN, CNN</div>
        <img className="frame-child57" alt="" src="/rectangle-5.svg" />
        <div className="sentiment-analysis4">Sentiment Analysis</div>
        <img className="frame-child58" alt="" src="/rectangle-5.svg" />
        <div className="data-pre-processing4">Data pre-processing</div>
        <img className="frame-child59" alt="" src="/rectangle-5.svg" />
        <div className="javascript4">JavaScript </div>
        <img className="frame-child60" alt="" src="/rectangle-5.svg" />
        <div className="nodejs-with-mysql4">
          NodeJS with MySQL User Interface  
        </div>
        <img className="frame-child61" alt="" src="/rectangle-5.svg" />
      </div>
    </div>
  );
};

SkillsInstance.propTypes = {
  className: PropTypes.string,
};

export default SkillsInstance;
