import './Modal.scss';
import { useEffect } from 'react';
import IconButton from 'components/IconButton';
import { Portal } from 'components/Portal';
import { RiCloseLine } from 'react-icons/ri';
import classNames from 'classnames';

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
          <div className="lightbox">
            {children}
            <IconButton
              className={classNames(['icon-button', 'icon-button--circle'])}
              type="button"
              icon={<RiCloseLine fill="black" size="18" />}
            />
          </div>
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
