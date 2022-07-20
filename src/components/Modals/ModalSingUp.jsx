import React from 'react';

import google_icon from '../../assets/img/google-icon.svg';

import { FormGroup, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';

function ModalSingUp() {
  return (
    <>
      <div className="line"></div>
      <Button variant="outlined" onClick={''}>
        <img src={google_icon} alt="google-icon" /> <p>Join with Google</p>
      </Button>
      <span>or</span>
      <form action="">
        <TextField id="outlined-basic-email" fullWidth label="E-mail" variant="outlined" />
        <TextField
          id="outlined-basic-pass"
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
        />
        <TextField
          id="outlined-basic-pass-conf"
          fullWidth
          label="Confirm password"
          type="password"
          variant="outlined"
        />
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
    </>
  );
}

export default ModalSingUp;
