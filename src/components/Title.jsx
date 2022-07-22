import React from 'react';
import { Button } from '@mui/material';

import { SearchInput } from './';

function Title({
  img,
  imgMob,
  cardImg,
  title,
  paragraph,
  ul,
  buttonLink,
  buttonText,
  buttonClick,
  target,
  search,
}) {
  return (
    <section className="title">
      <div className="wrapper">
        <div className="title__wrapper">
          <div className="title__text">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            {ul && (
              <ul>
                {ul.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {buttonText && (
              <>
                <Button
                  variant="contained"
                  onClick={buttonClick}
                  href={buttonLink}
                  target={target && `_blank`}>
                  {buttonText}
                </Button>
                <div></div>
                <span>
                  Don’t have an account? <a href="#top">Sign up for free</a>
                </span>
              </>
            )}
            {search && <SearchInput />}
          </div>
          <div className="title__img">
            <picture>
              <source media="(max-width: 1024px)" srcSet={imgMob} />
              <source media="(min-width: 1025px)" srcSet={img} />
              <img src={img} alt="sreen" />
            </picture>
            {cardImg && <img className="card-img--144" src={cardImg} alt="card" />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Title;
