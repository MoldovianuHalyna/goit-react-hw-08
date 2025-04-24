import s from "./main.module.css";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations";
import { ToastContainer } from "react-toastify";

import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer />
      </Suspense>
    </Layout>
  );
}

export default App;
