import React from 'react';
import { Button } from '@mui/material';

function GetStart({ img, target, buttonText, buttonLink, buttonClick }) {
  return (
    <section className="get-start" id="Pricing">
      <div className="wrapper">
        <div className="get-start__wrapper">
          <div className="line"></div>
          <h2>Ready to get started?</h2>
          <div className="get-start__btn">
            {img && <img src={img} alt="chrome_store_img" />}
              <Button className="w100-btn" variant="contained" target={target && `_blank`} href={buttonLink} onClick={buttonClick}>
                {buttonText}
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStart;
