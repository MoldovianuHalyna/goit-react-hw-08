import { Field, Formik, Form } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";

import { Slide, toast } from "react-toastify";
import { registrationThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = async ({ name, email, password }, actions) => {
    try {
      await dispatch(registrationThunk({ name, email, password })).unwrap();
      toast("Registered with success", {
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <span className={s.label}>Name</span>
            <Field name="name" className={s.input} />
          </label>
          <label>
            <span className={s.label}>Email</span>
            <Field name="email" className={s.input} />
          </label>
          <label>
            <span className={s.label}>Password</span>
            <Field name="password" className={s.input} />
          </label>
          <button type="submit" className={s.button}>
            {" "}
            Register{" "}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
