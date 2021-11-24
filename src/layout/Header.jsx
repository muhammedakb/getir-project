import { useState } from "react";
import Basket from "../components/Basket";
import Logo from "../icons/logo.png";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [basket, setBasket] = useState(true);

  return (
    <header className="page-header">
      <div className="page-header-container">
        <img className="page-header-logo" src={Logo} alt="MARKET" />
        {basket && <Basket price={139.97} />}
      </div>
    </header>
  );
};

export default Header;
