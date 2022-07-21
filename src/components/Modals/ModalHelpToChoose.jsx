import React from 'react';

import { Button } from '@mui/material';

function ModalHelpToChoose() {
  return (
    <div className="modal-help">
      <div className="line"></div>

      <h3>We see you're interested in AppstoreSpy, but can't choose a plan.</h3>
      <p>Try AppstoreSpy for free and decide later!</p>
      <ul>
        <li>Basic Niche Finder</li>
        <li>Monitor 5 android apps</li>
        <li>Free Public Collections</li>
        <li>Chrome Extension for Play Store (300 cards daily)</li>
      </ul>
      <span>Try features AppstoreSpy for free and choose plan for you</span>
      <div></div>
      <Button variant="contained">Get AppstoreSpy for Free</Button>
    </div>
  );
}

export default ModalHelpToChoose;
