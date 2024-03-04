import React from "react";
import "../Styles/About.css";
import aboutus1 from "../Assets/newabout.jpg";

const About = () => {
  return (
    <div id="About">
      <div className="ab-container">
        <div className="about">
          <h1>ABOUT</h1>
        </div>
        <div className="about-sec">
          <div className="about-img">
            <img className="about-img1" src={aboutus1} alt="about1"/>
          </div>
          <div className="about-details">
           
            <p>
              Oh feel if up to till like. He an thing rapid these after going
              drawn or. Timed she his law the spoil round defer. In surprise
              concerns informed betrayed he learning is ye. Ignorant formerly so
              ye blessing. Quick can manor smart money hopes worth too. Comfort
              produce husband boy her had hearing. Law others theirs passed but
              wishes. You day real less till dear read. Considered use
              dispatched melancholy sympathize discretion led. Oh feel if up to
              till like.
            </p>
            <br />
            <br />
            <span>
              He as spoke avoid given downs money on we. Of properly carriage
              shutters ye as wandered up repeated moreover.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
