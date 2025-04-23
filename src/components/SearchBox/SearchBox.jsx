import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";

import { selectFilter } from "../../redux/contacts/selectors";
import { changeFiter } from "../../redux/filters/slice";

const SearchBox = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.searchContainer}>
      <h3 className={s.searchTitle}>Find contacts by name</h3>
      <input
        className={s.searchInput}
        value={value}
        onChange={(e) => dispatch(changeFiter(e.target.value))}
        placeholder="Enter contact name"
      />
    </div>
  );
};

export default SearchBox;
