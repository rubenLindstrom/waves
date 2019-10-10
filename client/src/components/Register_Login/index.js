import React from "react";
import Button from "../utils/button";
import Login from "./login";

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              nam laborum delectus ut vel corrupti? Labore ipsam eaque, adipisci
              cumque dicta laboriosam laborum quaerat nobis, voluptatum iure
              sunt obcaecati placeat.
            </p>
            <Button
              type="default"
              linkTo="/register"
              addStyles={{
                margin: "10px 0 0 0"
              }}
            >
              Create an account
            </Button>
          </div>
          <div className="right">
            <h2>Already have an account?</h2>
            <p>If you already have an account, you can log in here</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
