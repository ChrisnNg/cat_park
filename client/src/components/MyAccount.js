import React from "react";
import "./MyAccount.css";
import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <section id="MyAccount">
      <header>
        <Link className="btn btn-info" to="/">
          Home
        </Link>
      </header>
      <div id="container">
        <div id="header">
          <h1>My Account</h1>
          <center>
            <h3>Email:</h3>
            <h3>Karma:</h3>
          </center>
        </div>
        <form>
          <div id="form">
            <input
              type="password"
              placeholder="Current Password"
              id="passOne"
            />
            <input type="password" placeholder="New Password" id="passTwo" />
            <input
              type="password"
              placeholder="Confirm Password"
              id="passThree"
            />
            <input class="btn btn-info" type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MyAccount;
