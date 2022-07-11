import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';


function GetStart( { theme, img, buttonText, buttonLink } ) {
  return (
    <section className="get-start" id="Pricing">
    <div className="wrapper">
      <div className="get-start__wrapper">
        <div className="line"></div>
        <h2>Ready to get started?</h2>
        <div className="get-start__btn">
          {img && <img src={img} alt="chrome_store_img" />}
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              target="_blank"
              href={buttonLink}>
              {buttonText}
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GetStart;