import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Hero from "../components/Hero";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import BlogCard from "../components/BlogCard";
import FrameComponent4 from "../components/FrameComponent4";
import Features from "../components/Features";
import "./Webpage.css";

const Webpage = () => {
  return (
    <div className="webpage1">
      <FrameComponent group172="/group-172@2x.png" />
      <FrameComponent1 />
      <Hero
        cardImage="/rectangle-2@2x.png"
        rectangle2="/rectangle-2-1@2x.png"
      />
      <FrameComponent2 line2="/line-2.svg" />
      <FrameComponent3 />
      <section className="hero-group">
        <div className="hero1">
          <div className="bg1" data-scroll-to="bG" />
          <h1 className="blogs1">Blogs</h1>
          <div className="blog-content">
            <div className="blog-card-container">
              <BlogCard
                frame21="/frame-21@2x.png"
                exploringAIsPotentialInEnviron="Exploring AI’s Potential in Environmental Conservation"
              />
              <BlogCard
                frame21="/frame-22.svg"
                exploringAIsPotentialInEnviron="My Experience at TEDx: Sharing Ideas with Future Innovators"
              />
            </div>
          </div>
        </div>
        <FrameComponent4 />
        <Features />
      </section>
    </div>
  );
};

export default Webpage;
