import s from "./Homepage.module.css";
import { HiOutlinePhone } from "react-icons/hi";
const Homepage = () => {
  return (
    <div className={s.homepage}>
      <HiOutlinePhone className={s.icon} />
      <h1 className={s.header}>Welcome to your Phone Book application</h1>
    </div>
  );
};

export default Homepage;
