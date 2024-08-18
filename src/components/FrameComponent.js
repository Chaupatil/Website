import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", group172, frameDivBorderRadius }) => {
  const groupIconStyle = useMemo(() => {
    return {
      borderRadius: frameDivBorderRadius,
    };
  }, [frameDivBorderRadius]);

  const onDemosPagesSupportClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bG2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDemosPagesSupportClick1 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bG1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDemosPagesSupportClick2 = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bG']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={`bg-wrapper ${className}`}>
      <div className="bg2">
        <div className="bg3" />
        <header className="bg-inner">
          <div className="frame-parent">
            <div className="shadepro-wrapper">
              <a className="shadepro">JISHNUE BOYAPATI</a>
            </div>
            <nav className="demo-content-wrapper">
              <nav className="demo-content">
                <a
                  className="demos-pages-support"
                  onClick={onDemosPagesSupportClick}
                >
                  Projects
                </a>
                <a
                  className="demos-pages-support1"
                  onClick={onDemosPagesSupportClick1}
                >
                  Achievements
                </a>
                <a
                  className="demos-pages-support2"
                  onClick={onDemosPagesSupportClick2}
                >
                  Blogs
                </a>
              </nav>
            </nav>
            <div className="buttonsolidstyle-06">
              <div className="button-1">
                <div className="bg4" />
                <a className="button-name">Connect</a>
              </div>
            </div>
          </div>
        </header>
        <div className="who-am-i-parent">
          <h1 className="who-am-i">Who am I?</h1>
          <div className="frame-group">
            <img
              className="frame-child"
              loading="lazy"
              alt=""
              src={group172}
              style={groupIconStyle}
            />
            <div className="jishnue-boyapati-innovator-parent">
              <h2 className="jishnue-boyapati-container">
                <span>{`Jishnue Boyapati - `}</span>
                <span className="innovator-machine">
                  Innovator | Machine Learning Enthusiast | TEDx Speaker
                </span>
              </h2>
              <div className="at-just-16">
                At just 16, I am driven by a passion for advanced mathematics
                and artificial intelligence, striving to solve real-world
                problems through innovation and technology. Explore my journey
                and discover the impact of youthful curiosity combined with
                serious academic pursuit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  group172: PropTypes.string,

  /** Style props */
  frameDivBorderRadius: PropTypes.any,
};

export default FrameComponent;
