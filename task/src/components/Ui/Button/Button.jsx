import React from 'react'
import classes from './Button.module.css'

const Button = props => {
  return (
    <div className={classes.Button} onClick={props.gameGenerator}>
      {props.children}
    </div>
  )
}

export default Button
