import React from 'react'
import classes from './CounterClicker.module.css'

const CounterClicker = ({cards}) => {
  // const total = cards.length;
  const clicked = cards.filter(elem => elem.clicked).length

  return (
    <p className={classes.CounterClicker}>
      Количество попыток :
      <span> {clicked} </span>
    </p>
  )
}

export default CounterClicker
