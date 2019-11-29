import React from "react";
import Input from "../../Components/Ui/Input/Input.jsx";
import Select from "../../Components/Ui/Select/Select.jsx";
import Button from "../../Components/Ui/Button/Button.jsx";
import classes from "./Header.module.css";

const CATEGORY = ["Entertaiment", "Car", "Food"];


const Header = props => {
  return (
    <div className={classes.Header}>
      <form onSubmit={props.addItem}>
      <Input
        label="Item name:"
        type="text"
        size="big"
        handler={event => props.inputHandler(event, "name")}
        value={props.moneyItem.name}
      />
      <Input
        label="Price:"
        type="number"
        size="small"
        handler={event => props.inputHandler(event, "price")}
        value={props.moneyItem.price}
      />
      <Select
        options={CATEGORY}
        handler={event => props.inputHandler(event,'category')}
      />
      <Button type='submit'>Save</Button>

      </form>

    </div>
  );
};

export default Header;
