import React from "react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = response => {
  console.log(response);
};

export default function App() {
  return (
    <GoogleLogin
      clientId="342680873162-7qs1furlsmst1gkjb681d892215mthdj.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
