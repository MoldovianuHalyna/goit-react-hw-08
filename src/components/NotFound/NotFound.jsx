import { TbFaceIdError } from "react-icons/tb";
import s from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div>
      <h1 className={s.header}>Page not found</h1>
      <TbFaceIdError className={s.icon} />
    </div>
  );
};

export default NotFound;
