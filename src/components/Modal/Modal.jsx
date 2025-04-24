import Modal from "react-modal";
import s from "./Modal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ModalImage = ({ modalIsOpen, closeModal, onConfirm }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Picture modal"
    >
      <div className={s.buttonWrapper}>
        <p className={s.p}>Confirm deletion?</p>
        <div className={s.buttonContainer}>
          <button onClick={onConfirm} className={s.deleteBtn}>
            Yes
          </button>
          <button onClick={closeModal} className={s.deleteBtn}>
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalImage;
