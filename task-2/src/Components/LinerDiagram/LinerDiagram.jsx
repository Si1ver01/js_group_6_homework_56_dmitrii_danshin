import React, { Fragment } from "react";
import classes from "./LinerDiagram.module.css";
import DiagramItem from "./DiagramItem/DiagramItem.jsx";
import LinerDiagramItem from "./LinerDiagramItem/LinerDiagramItem.jsx";

const CATEGORY = [
  {
    name: "Entertaiment",
    color: "#00e676"
  },
  {
    name: "Car",
    color: "#ff5252"
  },
  {
    name: "Food",
    color: "#0d47a1"
  }
];

const LinerDiagram = ({ list }) => {
  const totalItems = list.reduce((sum,elem) => sum + Number(elem.price),0);

  return (
    <Fragment>
      <div className={classes.LinerDiagram}>
        <div className={classes.Diagram}>
          {CATEGORY.map((elem, index) => (
            <LinerDiagramItem
              name={elem.name}
              color={elem.color}
              total={totalItems}
              list={list}
              key={index}
            />
          ))}
        </div>
        <div className={classes.DiagramItems}>
          {CATEGORY.map((elem, index) => (
            <DiagramItem category={elem.name} color={elem.color} key={index} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LinerDiagram;
