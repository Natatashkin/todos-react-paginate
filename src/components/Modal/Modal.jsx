import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from 'components/IconButton';
import { useStyles } from './Modal.styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const Modal = ({ children, open, onClose, onBackdropClose, onEscClose }) => {
  const styles = useStyles();
  return (
    <>
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
      )}
    </>
  );
};

export default Modal;
