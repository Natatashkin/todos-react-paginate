import './Modal.scss';
import { useEffect } from 'react';
import { Portal } from 'components/Portal';

const Modal = ({ children, open, onClose, onEscClose }) => {
  useEffect(() => {
    const onEscKeyPress = e => {
      const { key: EscEvent } = e;
      if (EscEvent === 'Escape') {
        onEscClose();
      }
    };
    document.addEventListener('keydown', onEscKeyPress);

    return () => document.removeEventListener('keydown', onEscKeyPress);
  }, [onEscClose, open]);

  return (
    <Portal>
      {open && (
        <div className="dropbox" onClick={onClose}>
          <div className="lightbox">{children}</div>
        </div>
      )}
    </Portal>
  );

  // return open
  //   ? createPortal(
  //       <div className="dropbox" onClick={onClose}>
  //         <div className="lightbox">{children}</div>
  //       </div>,
  //       modalRoot,
  //     )
  //   : null;
};

export default Modal;
