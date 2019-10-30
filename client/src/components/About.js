import React from "react";
import "./About.css";

let chrispfp =
  "https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/chrispfp.jpg?raw=true";
let anthonypfp =
  "https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/anthonypfp.png?raw=true";
let thomaspfp =
  "https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/thomaspfp.png?raw=true";
const AboutPage = () => {
  return (
    <section id="aboutUs">
      <header>
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
      <div>
        <p className="text-center">
          Follow us on social media to get our latest updates!
        </p>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            {" "}
            <div>
              <img className="pfp" src={chrispfp} alt="chris-pfp" />
            </div>
            <b>Christopher Ng</b>
            <div className="socialMediaIcons">
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
          </div>
          <div class="col-sm">
            {" "}
            <div>
              <img className="pfp" src={anthonypfp} alt="anthony-pfp" />
            </div>
            <b>Anthony Zhu</b>
            <div className="socialMediaIcons">
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
          <div class="col-sm">
            {" "}
            <div>
              <img className="pfp" src={thomaspfp} alt="thomas-pfp" />
            </div>
            <b>Thomas Bogdanov</b>
            <div className="socialMediaIcons">
              <a href="https://www.facebook.com/thomas.bogdanov">
                <img
                  src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/fb-icon.png?raw=true"
                  alt="Thomas-fb"
                />
              </a>
              <a href="https://www.linkedin.com/in/thomas-bogdanov-a98004147/">
                <img
                  src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/linked-icon.png?raw=true"
                  alt="Thomas-linkedin"
                />
              </a>
              <a href="https://www.instagram.com/bulletsafety/">
                <img
                  src="https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/insta-icon.png?raw=true"
                  alt="Thomas-ig"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
