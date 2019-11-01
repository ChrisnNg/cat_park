import React from "react";
import "./Footer.css";

const FooterPage = () => {
  return (
    <footer>
      <div className="footer">
        <h3>CAT Park © 2019</h3>
        <p>
          Designed to help you find the closest free parking area available.
          Uses a dataset from the Vancouver Police Department's crime API so you
          can gauge risk for where you park.
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
