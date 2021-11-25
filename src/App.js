import "./style/main.scss";
import Header from "./layout/Header";
import Filters from "./layout/Filters";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <Filters />
      </div>
    </div>
  );
}

export default App;
