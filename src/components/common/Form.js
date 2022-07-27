import React from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import Select from "./Select";

const Form = (props) => {
  const { label, signIn, signUp, todoform } = props;
  return (
    <div className="w-full grid h-screen place-items-center">
      <form className="w-fit block px-[70px] py-[36px] rounded-[10px] outline-todogreen shadow-md shadow-tododarkfade ring-2 ring-todogreen">
        <h1 className="text-tododark font-medium text-center pb-6 text-[26px]">
          {label}
        </h1>
        {signIn && (
          <>
            <p className="font-normal text-md text-tododarkfade text-center pb-3">
              Enter your credentials to acces your account OR
              <Link to="/" className="text-todoblue pl-3 underline">
                sign up
              </Link>
            </p>
            <Input
              label="Email"
              placeholder="Enter your email"
              name="username"
              type="text"
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              name="Password"
              type="text"
            />
            <Button page={true} label="sign in" />
            <p className="text-sm py-4 text-tododarkfade pb-3 text-center">
              Forgot password?
              <Link to="/" className="text-todoblue underline px-2">
                Reset password
              </Link>
            </p>
          </>
        )}
        {signUp && (
          <>
            <Input
              label="Email"
              placeholder="Enter your email"
              name="username"
              type="text"
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              name="password"
              type="text"
            />
            <Input
              label="Confirm Password"
              placeholder="Confirm your password"
              name="password"
              type="text"
            />
            <Button page={true} label="sign up" />
            <p className="text-sm py-4 text-tododarkfade pb-3 text-center">
              Already have account?
              <Link to="/" className="text-todoblue underline px-2">
                sign in
              </Link>
            </p>
          </>
        )}
        {todoform && (
          <>
            <Input label="Todo" placeholder="add a todo" name="" type="" />
            <Select
              placeholder="/"
              type="/"
              name={"/"}
              label={"Category"}
              options={"/"}
            />
            <Button page label="save" />
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
