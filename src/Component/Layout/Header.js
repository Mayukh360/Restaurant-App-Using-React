import { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/delicious-pizza-food.jpg";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1>Spicy Kitchen</h1>
        <HeaderCartButton onShow={props.onShow} />
      </div>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt=" A delicious pizza" />
      </div>
    </Fragment>
  );
}
