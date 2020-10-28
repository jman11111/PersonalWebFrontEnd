import React, { Component } from "react";

/* <img
          src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
          className="img-thumbnail"
          alt=""
        ></img> */

class ThumbnailCard extends Component {
  state = {};

  handleSave = () => {
    // lets them go back to previous page
    this.props.history.push("/not-found");
    // .replace will not allow them to go back, useful for when someone has logged in, yuo dont want them going back to login page
  };

  render() {
    const { photoURL, name, description, date } = this.props;
    return (
      <div className="p-3 m-3 border border-secondary">
        <a href={photoURL}>
          <img
            src={photoURL}
            className="img-thumbnail"
            alt="https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
          ></img>
        </a>
        <p>{name}</p>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    );
  }
}

export default ThumbnailCard;
