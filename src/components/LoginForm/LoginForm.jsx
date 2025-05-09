import { Field, Formik, Form } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";

import { Slide, toast } from "react-toastify";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(loginThunk(values)).unwrap();
      toast("Logged in successfully", {
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
      toast("Check email and password and try again", {
        position: "top-center",
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
    actions.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <h1 className={s.header}>Already have an account? Please log in</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <span className={s.label}>Email</span>
            <Field name="email" className={s.input} />
          </label>
          <label>
            <span className={s.label}>Password</span>
            <Field name="password" className={s.input} />
          </label>
          <button type="submit" className={s.button}>
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
