import React from "react";
import "./Button.css";
export const Button = (props) => {
  console.log(props);
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
