import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <>
      {/* Lg Device */}
      <div className="navbar-Container">
        <div className="navbar-items">
          <div className="nav-items-left">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <p>home </p>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <p>about</p>
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <p>Service</p>
            </NavLink>
            <NavLink
              to="/industries"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <p>Industries</p>
            </NavLink>
          </div>
          <div className="nav-items-right">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-con active" : "nav-con"
              }
            >
              <p>Contact us</p>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Sm Device */}
      <div className="smNavbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <img src={assets.n1} alt="" />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <img src={assets.n2} alt="" />
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <img src={assets.n3} alt="" />
        </NavLink>
        <NavLink
          to="/industries"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <img src={assets.n4} alt="" />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <img src={assets.n5} alt="" />
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
