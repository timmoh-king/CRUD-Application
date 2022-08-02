import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import Select from "./Select";
import { getTodo, saveTodo} from "../../services/FakeTodos";

class Form extends Component {
  state = {
    account: {
      username: " ",
      password: " ",
    },
  };


  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  doSubmit = () => {
    saveTodo(this.state.data);

    this.state.history.push("/home")
  }

  render() {
    const { label, signIn, signUp, todoform } = this.props;
    const { account } = this.state;

    return (
      <div className="w-full grid h-screen place-items-center">
        <form
          onSubmit={this.handleSubmit}
          className="w-fit block px-[70px] py-[36px] rounded-[10px] outline-todogreen shadow-md shadow-tododarkfade ring-2 ring-todogreen"
        >
          <h1 className="text-tododark font-medium text-center pb-6 text-[26px]">
            {label}
          </h1>
          {signIn && (
            <>
              <p className="font-normal text-md text-tododarkfade text-center pb-3">
                Enter your credentials to acces your account OR
                <Link to="/signup" className="text-todoblue pl-3 underline">
                  sign up
                </Link>
              </p>
              <Input
                label="Email"
                placeholder="Enter your email"
                name="username"
                type="text"
                id="username"
                onChange={this.handleChange}
                value={account.username}
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                name="password"
                type="text"
                id="password"
                onChange={this.handleChange}
                value={account.password}
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
                id="username"
                onChange={this.handleChange}
                value={account.username}
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                name="password"
                type="text"
                id="password"
                onChange={this.handleChange}
                value={account.password}
              />
              <Input
                onChange={this.handleChange}
                label="Confirm Password"
                placeholder="Confirm your password"
                name="password"
                type="text"
                id="password"
                value={account.password}
              />
              <Button page={true} label="sign up" />
              <p className="text-sm py-4 text-tododarkfade pb-3 text-center">
                Already have account?
                <Link to="/signin" className="text-todoblue underline px-2">
                  sign in
                </Link>
              </p>
            </>
          )}
          {todoform && (
            <>
              <Input label="Todo" placeholder="add a todo" name="todo" type="text" />
              <Select
                name={"name"}
                value={"data[name]"}
                label="Category"
                onChange={this.handleChange}
                options=""
              />
              <Button page label="save" onClick={this.addTodo} />
            </>
          )}
        </form>
      </div>
    );
  }
}

export default Form;
