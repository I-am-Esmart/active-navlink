import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div className="nav-items-">
        <ul className="nav-ul">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "activeLink" : "normalLink"
            }
          >
            <li className="nav-item"> Home </li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "activeLink" : "normalLink"
            }
          >
            <li className="nav-item"> About </li>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "activeLink" : "normalLink"
            }
          >
            <li className="nav-item"> Contact </li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
