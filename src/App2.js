import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import NavBar from "./components/common/navbar";
import Home from "./components/home";
import LoginForm from "./components/loginForm";
import Sculptures from "./components/sculptures";
import RegisterForm from "./components/registerForm";

//go from most specific to least inside switch component

class App2 extends Component {
  state = {};
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <NavBar>
          <div>
            <Link className="p-4" to="/">
              Home
            </Link>
            <Link className="p-4" to="/sculptures">
              Sculptures
            </Link>
            <Link className="p-4" to="/login">
              Login
            </Link>
          </div>
        </NavBar>
        <div className="content">
          <Switch>
            <Route exact path="/login" component={() => <LoginForm />} />
            <Route
              exact
              path="/sculptures"
              render={(props) => <Sculptures {...props} />}
            />
            <Route
              exact
              path="/register"
              render={(props) => <RegisterForm {...props} />}
            />
            <Route path="/" exact component={Home} />
            <Route
              path="/not-found"
              component={() => <p>Unable to find Page</p>}
            />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App2;
