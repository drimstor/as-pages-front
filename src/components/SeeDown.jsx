import React from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';

function SeeDown( { text } ) {
  return (
    <>
      <div id="Overview"></div>
      <section className="see-down">
        <div className="wrapper">
          <div className="line">
            <span>{text}</span>
            <KeyboardArrowDown />
          </div>
        </div>
      </section>
    </>
  );
}

export default SeeDown;
