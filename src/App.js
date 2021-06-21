import React from "react";
import profile_pic from "./images/profile_pic.png";
import "./App.css";
import { Button } from "@material-ui/core";
import SkillsetContainer from "./check-box/SkillsetContainer";
import { dateTime } from "./date_time.js";
import { getQuote } from "./api/quote_api.js";
import { getWeather } from "./api/weather_api.js";
import Weather from "./weather/Weather.js";

function App() {
console.log(getWeather())
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
            {/* <p className="date">{getQuote()}</p> */}
            {/* TODO write func to call getWeather then update state once api call has returned */}
            {/* effect */}
            <p className="date">{getWeather()}</p>  
            
          </nav>
          <img src={profile_pic} className="App-logo" alt="logo" />
          <h1>Justin Nguyen</h1>
          <h1 className="bio">
            <h1>Software Developer </h1>
            <i>Honest. Creative. Dedicated. </i>
            <br></br>
        </h1>
        <div className="headerOverlay">
          <div className="headerOverlayText">
            <p>In the pursuit of excellence,</p>
            <p>driven for self growth in</p>
            <p>software development</p>
          </div>
        </div>
      </header>


      <body className="lower">
        <SkillsetContainer />
        <p>
          <a
            className="resumelink"
            href="https://docs.google.com/document/d/1tLtpvGKv8mol9l5AIMz1L3wIG3j__41KW0nx0CdjSQw/edit?usp=sharing"
          >
            <Button class="btn btn-primary bt-lg">Go To Resume</Button>
          </a>
        </p>

        <p>
          <a
            className="codelink"
            href="https://github.com/nnjustin44/portfolio"
          >
            <Button class="btn btn-primary bt-lg">View Website Code</Button>
          </a>
        </p>
      </body>
    </div>
  );
}

export default App;
