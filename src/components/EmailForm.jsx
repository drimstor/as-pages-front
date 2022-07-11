import React from 'react';
import { Checkbox, FormGroup, FormControlLabel, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

function EmailForm({ theme, buttonText, buttonLink, title, paragraph, label }) {
  return (
    <section className="email-form">
      <div className="wrapper">
        <div className="email-form__wrapper">
          <h2>{title}</h2>
          <p>{paragraph}</p>
          <form action="">
            <input type="text" placeholder="Your Email" />
            <FormGroup>
              <ThemeProvider theme={theme}>
                <FormControlLabel
                  color="secondary"
                  control={<Checkbox defaultChecked />}
                  label={label}
                />
                <Button variant="contained" target="_blank" href={buttonLink}>
                  {buttonText}
                </Button>
              </ThemeProvider>
            </FormGroup>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EmailForm;
