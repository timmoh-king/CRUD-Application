import React from "react";
import Forms from "./common/Forms";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

class SignIn extends Forms {
  state = {
    data: {
      username: " ",
      password: " ",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username").email(),
    password: Joi.string().required().label("Password").min(5),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="w-full grid h-screen place-items-center">
        <form
          onSubmit={this.handleSubmit}
          className="w-fit block px-[70px] py-[36px] rounded-[10px] outline-todogreen shadow-md shadow-tododarkfade ring-2 ring-todogreen"
        >
          <h1 className="text-tododark font-medium text-center pb-6 text-[26px]">
            SIGN IN
          </h1>
          <>
            <p className="font-normal text-md text-tododarkfade text-center pb-3">
              Enter your credentials to acces your account OR
              <Link to="/register" className="text-todoblue pl-3 underline">
                sign up
              </Link>
            </p>

            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password")}
            {this.renderButton("Login")}

            <p className="text-sm py-4 text-tododarkfade pb-3 text-center">
              Forgot password?
              <Link to="/" className="text-todoblue underline px-2">
                Reset password
              </Link>
            </p>
          </>
        </form>
      </div>
    );
  }
}

export default SignIn;
