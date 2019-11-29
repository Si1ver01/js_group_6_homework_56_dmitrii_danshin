import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, handler , type = 'button'}) => {
  return (
    <div className={classes.Button} >
      <button onClick={handler} type={type}>{children}</button>
    </div>
  );
};

export default Button;
