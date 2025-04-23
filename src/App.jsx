import s from "./main.module.css";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations";
import { ToastContainer } from "react-toastify";
import Container from "./components/Container/Container";
import Loader from "./components/Loader/Loader";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

const ContactForm = lazy(() => import("./components/ContactForm/ContactForm"));
const SearchBox = lazy(() => import("./components/SearchBox/SearchBox"));
const ContactList = lazy(() => import("./components/ContactList/ContactList"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <h1 className={s.header}>Phone Book</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        <ToastContainer />
      </Suspense>
    </Container>
  );
}

export default App;
