import React,{useState} from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";

function App() {
  const[cartIsVisible, setCartIsVisible]=useState(false);

  const showCartHandler=()=>{
    setCartIsVisible(true);
  }
  const hideCartHandler=()=>{
    setCartIsVisible(false);
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      {cartIsVisible && <Cart onHide={hideCartHandler}/>}
      <Header onShow={showCartHandler} />
     
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;
