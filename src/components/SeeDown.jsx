import React from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';

function SeeDown({ text, title }) {
  return (
    <>
      <section className="see-down">
        <div className="wrapper">
          <div className="line">
          {title && <h4>{title}</h4>}
            <span>{text}</span>
            <KeyboardArrowDown />
          </div>
        </div>
      </section>
    </>
  );
}

export default SeeDown;
