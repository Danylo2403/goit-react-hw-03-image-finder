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

export const Modal = ({ imageUrl, isModalOpen, closeModal }) => {
  return (
    <ModalWindow
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img src={imageUrl} alt="This is result of your search" />
    </ModalWindow>
  );
};