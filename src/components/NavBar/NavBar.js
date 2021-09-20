import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div>
        <NavLink
          to="/login"
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
        >
          Login
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "green",
          }}
        >
          Home
        </NavLink>
      </div>
    </div>
  );
}
