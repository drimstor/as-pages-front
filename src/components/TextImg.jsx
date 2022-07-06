import React from 'react';

function TextImg({ img, img_mob, img_before, title, text, left }) {
  return (
    <>
      <div className="wrapper">
        <section className="text-img">
          <div className="text-img__title" style={left && { order: 2 }}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="text-img__image">
            {img_before && <img src={img_before} className="text-img__before" alt="img" />}
            <picture>
              <source media="(max-width: 1024px)" srcSet={img_mob} />
              <source media="(min-width: 1025px)" srcSet={img} />
              <img src={img} alt="img" />
            </picture>
          </div>
        </section>
      </div>
    </>
  );
}

export default TextImg;
