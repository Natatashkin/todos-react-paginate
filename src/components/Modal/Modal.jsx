import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from 'components/IconButton';
import { Portal } from 'components/Portal';
// import { RiCloseFill } from 'react-icons/ri';
import { useStyles } from './Modal.styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const Modal = ({ children, open, onClose, onBackdropClose, onEscClose }) => {
  const styles = useStyles();
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
        <Dialog open={open} classes={{ paper: styles.paperPaddings }}>
          <DialogTitle onClose={onClose}>
            Write your task:
            {onClose && (
              <IconButton
                icon={<CloseIcon />}
                aria-label="close"
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: theme => theme.palette.grey[500],
                }}
              ></IconButton>
            )}
          </DialogTitle>
          {children}
        </Dialog>

        // <div className="dropbox" onClick={onBackdropClose}>
        //   <div className="lightbox">
        //     {children}
        //     <IconButton
        //       component="modal"
        //       type="button"
        //       icon={<CloseIcon />}
        //       tooltipText="Close"
        //       onClick={onClose}
        //     />
        //   </div>
        // </div>
      )}
    </Portal>
  );
};

export default Modal;
