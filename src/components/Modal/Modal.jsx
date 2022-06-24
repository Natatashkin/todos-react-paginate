import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from 'components/IconButton';
import { Portal } from 'components/Portal';
import { useStyles } from './Modal.styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const Modal = ({ children, open, onClose, onBackdropClose, onEscClose }) => {
  const styles = useStyles();
  return (
    <Portal>
      {open && (
        <Dialog open={open} classes={{ paper: styles.paper }} onClose={onClose}>
          <DialogTitle classes={{ root: styles.dialogTitle }} onClose={onClose}>
            Write your task:
            {onClose && (
              <IconButton
                icon={<CloseIcon />}
                aria-label="close"
                onClick={onClose}
                parentCmponent="modal"
              />
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
