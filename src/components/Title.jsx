import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

function Title({ theme, img, imgMob, cardImg, title, paragraph, ul, buttonLink, buttonText }) {
  return (
    <section className="title" id="top">
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
            <ThemeProvider theme={theme}>
              <Button variant="contained" target="_blank" href={buttonLink}>
                {buttonText}
              </Button>
            </ThemeProvider>
            <div className="title__featured">
              <span className="material-symbols-outlined">workspace_premium</span>
              <p>Featured</p>
            </div>
            <span>
              Don’t have an account? <a href="#">Sign up for free</a>
            </span>
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
