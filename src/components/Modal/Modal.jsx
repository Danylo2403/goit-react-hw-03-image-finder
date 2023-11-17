import React from 'react';
import ReactModal from 'react-modal';
import { ModalWindow } from './Modal.styled';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },

  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    maxWidth: `calc(60vw)`,
    maxHeight: `calc(80vh)`,
  },
};

ReactModal.setAppElement('#root');

const Modal = ({ imageUrl, isModalOpen, closeModal }) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <ModalWindow>
        <img src={imageUrl} alt="This is the result of your search" />
      </ModalWindow>
    </ReactModal>
  );
};

export default Modal;
