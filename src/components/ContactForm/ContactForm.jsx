import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Slide } from "react-toastify";
import { FaRegThumbsUp } from "react-icons/fa";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contacts/operations";

const initialValues = {
  name: "",
  number: "",
};
const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters")
    .required("This field is Required "),
  number: Yup.string()
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters")
    .required("This field is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContactThunk(values));

    actions.resetForm();
    toast.success("Contact created successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      className: s.customToastAdd,
      icon: <FaRegThumbsUp />,
    });
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
        initialValues={initialValues}
      >
        <Form className={s.form}>
          <label className={s.formLabel}>
            <h3>Name</h3>
            <Field className={s.formInput} type="text" name="name"></Field>
            <ErrorMessage className={s.error} name="name" component="p" />
          </label>
          <label className={s.formLabel}>
            <h3>Phone number</h3>
            <Field className={s.formInput} type="text" name="number"></Field>
            <ErrorMessage className={s.error} name="number" component="p" />
          </label>
          <button className={s.buttonAddContact} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
