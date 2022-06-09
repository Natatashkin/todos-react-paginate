import './Modal.scss';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ children, open, onClose }) => {
  // useEffect(() => {

  //   document.addEventListener('keydown', onEscKeyPress);

  //   return () => document.removeEventListener('keydown', onEscKeyPress);
  // }, []);

  return open
    ? createPortal(
        <div className="dropbox" onClick={onClose}>
          <div className="lightbox">{children}</div>
        </div>,
        modalRoot,
      )
    : null;
};

export default Modal;
