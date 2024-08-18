import PropTypes from "prop-types";
import "./BlogCard.css";

const BlogCard = ({
  className = "",
  frame21,
  exploringAIsPotentialInEnviron,
}) => {
  return (
    <div className={`blog-card1 ${className}`}>
      <img className="blog-card-child" loading="lazy" alt="" src={frame21} />
      <div className="blog-card-content">
        <div className="exploring-ais-potential">
          {exploringAIsPotentialInEnviron}
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  className: PropTypes.string,
  frame21: PropTypes.string,
  exploringAIsPotentialInEnviron: PropTypes.string,
};

export default BlogCard;
