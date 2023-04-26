import React,{useContext} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const cardCtx=useContext(CartContext);

  const numberOfcartItems= cardCtx.items.reduce((currNumber,item)=>{
    return currNumber+ item.amount;
  },0)
  return (
    <button onClick={props.onShow} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfcartItems}</span>
    </button>
  );
}
