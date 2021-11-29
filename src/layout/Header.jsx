import Basket from "../components/Basket";
import Logo from "../icons/logo.png";

const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header-container">
        <img className="page-header-logo" src={Logo} alt="MARKET" />
        <Basket />
      </div>
    </header>
  );
};

export default Header;
