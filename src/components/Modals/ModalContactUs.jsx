import React from 'react';

import { Button, TextField } from '@mui/material';

function ModalContactUs() {
  return (
    <>
      <div className="modal__contact-us">
        <div className="line"></div>
        <p>Get your custom Enterprise Plan</p>
        <form action="">
          <div className="modal__form-wrapper">
            <TextField
              id="outlined-basic"
              fullWidth
              label="Company Name"
              required
              placeholder="e.g. Example Corp"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Company Size"
              placeholder="Select employee count"
              required
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-basic"
              fullWidth
              label="First name"
              variant="outlined"
              placeholder="Enter your first name"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-basic"
              placeholder="Enter your last name"
              required
              fullWidth
              label="Last name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="outlined-basic"
              placeholder="Corporate e-mail"
              required
              fullWidth
              label="Email"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="outlined-basic"
              placeholder="Corporate Phone Number"
              required
              fullWidth
              type="number"
              inputmode="numeric"
              pattern="[0-9]*"
              label="Phone Number"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="modal__form-wrapper-sub">
            <TextField
              id="standard-multiline-static"
              label="Describe you company"
              multiline
              fullWidth
              rows={4}
              placeholder="Please describe you company and project details so our team can calculate an individual quote for your Plan"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <Button variant="contained">Submit Request</Button>
        </form>
      </div>
    </>
  );
}

export default ModalContactUs;
