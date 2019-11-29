import React from "react";
import classes from "./MoneyList.module.css";
import ListItem from "./ListItem/ListItem";

const MoneyList = ({ list, deleteItem }) => {
  return (
    <div className={classes.MoneyList}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {list.length ?
            list.map((item, index) =>
              <ListItem name={item.name} category={item.category} price={item.price} key={index} handler={() => deleteItem(index)} />
            ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default MoneyList;
