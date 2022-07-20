import React from 'react';

import { Box, Backdrop, Fade, Modal, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
};

function ModalGlobal({ isOpen, closeModal, content, title }) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={closeModal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={isOpen}>
          <Box sx={style}>
            <div className="modal">
              <div className="modal__title">
                <h3>{title}</h3>
                <IconButton onClick={closeModal}>
                  <Close />
                </IconButton>
              </div>
              {content}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalGlobal;
