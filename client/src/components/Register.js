import React from "react";
import "./Register.css";

const Register = props => {
  return (
    <section>
      <form className="Register">
        <div className="form-group row">
          <label htmlFor="Name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Name"
            />
          </div>

          <label htmlFor="Userame" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="Username"
              placeholder="Username"
            />
          </div>

          <label htmlFor="Password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
            />
          </div>
          <label
            htmlFor="newPasswordConfirm"
            className="col-sm-2 col-form-label"
          >
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="newPasswordConfirm"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Register;
