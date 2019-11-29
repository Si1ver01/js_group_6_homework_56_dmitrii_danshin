import React from "react";
import Button from "../../Ui/Button/Button.jsx";
import classes from "../ListItem/ListItem.module.css";

const ListItem = ({ name, price, category, handler }) => {
  return (
    <tr className={classes.ListItem}>
      <td> {name}</td>
      <td>{price} KGS</td>
      <td>{category}</td>
      <td>
        <Button handler={handler}>Удалить</Button>
      </td>
    </tr>
  );
};

export default ListItem;
