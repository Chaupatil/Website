import PropTypes from "prop-types";
import "./Component.css";

const Component = ({ className = "" }) => {
  return (
    <div className={`div ${className}`}>
      <div className="machine-learning-with-python-container">
        <div className="machine-learning-with2">
          Machine Learning with Python
        </div>
        <img className="frame-child26" alt="" src="/rectangle-5.svg" />
        <div className="machine-learning-with2">Computer Vision</div>
        <img className="frame-child27" alt="" src="/rectangle-5.svg" />
        <div className="machine-learning-with2">Image Classification</div>
        <img className="frame-child28" alt="" src="/rectangle-5.svg" />
        <div className="neural-networks2">Neural Networks</div>
        <img className="frame-child29" alt="" src="/rectangle-5.svg" />
        <div className="k-means-clustering2">K-Means clustering</div>
        <img className="frame-child30" alt="" src="/rectangle-5.svg" />
        <div className="nlp2">NLP</div>
        <img className="frame-child31" alt="" src="/rectangle-5.svg" />
        <div className="html5-css32">HTML5 , CSS3</div>
        <img className="frame-child32" alt="" src="/rectangle-5.svg" />
        <div className="rnn-cnn2">RNN, CNN</div>
        <img className="frame-child33" alt="" src="/rectangle-5.svg" />
        <div className="sentiment-analysis2">Sentiment Analysis</div>
        <img className="frame-child34" alt="" src="/rectangle-5.svg" />
        <div className="data-pre-processing2">Data pre-processing</div>
        <img className="frame-child35" alt="" src="/rectangle-5.svg" />
        <div className="javascript2">JavaScript </div>
        <img className="frame-child36" alt="" src="/rectangle-5.svg" />
        <div className="nodejs-with-mysql2">
          NodeJS with MySQL User Interface  
        </div>
        <img className="frame-child37" alt="" src="/rectangle-5.svg" />
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
