import React from "react";

//pass in a Title
const Header = (props) => {
  return (
    <h1 className="p-3 bg-primary border border-primary border-top-0 border-left-0 border-right-0 text-center">
      {props.children}
    </h1>
  );
};

export default Header;
