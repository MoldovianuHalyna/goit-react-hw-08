import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectUserName } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import { Slide, toast } from "react-toastify";

const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      toast("Goodbye hope to see you again soon", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } catch (error) {
      console.log(error);
      toast("Something went wrong please try again", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  };
  return (
    <div className={s.authList}>
      <p className={s.userWelcome}>Welcome,{user.name} </p>
      <button type="button" onClick={handleLogout} className={s.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
