import Logo from "../images/logo2.jpg";
import { NavLink } from "react-router-dom";

const FrontNavbar = () => {
  return (
    <header>
      <section>
        <img src={Logo} alt="logo" />
      </section>
      <nav>
        <NavLink to="/">Resources</NavLink>
      </nav>
    </header>
  );
};

export default FrontNavbar;
