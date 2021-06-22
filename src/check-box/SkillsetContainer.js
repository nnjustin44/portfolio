import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./Skillset-Container.css";
import logo from "../images/logo192.png";
import javascript from "../images/javascript-logo.png";
import firebase from "../images/firebase-logo.png";
import csharp from "../images/csharp-logo.png";

function SkillsetContainer() {
  let [checked, setChecked] = React.useState(true);
  let handleChange = (event) => {
    setChecked(event.target.checked);
  };

  let [checked2, setChecked2] = React.useState(true);
  let handleChange2 = (event) => {
    setChecked2(event.target.checked);
    console.log(event);
    console.log(event.target);
  };

  let [checked3, setChecked3] = React.useState(true);
  let handleChange3 = (event) => {
    setChecked3(event.target.checked);
    console.log(event);
    console.log(event.target);
  };

  let [checked4, setChecked4] = React.useState(true);
  let handleChange4 = (event) => {
    setChecked4(event.target.checked);
    console.log(event);
    console.log(event.target);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Contrail+One&display=swap"
        rel="stylesheet"
      ></link>
      <header className="checkbox-header">Skillset</header>{" "}
      {/*className for .css refernce*/}
      <body className="checkbox-body">
        <div className="logo">
          <img src={logo} className="react-logo"></img>
          <br></br>
          <Checkbox
            className="check-box1"
            checked={checked}
            onChange={handleChange}
            color="default"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>

        <div className="logo2">
          <img src={javascript} className="javascript-logo"></img>
          <br></br>
          <Checkbox
            className="check-box2"
            checked={checked2}
            onChange={handleChange2}
            color="default"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>

        <div className="logo3">
          <img src={firebase} className="firebase-logo"></img>
          <br></br>
          <Checkbox
            className="check-box3"
            checked={checked3}
            onChange={handleChange3}
            color="default"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>

        <div className="logo4">
          <img src={csharp} className="csharp-logo"></img>
          <br></br>
          <Checkbox
            className="check-box4"
            checked={checked4}
            onChange={handleChange4}
            color="default"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </body>
    </> //all react apps need fragment like <> or <div>
  );
}

export default SkillsetContainer; 
