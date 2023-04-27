import React,{useContext,useRef} from "react";
import CartContext from "../../../store/cart-context";

import classes from './MealItemForm.module.css'
import Input from "../../UI/Input";

export default function MealItemForm(props) {
  const cartCtx=useContext(CartContext);
  const amountInputRef = useRef();

  const addItemHandler = () => {
    const enteredAmount = amountInputRef.current.value;
    cartCtx.addItem({
      // id:Math.random(),
      id:props.id,
      name: props.name,
      amount: Number(enteredAmount),
      price: props.price,
    });
    console.log(props.id);
    console.log(props.name);
    console.log(props.price);
    console.log(props.description);
    console.log(enteredAmount);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={amountInputRef}
      />
      <button onClick={addItemHandler}>+ Add</button>
    </form>
  );
}

