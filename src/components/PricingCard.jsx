import React from 'react';
import { Button, Divider } from '@mui/material';

function PricingCard({ name, price, buttonClick, target, favorite, ul }) {
  return (
    <div className={favorite ? 'pricing__card pricing__card--favorite' : 'pricing__card'}>
      <h3>{name}</h3>
      <p>${price}</p>
      <span>/month</span>
      <Button
        variant={favorite ? 'contained' : 'outlined'}
        onClick={buttonClick}
        target={target && `_blank`}>
        Get started
      </Button>
      <ul>
        <Divider />
        {ul && ul.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default PricingCard;
