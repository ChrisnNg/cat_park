import React from "react";
import "./MyAccount.css";
import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <section id="MyAccount">
      <header>
        <h1 className="MyAccount text-center">My Account</h1>
        <Link className="btn btn-info" to="/">
          Home
        </Link>
      </header>
      <h2>Email</h2>
    </section>
  );
};

export default MyAccount;
