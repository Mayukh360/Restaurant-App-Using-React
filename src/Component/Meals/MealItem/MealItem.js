import React from 'react';
import classes from './MealItem.module.css'

export default function MealItem(props) {
    const price=` ${props.price}₹`
  return (
    <li  className={classes.meal}>
    <div>
        <h3>{props.title}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div>

    </div>
    </li>
  )
}
