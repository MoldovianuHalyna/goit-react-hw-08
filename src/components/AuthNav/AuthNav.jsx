import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
const AuthNav = () => {
  return (
    <ul className={s.authList}>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
