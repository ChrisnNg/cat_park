import React from "react";
import "./Footer.css";

const FooterPage = () => {
  return (
    <footer>
      <div className="footer-limiter">
        <div className="footer-left">
          <p className="footer-links">CAT Park © 2019</p>
          <p>
            Designed to help you find the closest free parking area available.
            Uses a dataset from the Vancouver Police Department's crime API so
            you can gauge risk for where you park.
          </p>
          <br></br>
          <h5>
            <a href="#">About us</a>
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
