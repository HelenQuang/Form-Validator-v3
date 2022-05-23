import styles from "../UI/ErrorModal.module.css";
import Button from "./Button";
import ReactDOM from "react-dom";
import React from "react";

interface BackdropProps {
  closeModal: () => void;
  onConfirm: () => void;
}

interface ModalOverlayProps {
  title: string | null;
  message: string | null;
  closeModal: () => void;
  onConfirm: () => void;
}

const backdropRoot = document.getElementById("backdrop-root") as HTMLElement;
const overlayRoot = document.getElementById("overlay-root") as HTMLElement;

const Backdrop: React.FC<BackdropProps> = ({ closeModal }) => {
  return <div className={styles["backdrop"]} onClick={closeModal}></div>;
};

const ModalOverlay: React.FC<ModalOverlayProps> = ({
  title,
  message,
  closeModal,
}) => {
  return (
    <div className={styles["error-modal"]}>
      <header>
        <h2>Error message</h2>
      </header>
      <div>
        <p>
          {title} is invalid {message}. Please try again.
        </p>
      </div>
      <footer>
        <Button type="submit" onClick={closeModal}>
          Retry
        </Button>
      </footer>
    </div>
  );
};

const ErrorModal: React.FC<ModalOverlayProps> = ({
  closeModal,
  title,
  message,
}) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop onConfirm={closeModal} />, backdropRoot)}

      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={closeModal} />,
        overlayRoot
      )}
    </div>
  );
};

export default ErrorModal;
