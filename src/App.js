import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Cart/>
      <Header/>
     
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;
