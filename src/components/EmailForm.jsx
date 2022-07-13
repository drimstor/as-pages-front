import React from 'react';
import { Checkbox, FormGroup, FormControlLabel, Button } from '@mui/material';

function EmailForm({ buttonText, buttonLink, buttonClick, title, paragraph, label, target }) {
  return (
    <section className="email-form">
      <div className="wrapper">
        <div className="email-form__wrapper">
          <h2>{title}</h2>
          <p>{paragraph}</p>
          <form action="">
            <input type="text" placeholder="Your Email" />
            <FormGroup>
              <FormControlLabel
                color="secondary"
                control={<Checkbox defaultChecked />}
                label={label}
              />
              <Button variant="contained" target={target && `_blank`} href={buttonLink} onClick={buttonClick}>
                {buttonText}
              </Button>
            </FormGroup>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EmailForm;
