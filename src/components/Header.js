import NavLinks from "./NavLinks";
import logo from "../images/E-logo.png"

const Header = () => {
  return (
    <header className="header">
      <img className="logo" width={"60px"} src={logo} alt="Hammad's Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
