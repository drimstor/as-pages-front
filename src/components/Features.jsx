import React from 'react';

function Features({ title, subLink, subLinkText, obj }) {
  return (
    <>
      <section className="features">
        <div className="wrapper">
          {title && <h2 className="features__title">{title}</h2>}
          <div className="features__wrapper">
            {obj.map((item, index) => (
              <div className="features__item" key={`${item}_${index}`}>
                {item.icon ? (
                  item.icon
                ) : (
                  <img src={Object.values(item.img)} key={`${item.img}_${index}`} alt="stock-img" />
                )}
                <h3 key={`${item.title}_${index}`}>{item.title}</h3>
                <p key={`${item.text}_${index}`}>{item.text}</p>
                {item.link && (
                  <a href={item.link} key={`${item.link}_${index}`}>
                    Learn more
                  </a>
                )}
              </div>
            ))}
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
