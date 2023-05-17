import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello,
         <br /> <span className="info-name">I'm Kevin</span> 👋
         <br /> I spent the last 10 years in medical sales and am now making a transition into tech. I have a strong passion for front-end web development and I'd love to help grow or maintain your business. I'm a lifelong learner, and am currently taking courses on Python. In my free time, I like to watch sports and cook for friends and family.
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;