import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { Slide, toast } from "react-toastify";
import { MdDeleteOutline } from "react-icons/md";
import { deleteContactThunk } from "../../redux/contacts/operations";
import ModalImage from "../Modal/Modal";
import { useState } from "react";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const confirmDelete = () => {
    dispatch(deleteContactThunk(id));
    toast.success("Contact deleted successfully", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: s.customToastDelete,
      theme: "light",
      transition: Slide,
      icon: <MdDeleteOutline />,
    });
    closeModal();
  };
  return (
    <>
      <div className={s.contactItem}>
        <p className={s.contactItemText}>
          <FaUser />
          {name}
        </p>
        <p className={s.contactItemText}>
          <FaPhoneAlt />
          {number}
        </p>
        <button
          className={s.buttonDeleteContact}
          onClick={openModal}
          type="button"
        >
          Delete
        </button>
      </div>
      <ModalImage
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        onConfirm={confirmDelete}
        picture={null}
      />
    </>
  );
};

export default Contact;
