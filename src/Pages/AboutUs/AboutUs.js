import React from "react";
import AboutCourse from "./AboutComponets/AboutCourse";
import AboutWelcome from "./AboutComponets/AboutWelcome";
import Component from "./AboutComponets/AboutPeople";

const AboutUs = () => {
  return (
    <div>
      <AboutWelcome />
      <AboutCourse />
      <Component />
    </div>
  );
};

export default AboutUs;
