import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import Grid from "../Grid/Grid";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector((state) => state.contacts.isLoading);
  const isError = useSelector((state) => state.contacts.isError);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong. Please try again later.</h1>;
  }
  return (
    <ul className={s.contactList}>
      <Grid>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <Contact id={id} name={name} number={number} />
            </li>
          );
        })}
      </Grid>
    </ul>
  );
};

export default ContactList;
