import React, { Component, Fragment } from "react";
import classes from "./Board.module.css";
import BoardCard from "./BoardCard/BoardCard.jsx";
import Button from "../Ui/Button/Button.jsx";
import CounterClicker from '../Ui/CounterClicker/CounterClicker.jsx'

class Board extends Component {
  state = {
    cards: [],
    gameStatus: false
  };

  gameGenerator = () => {
    const cards = [];
    const randomNumber = Math.floor(Math.random() * 36);
    for (let index = 0; index < 36; index++) {
      index === randomNumber
        ? cards.push({ status: true, clicked: false })
        : cards.push({ status: false, clicked: false });
    }
    console.log(cards);
    this.setState({ cards, gameStatus: true });
  };

  openCard = index => {
    const cards = [...this.state.cards];
    let gameStatus = true;
    cards[index].clicked = true;
    if (cards[index].status){
      gameStatus = false;
    }
    this.setState({ cards , gameStatus});
  };

  render() {
    const cards = this.state.cards;
    return (
      <Fragment>
        <div className={classes.Board}>
          {cards.length ?
            cards.map((elem, index) => (
              <BoardCard
                key={index}
                openCard={this.state.gameStatus ? () => this.openCard(index) : null}
                {...elem}
              />
            )): null}
        </div>
        <Button gameGenerator={this.gameGenerator}>Начать игру</Button>
        <CounterClicker cards={this.state.cards}/>
      </Fragment>
    );
  }
}

export default Board;
