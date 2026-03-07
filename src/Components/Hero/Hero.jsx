import React from "react";
import profile_img from "../../assets/profile_img.svg";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Vijjagiri Sai Advaithananda,</span>Software Engineer
      </h1>
      <p>I am a Fresher</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
