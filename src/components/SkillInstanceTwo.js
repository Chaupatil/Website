import PropTypes from "prop-types";
import "./SkillInstanceTwo.css";

const SkillInstanceTwo = ({ className = "" }) => {
  return (
    <div className={`skill-instance-two ${className}`}>
      <div className="machine-learning-with-python-group">
        <div className="machine-learning-with1">
          Machine Learning with Python
        </div>
        <img className="frame-child14" alt="" src="/rectangle-5.svg" />
        <div className="machine-learning-with1">Computer Vision</div>
        <img className="frame-child15" alt="" src="/rectangle-5.svg" />
        <div className="machine-learning-with1">Image Classification</div>
        <img className="frame-child16" alt="" src="/rectangle-5.svg" />
        <div className="neural-networks1">Neural Networks</div>
        <img className="frame-child17" alt="" src="/rectangle-5.svg" />
        <div className="k-means-clustering1">K-Means clustering</div>
        <img className="frame-child18" alt="" src="/rectangle-5.svg" />
        <div className="nlp1">NLP</div>
        <img className="frame-child19" alt="" src="/rectangle-5.svg" />
        <div className="html5-css31">HTML5 , CSS3</div>
        <img className="frame-child20" alt="" src="/rectangle-5.svg" />
        <div className="rnn-cnn1">RNN, CNN</div>
        <img className="frame-child21" alt="" src="/rectangle-5.svg" />
        <div className="sentiment-analysis1">Sentiment Analysis</div>
        <img className="frame-child22" alt="" src="/rectangle-5.svg" />
        <div className="data-pre-processing1">Data pre-processing</div>
        <img className="frame-child23" alt="" src="/rectangle-5.svg" />
        <div className="javascript1">JavaScript </div>
        <img className="frame-child24" alt="" src="/rectangle-5.svg" />
        <div className="nodejs-with-mysql1">
          NodeJS with MySQL User Interface  
        </div>
        <img className="frame-child25" alt="" src="/rectangle-5.svg" />
      </div>
    </div>
  );
};

SkillInstanceTwo.propTypes = {
  className: PropTypes.string,
};

export default SkillInstanceTwo;
