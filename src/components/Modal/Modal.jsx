import { useEffect } from 'react';
import { IconButton } from 'components/IconButton';
import { Portal } from 'components/Portal';
import { RiCloseFill } from 'react-icons/ri';

const Modal = ({ children, open, onClose, onBackdropClose, onEscClose }) => {
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
        <div className="dropbox" onClick={onBackdropClose}>
          <div className="lightbox">
            {children}
            <IconButton
              component="modal"
              type="button"
              icon={<RiCloseFill />}
              tooltipText="Close"
              onClick={onClose}
            />
          </div>
        </div>
      )}
    </Portal>
  );
};

export default Modal;
