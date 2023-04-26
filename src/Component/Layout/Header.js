import { Fragment } from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShow={props.onShow} onHide={props.onHide}/>
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt=" A delicious pizza" />
      </div>
    </Fragment>
  );
}
