import React from "react";
import classes from "./Input.module.css";

const Input = ({ type, label,size,handler,value }) => {
  const htmlFor = `label-${Math.random()}`;
  const cls = [
    classes.Input,
    size==='small' ? classes.small : classes.big
  ]

  return (
    <div className={cls.join(' ')} >
      <input type={type} id={htmlFor} placeholder={label} value={value} onChange={handler} required/>
    </div>
  );
};

export default Input;
