import React from 'react';

import { Close } from '@mui/icons-material';
import google_icon from '../assets/img/google-icon.svg';

import {
  FormGroup,
  Button,
  Checkbox,
  Box,
  Backdrop,
  Fade,
  Modal,
  FormControlLabel,
  IconButton,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
};

function ModalSingUp({ isOpen, closeModal }) {
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
                <h3>Sing up for free</h3>
                <IconButton onClick={closeModal}>
                  <Close />
                </IconButton>
              </div>
              <div className="line"></div>
              <Button variant="outlined" onClick={''}>
                <img src={google_icon} alt="google-icon" /> <p>Join with Google</p>
              </Button>
              <span>or</span>
              <form action="">
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm password" />
                <FormGroup>
                  <FormControlLabel
                    color="secondary"
                    control={<Checkbox defaultChecked />}
                    label={'Send me product updates and premium offers'}
                  />
                  <Button variant="contained">Creacte account</Button>
                </FormGroup>
              </form>
              <p>
                By joining you agree to <b>Terms and Conditions</b> and <b>Privacy Policy</b>.
              </p>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalSingUp;
