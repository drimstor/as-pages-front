import React from 'react';

import { Button } from '@mui/material';

import card_mini from '../assets/img/mini-card0-w161.png';
import card_mini_premium from '../assets/img/mini-card1-w161.png';

function PlansCards() {
  return (
    <div className="plans__cards">
      <div className="plans__card">
        <img src={card_mini} alt="card" />
        <div className="plans__text">
          <h3>Free plan</h3>
          <Button variant="outlined">Try now</Button>
          <span>Start exploring the App’s metrics for free:</span>
          <ul>
            <li>App’s age highlights:</li>
          </ul>
          <div className="card-info__age-bg">
            <p>&lt;1 month</p>
            <p>&lt;1 year</p>
            <p>&gt;1 year</p>
          </div>
          <ul>
            <li>Category</li>
            <li>Installs total</li>
            <li>Released date & last update</li>
          </ul>
        </div>
      </div>
      <div className="plans__card plans__card--premium">
        <img src={card_mini_premium} alt="card" />
        <div className="plans__text">
          <h3 className="plans__text--premium">Premium plan</h3>
          <Button variant="contained">Get Started</Button>
          <span>
            <a href="#top">See more Plans</a>
          </span>
          <ul>
            <li>All free features</li>
            <li>Developer: total apps and installs</li>
            <li>Accurate total installs</li>
            <li>Installs daily</li>
            <li>Revenue and downloads estimates</li>
            <li>Top country</li>
            <li>Raiting, purchases, ads, and file size</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlansCards;
