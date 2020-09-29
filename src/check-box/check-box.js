import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./check-box.css";
function CheckboxContainer() {
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
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Contrail+One&display=swap"
        rel="stylesheet"
      ></link>
      <header className="checkbox-header">Skillset</header>{" "}
      {/*className for .css refernce*/}
      <body className="checkbox-body">
        <p className="checkbox-list">
          React
          <Checkbox
            checked={checked}
            onChange={handleChange}
            color="default"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </p>
        <p className=" checkbox-list2">
          Javascript
          <Checkbox
            checked={checked2}
            onChange={handleChange2}
            color="default"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </p>
      </body>
    </> //all react apps need fragment like <> or <div>
  );
}

export default CheckboxContainer; //so others can get to it
