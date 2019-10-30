import React from "react";
import "./About.css";

const AboutPage = () => {
  return (
    <section id="aboutUs">
      <h1 className="aboutUsTitle text-center">About Us!</h1>
      <ul>
        <li> Cat Park </li>
        <li>
          {" "}
          Designed to help you find the closest free parking area available{" "}
        </li>
        <li>
          {" "}
          Uses a dataset from the Vancouver Police Department's crime API so you
          can gauge risk for where you park{" "}
        </li>
        <li>
          {" "}
          Created using Golang and ReactJS as part of a Lighthouse Labs final
          project{" "}
        </li>
        <li> Hosted on Heroku & Netlify </li>
      </ul>
    </section>
  );
};

export default AboutPage;
