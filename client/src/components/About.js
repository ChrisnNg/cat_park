import React from "react";
import "./About.css";
import "../../public/three_cats.png";

const chrispfp =
  "https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/chrispfp.jpg?raw=true";
const anthonypfp =
  "https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/anthonypfp.png?raw=true";
const thomaspfp =
  "https://github.com/ChrisnNg/cat_park/blob/features/about_us/client/public/thomaspfp.png?raw=true";
const three_cats =
  "https://github.com/ChrisnNg/cat_park/blob/master/client/public/three_cats.png?raw=true";

const AboutPage = () => {
  return (
    <section id="aboutUs">
      <header className="text-center">
        <img src={three_cats} alt="three_cats" />
        <h1 className="aboutUsTitle">About Us!</h1>
        <div>
          <p>
            {" "}
            Designed to help you find the closest free parking area available{" "}
          </p>
          <p>
            {" "}
            Uses a dataset from the Vancouver Police Department's crime API so
            you can gauge risk for where you park{" "}
          </p>
          <p>
            {" "}
            Created using Golang and ReactJS as part of a Lighthouse Labs final
            project{" "}
          </p>
          <p> Hosted on Heroku & Netlify </p>
        </div>
      </header>
      <div>
        <p className="text-center">
          Follow us on social media to get our latest updates!
        </p>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-sm">
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
          <div className="col-sm">
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
          <div className="col-sm">
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
