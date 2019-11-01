import React from "react";
import "./MyAccountEdit.css";

const thumpsUp = "client/public/thumbs-up.png";

const MyAccountEdit = props => {
  return (
    <section>
      <form className="editAccount">
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Current Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="currentPassword"
              placeholder="Current Password"
            />
          </div>
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            New Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="New Password"
            />
          </div>
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default MyAccountEdit;
