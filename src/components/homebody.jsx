import React from "react";

const Homebody = () => {
  return (
    <div>
      <h2 className="m-5 text-center">About Me</h2>
      <p className="text-center">
        My name is Jack Broncato (Legal name Jacob), and this is my website I am
        using to practice React.js/Node.js.
      </p>
      <p className="text-center">
        I got into Computer Science because I like building things, so this is
        more of a fun project than a professional website.
      </p>
      <h2 className="m-5 text-center">Relevant Links</h2>
      <p className="text-center">
        Github: <a href="https://github.com/jman11111">jman11111</a>
      </p>
      <p className="text-center">
        LinkedIn: <a href="https://github.com/jman11111">Jack Broncato</a>
      </p>
      <h2 className="m-5 text-center">About the Website</h2>
      <p className="text-center">
        The tech stack for this website is React.js frontend, Node.js backend,
        and MongoDB/Mongoose for database functionality, hosted on Heroku and DB
        on Mlab. Source code for backend{" "}
        <a href="https://github.com/jman11111/NodeBackend">here</a> and for
        frontend{" "}
        <a href="https://github.com/jman11111/PersonalWebFrontEnd/tree/V1.0">
          here
        </a>
      </p>
    </div>
  );
};

export default Homebody;
