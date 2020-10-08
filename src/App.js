import React from "react";
import profile_pic from "./images/thiccboi.png";
import "./App.css";
import { Button } from "@material-ui/core";
import CheckboxContainer from "./check-box/check-box";
import { dateTime } from "./date_time.js";

function App() {
  // console.log("Hello darkness");

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Contrail+One&display=swap"
        rel="stylesheet"
      ></link>

      <header className="App-header">
        <title>Portfolio</title>
        <nav className="navbar" role="navigation">
          <p className="date">{dateTime()}</p>
        </nav>
        <img src={profile_pic} className="App-logo" alt="logo" />
        <h1>Justin Nguyen</h1>
        <h1 className="bio">
          <h1>Welcome! </h1>
          <i>Software Developer. Creative. Dedicated. </i>
          <br></br>
        </h1>
      </header>

      {/* <a>
          <Document file="./Justin_Nguyen_Resume.pdf" />

          <Button color="primary">Go To Resume</Button>
        </a> */}

      <body className="lower">
        <CheckboxContainer />
        <a
          className="App-link"
          href="https://docs.google.com/document/d/1tLtpvGKv8mol9l5AIMz1L3wIG3j__41KW0nx0CdjSQw/edit?usp=sharing"
        >
          <Button class="btn btn-primary bt-lg">Go To Resume</Button>
        </a>
      </body>
    </div>
  );
}

export default App;
