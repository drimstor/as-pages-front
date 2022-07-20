import React from 'react';

function TextAndImg({ img, imgMob, imgBefore, title, text, text2, left, link, textLink, ul }) {
  return (
    <>
      <div className="wrapper">
        <section className={left ? 'text-img text-img--left' : 'text-img'}>
          <div className="text-img__title" style={left && { order: 2 }}>
            <h2>{title}</h2>
            <p>
              {text}
              {text2 && (
                <>
                  <br />
                  {text2}
                </>
              )}
            </p>
            {ul && (
              <ul>
                {ul.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {textLink && (
              <a href={link} target={link && `_blank`}>
                {textLink}
              </a>
            )}
          </div>
          <div className="text-img__image">
            {imgBefore && <img src={imgBefore} className="text-img__before" alt="img" />}
            <picture>
              <source media="(max-width: 1024px)" srcSet={imgMob} />
              <source media="(min-width: 1025px)" srcSet={img} />
              <img src={img} alt="img" />
            </picture>
          </div>
        </section>
      </div>
    </>
  );
}

export default TextAndImg;
