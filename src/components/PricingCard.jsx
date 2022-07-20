import React from 'react';
import { Button, Divider } from '@mui/material';

function PricingCard({
  name,
  price,
  month,
  subText,
  buttonClick,
  buttonText,
  target,
  favorite,
  ul,
  title,
}) {
  return (
    <div className={favorite ? 'pricing__card pricing__card--favorite' : 'pricing__card'}>
      <h3>{name}</h3>
      <p>
        {!month && <span>$</span>} {price}
      </p>
      <span style={month && { visibility: 'hidden' }}>/month</span>
      <Button
        variant={favorite ? 'contained' : 'outlined'}
        onClick={buttonClick}
        target={target && `_blank`}>
        {buttonText}
      </Button>
      <span className="pricing__subtext">{subText}</span>
      <ul>
        <Divider />
        {title && <span>{title}</span>}
        {ul && ul.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default PricingCard;
