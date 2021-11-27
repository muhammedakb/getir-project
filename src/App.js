import "./style/main.scss";
import Header from "./layout/Header";
import Filters from "./layout/Filters";
import Products from "./layout/Products";
import BasketDetail from "./components/BasketDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <Filters />
        <Products />
        <BasketDetail />
      </div>
    </div>
  );
}

export default App;
