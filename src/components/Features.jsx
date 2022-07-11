import React from 'react';

function Features({
  title,
  icon1,
  icon2,
  icon3,
  text1,
  text2,
  text3,
  title1,
  title2,
  title3,
  img1,
  img2,
  img3,
  link1,
  link2,
  link3,
  subLink,
  subLinkText,
}) {
  return (
    <>
      <div id="Features"></div>
      <section className="features">
        <div className="wrapper">
          {title && <h2 className="features__title">{title}</h2>}
          <div className="features__wrapper">
            <div className="features__item">
              {icon1 ? icon1 : <img src={img1} alt="stock-img" />}
              <h3>{title1}</h3>
              <p>{text1}</p>
              {link1 && <a href={link1}>Learn more</a>}
            </div>
            <div className="features__item">
              {icon2 ? icon2 : <img src={img2} alt="stock-img" />}
              <h3>{title2}</h3>
              <p>{text2}</p>
              {link2 && <a href={link2}>Learn more</a>}
            </div>
            <div className="features__item">
              {icon3 ? icon3 : <img src={img3} alt="stock-img" />}
              <h3>{title3}</h3>
              <p>{text3}</p>
              {link3 && <a href={link3}>Learn more</a>}
            </div>
          </div>
          {subLink && (
            <div className="features__sublink">
              <a href={subLink}>{subLinkText}</a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Features;
