import "./header.css";
import logo from "../../assets/LOGO (1).png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  <div>
    <img src={logo} alt="logo" />
  </div>;
  return (
    <div className="header">
      <div className="navbar">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
