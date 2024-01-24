import { Link } from "react-router-dom";
import logo from "../../images/International_Pokémon_logo.svg.png";
import { Nav } from "./NavbarStyled";

export function Navbar() {
  return (
    <Nav>
      <img src={logo} alt="" />

      <Link to="/">
        <button>
          Back to Home
          <i className="bi bi-box-arrow-right"></i>
        </button>
      </Link>
    </Nav>
  );
}
