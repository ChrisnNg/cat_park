import React from "react";
import "./About.css";

const AboutPage = () => {
  return (
    <section>
      <header id="aboutUs">
        <h1 className="aboutUsTitle text-center">About Us!</h1>
        <ul>
          <li> Cat Park </li>
          <li>
            {" "}
            Designed to help you find the closest free parking area available{" "}
          </li>
          <li>
            {" "}
            Uses a dataset from the Vancouver Police Department's crime API so
            you can gauge risk for where you park{" "}
          </li>
          <li>
            {" "}
            Created using Golang and ReactJS as part of a Lighthouse Labs final
            project{" "}
          </li>
          <li> Hosted on Heroku & Netlify </li>
        </ul>
      </header>

      <div className="container text-center">
        <p>Follow us on social media to get our latest updates!</p>
        <div className="socialMediaIcons chris">
          <a href="https://www.facebook.com/christopher.ng.5203?ref=bookmarks">
            <img
              src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/fb-icon.png?raw=true"
              alt="Chris-fb"
            />
          </a>
          <a href="https://www.linkedin.com/in/christopherkyleng/">
            <img
              src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/linked-icon.png?raw=true"
              alt="Chris-linkedin"
            />
          </a>
          <a href="https://www.instagram.com/cristopherng/">
            <img
              src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/insta-icon.png?raw=true"
              alt="Chris-ig"
            />
          </a>
        </div>
        <div className="socialMediaIcons anthony">
          <a href="https://www.facebook.com/xoxobbq">
            <img
              src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/fb-icon.png?raw=true"
              alt="Anthony-fb"
            />
          </a>
          <a href="https://www.linkedin.com/in/anthony-zhu-3abb9b183/">
            <img
              src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/linked-icon.png?raw=true"
              alt="Anthony-linkedin"
            />
          </a>
          <a href="https://www.instagram.com/zhudriven/">
            <img
              src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/insta-icon.png?raw=true"
              alt="Anthony-ig"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
