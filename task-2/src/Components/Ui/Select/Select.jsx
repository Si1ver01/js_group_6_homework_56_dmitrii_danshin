import React from "react";
import classes from "./Select.module.css";

const Select = ({options, handler }) => {
  const htmlFor = `label-${Math.random()}`;

  return (
    <div className={classes.Select}>
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
