import React from 'react';
import ScrollButton from 'react-scroll-button';

export default function ScrollToTop() {
  return (
    <div className="scrolltotop">
      <ScrollButton behavior="smooth" targetId="top" />
    </div>
  );
}
