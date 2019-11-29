import React, { Component } from "react";
import Header from "../../Components/Header/Header.jsx";
import MoneyList from '../../Components/MoneyList/MoneyList.jsx'
import classes from "./MoneyKeeper.module.css";
import TotalMoney from '../../Components/TotalMoney/TotalMoney.jsx';
import LinerDiagram from '../../Components/LinerDiagram/LinerDiagram.jsx';

function templateMoneyItem(cat='Entertaiment'){
  return {
    name: "",
    price: '',
    category: cat
  }
}

export default class MoneyKeeper extends Component {
  state = {
    moneyItem: templateMoneyItem(),
    moneyList: []
  };

  inputHandler = (event, name) => {
    const moneyItem = { ...this.state.moneyItem };
    moneyItem[name] = event.target.value;
    this.setState({ moneyItem });
  };

  addItem = event => {
    event.preventDefault();
    const moneyList = [...this.state.moneyList]
    moneyList.push(this.state.moneyItem);
    this.setState({
      moneyList,
      moneyItem : templateMoneyItem(this.state.moneyItem.category)
    })
  }

  deleteItem = index => {
    const moneyList = [...this.state.moneyList];
    moneyList.splice(index,1);
    this.setState({moneyList});
  }

  render() {
    return (
      <div className={classes.MoneyKeeper}>
        <Header
          moneyItem = {this.state.moneyItem}
          inputHandler={this.inputHandler}
          selectHandler={this.selectHandler}
          addItem = {(event) => this.addItem(event)}
        />
        <MoneyList list={this.state.moneyList} deleteItem={this.deleteItem}/>
        <TotalMoney list={this.state.moneyList}/>
        <LinerDiagram list={this.state.moneyList}/>
      </div>
    );
  }
}
