import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const hasItem = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
    });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          price={item.price}
          amount={item.amount}
          name={item.name}
          key={item.id}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{totalAmount}₹</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHide} className={classes["button--alt"]}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
