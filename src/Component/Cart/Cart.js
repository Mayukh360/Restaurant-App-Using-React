import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart(props) {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Biriyani", amount: 2, price: 250 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>400₹</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHide} className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
