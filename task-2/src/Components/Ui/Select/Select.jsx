import React from "react";
import classes from "./Select.module.css";

const Select = ({ label, options, handler }) => {
  const htmlFor = `label-${Math.random()}`;

  return (
    <div className={classes.Select}>
      {/* <label htmlFor={htmlFor}>{label}</label> */}
      <select id={htmlFor} onChange={handler}>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
