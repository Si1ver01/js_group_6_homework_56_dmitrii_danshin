import React from 'react'
import classes from './TotalMoney.module.css';

const TotalMoney = ({list}) => {
  const total = list.reduce((sum,item) => sum + Number(item.price),0)
  return (
    <div className={classes.TotalMoney}>
      <p>TotalMoney : {total} KGS </p>
    </div>
  )
}

export default TotalMoney
