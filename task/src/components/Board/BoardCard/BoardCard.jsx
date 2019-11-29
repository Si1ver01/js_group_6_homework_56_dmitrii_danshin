import React from "react";
import classes from "./BoardCard.module.css";

const BoardCard = ({ status, clicked, openCard }) => {
  const cls = [classes.BoardCard];

  if (clicked) {
    cls.push(classes.clicked);
  }

  if (clicked && status) {
    cls.push(classes.circle);
  }

  return <div className={cls.join(" ")} onClick={openCard} />;
};

export default BoardCard;
