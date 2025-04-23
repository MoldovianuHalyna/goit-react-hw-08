import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";

const tata = false; //change on userLoggedIn

const AppBar = () => {
  return (
    <div className={s.header}>
      <Navigation />
      {tata ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
