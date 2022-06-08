import './Modal.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ children, open, onClose }) => {
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
