import React from 'react';
import { Button, Divider } from '@mui/material';

import { SearchInput } from './';

function GetStart({ img, target, buttonText, buttonLink, buttonClick, paragraph, title, search }) {
  return (
    <section className="get-start">
      <div className="wrapper">
        <Divider />
        <div className="get-start__wrapper">
          <h2>{title}</h2>
          {paragraph && <p>{paragraph}</p>}
          <div className="get-start__btn">
            {img && <img src={img} alt="chrome_store_img" />}
            {buttonText && (
              <Button
                className="w100-btn"
                variant="contained"
                target={target && `_blank`}
                href={buttonLink}
                onClick={buttonClick}>
                {buttonText}
              </Button>
            )}
          </div>
          {search && <SearchInput />}
        </div>
       
      </div>
    </section>
  );
}

export default GetStart;
