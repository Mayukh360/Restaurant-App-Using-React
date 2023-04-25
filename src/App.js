import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Header/>
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;
