import React from "react";
import Header from "./common/header";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { repeat_password: "", email: "", username: "", password: "" },
    errors: {},
  };
  //.label changes errors text name when it is triggered
  schema = {
    email: Joi.string().required().email().label("Email"),
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().alphanum().min(5).label("Password"),
    repeat_password: Joi.ref("password"),
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

  validateProperty = ({ name, value }) => {
    const { password } = this.state.data;
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    // this is here for custom error message
    if (name === "repeat_password") {
      if (password === value) {
        return null;
      }
      return "Passwords do not match";
    }
    return error && error.details[0].message;
  };

  render() {
    return (
      <div>
        <Header>Register</Header>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("repeat_password", "Repeat Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
