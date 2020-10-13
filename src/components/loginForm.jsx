import React from "react";
import Header from "./common/header";
import Joi from "joi-browser";
import Form from "./common/form";
import { Link } from "react-router-dom";

class LoginForm extends Form {
  //Use object for errors so you dont have to search through array for correct error to display
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  //.label changes errors text name when it is triggered
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  componentDidMount() {
    //this.username.current.focus()
  }

  doSubmit = () => {
    //Call server to submit login
    //redirect to logged in page
    const username = this.state.data.username;
    console.log(username, "Submitted");
  };

  render() {
    return (
      <div>
        <Header>Login</Header>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
        <p>No account? Register</p>
        <Link to="/register">Here</Link>
      </div>
    );
  }
}

export default LoginForm;
