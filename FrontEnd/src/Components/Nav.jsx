import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import logo from "../assets/BookStoreLogo.png";

export default function Nav() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Bookstore Logo" className="logo" />
      </div>

      <ul className="nav-links">
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>

      {/* Auth buttons */}
      <div className="auth-buttons">
        {user ? (
          <>
            <span>
              {user.email} {user.isAdmin && "(Admin)"}
            </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
        )}
      </div>
    </nav>
  );
}
