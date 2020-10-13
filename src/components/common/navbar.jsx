import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark p-3">
        {this.props.children}
      </nav>
    );
  }
}

export default NavBar;
