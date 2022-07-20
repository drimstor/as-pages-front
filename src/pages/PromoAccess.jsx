import React from 'react';

import { PlansCards, Features } from '../components';

import { Button, TextField } from '@mui/material';
import { Extension, GridOn, Timeline } from '@mui/icons-material';

function PromoAccess() {
  return (
    <div className="promo-access">
      <div className="wrapper">
        <div className="promo-access__title">
          <h1>Get access to the Extension</h1>
          <p>Enter the promo code for unlimited access to the extension for a day</p>
          <ul>
            <li>1. Create an Account or Log in</li>
            <li>
              2. Enter promo code{' '}
              <TextField id="outlined-number" label="Promo Code" type="number" />
            </li>
            <li>3. Use the Extension with no limits</li>
          </ul>
          <Button variant={'contained'} onClick={''}>
            Start now
          </Button>
        </div>
        {/* ---------------------------- */}
        <PlansCards />
        {/* ---------------------------- */}
        <div className="table-features">
          <Features
            title={'Discover more products by AppstoreSpy'}
            subLink={'#'}
            subLinkText={'See all products'}
            obj={[
              {
                icon: <Extension />,
                title: 'Chrome Plugin',
                text: 'Install AppstoreSpy Chrome Extension to automatically embed app data directly into Google Play Store.',
                link: '#',
              },
              {
                icon: <GridOn />,
                title: 'Niche Finder',
                text: 'Build and grow the next hot app by finding and tracking the right market  niche for you.',
                link: '#',
              },
              {
                icon: <Timeline />,
                title: 'App Timeline',
                text: 'Track all available recent app changes to analyze what influences app performance.',
                link: '#',
              },
            ]}
          />
        </div>
        {/* ---------------------------- */}
      </div>
    </div>
  );
}

export default PromoAccess;
