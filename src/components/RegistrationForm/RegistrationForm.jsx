import { Field, Formik, Form } from "formik";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
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
