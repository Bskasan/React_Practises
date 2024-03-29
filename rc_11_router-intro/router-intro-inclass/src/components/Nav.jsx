import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        {/* Better for styling */}
        <NavLink
          to="/contact"
          style={({ isActive }) => ({ color: isActive && "red" })}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
