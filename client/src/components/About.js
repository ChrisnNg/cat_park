import React from "react";
import "./About.css";
import FlexView from "react-flexview";

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
      <FlexView hAlignContent="center">
        <p>Follow us on social media to get our latest updates!</p>
      </FlexView>
      <FlexView className="leftName" hAlignContent="left">
        <span>
          <b>Christopher Ng</b>
        </span>
      </FlexView>
      <FlexView className="centerName" hAlignContent="center">
        <span>
          <b>Anthony Zhu</b>
        </span>
      </FlexView>
      <FlexView className="rightName" hAlignContent="right">
        <span>
          <b>Thomas Bogdanov</b>
        </span>
      </FlexView>
      <FlexView
        className="socialMediaIcons leftMedia"
        vAlignContent="center"
        hAlignContent="left"
      >
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
      </FlexView>

      <FlexView
        className="socialMediaIcons centerMedia"
        vAlignContent="center"
        hAlignContent="center"
      >
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
      </FlexView>
      <FlexView
        className="socialMediaIcons rightMedia"
        vAlignContent="center"
        hAlignContent="right"
      >
        <a href="">
          <img
            src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/fb-icon.png?raw=true"
            alt="Thomas-fb"
          />
        </a>
        <a href="https://www.linkedin.com/in/anthony-zhu-3abb9b183/">
          <img
            src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/linked-icon.png?raw=true"
            alt="Thomas-linkedin"
          />
        </a>
        <a href="https://www.instagram.com/zhudriven/">
          <img
            src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/insta-icon.png?raw=true"
            alt="Thomas-ig"
          />
        </a>
      </FlexView>
    </section>
  );
};

export default AboutPage;
