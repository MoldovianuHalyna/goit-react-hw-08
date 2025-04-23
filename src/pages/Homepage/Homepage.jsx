import s from "./Homepage.module.css";
import { IoBookOutline } from "react-icons/io5";
const Homepage = () => {
  return (
    <div className={s.homepage}>
      <h1 className={s.header}>Welcome to your Phone Book application</h1>

      <IoBookOutline className={s.icon} />
    </div>
  );
};

export default Homepage;
