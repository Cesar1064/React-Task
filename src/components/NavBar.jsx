import { Link } from "react-router-dom";
import "../assets/styles/NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/FirstTask">First Challenge</Link>
      <Link to="/SecondTask">Second Challenge</Link>
      <Link to="/ThirdTask">Third Challenge</Link>
    </nav>
  );
};
