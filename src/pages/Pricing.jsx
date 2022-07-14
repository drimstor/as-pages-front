import React from 'react';
import { GetStart, PricingCard, SeeDown } from '../components';

import { Button } from '@mui/material';

document.addEventListener('scroll', function () {
  const elem = document.querySelector('#tablehead');
  const elem2 = document.querySelector('tablehead');
  // elem.classList[elem.getBoundingClientRect().top < elem.offsetHeight ? 'add' : 'remove']('abc');
  if (window.pageYOffset > elem.getBoundingClientRect().top) {
    elem2.classList.add('abc')
  }
  
   if (window.pageYOffset < elem.getBoundingClientRect().top) {
    elem2.classList.remove('abc')
  }
});



// $(window).scroll(function(){

//   let wScroll = $(this).scrollTop();

//   // Activate menu
//   if (wScroll > 20) {
//       $('.header__top,.header__header').addClass('scroll');
//   }
//   else {
//       $('.header__top,.header__header').removeClass('scroll');
//   };
// });



function Pricing() {
  return (
    <>
      <div className="pricing">
        <div className="wrapper">
          <div className="pricing__title">
            <h2>Choose your Plan</h2>
            <p>
              We have a range of plans that will work for anyone, from individuals to big companies.
            </p>
          </div>

          <div className="pricing__tumbler"></div>

          <div className="pricing__cards">
            <PricingCard
              name={'Free'}
              price={'$0'}
              ul={[
                'Chrome Extension for Play Store with 300 cards per day',
                '5 first results at Market explorer',
                'Basic metrics on App/Dev pages',
                'Free Data app metrics',
                'Free Public Collections',
                '5 apps in Private Collection',
                'Share Link Teamwork',
                '200 Top Charts',
              ]}
            />
            <PricingCard
              name={'Starter'}
              price={'$19'}
              ul={[
                'Chrome Extension for Play Store',
                '5 first results at Market explorer',
                'Key metrics on App/Dev pages',
                'Starter Data',
                'Starter Public Collections ',
                '100 apps in Private Collection',
                'Share Link Teamwork',
                '200 Top Charts',
                'Installs&Revenue reports',
                'Niche Finder (basic)',
              ]}
            />
            <PricingCard
              name={'Professional'}
              price={'$99'}
              favorite
              ul={[
                'Chrome Extension for Play Store',
                'Market Explorer',
                'All metrics on App/Dev pages',
                'Pro Apps&Devs Database',
                'Pro Collections',
                '10 Private Collections',
                'Share pages with PRO features',
                '500 Top Charts',
                'Installs&Revenue reports',
                'Niche Finder',
                'Invite users on Private boards',
                'Export ',
                'API',
                'SDK Explorer',
              ]}
            />
              <PricingCard
                name={'Enterprise'}
                price={'On Request'}
                title={'All PRO features, plus:'}
                ul={[
                  'Personal manager',
                  'Custom Collections',
                  'Custom Reports',
                  'Reviews',
                  'Integrations',
                ]}
              />
          </div>

          <span className="pricing__under-line">
            * The monthly amount specified in the pricing is relevant when paying the one-time
            annual payment.
          </span>
          <div className="pricing__see-down">
            <SeeDown text={'Compare plans in details'} />
          </div>

          <table>
            <caption>Detailded Plans Comparison</caption>
            <thead id="tablehead">
              <th></th>
              <th>Free</th>
              <th>Starter</th>
              <th>Professional</th>
              <th>Enterprise</th>
            </thead>
            {/* <div className='tablehead'>
              <div className="el1"></div>
              <div className="el2">Free</div>
              <div className="el2">Starter</div>
              <div className="el2">Professional</div>
              <div className="el2">Enterprise</div>
            </div> */}
            <tbody>
              <tr className="tr-small">
                <td></td>
                <td></td>
                <td>19$</td>
                <td>99$</td>
                <td>Price upon request</td>
              </tr>
              <tr className="tr-small">
                <td></td>
                <td>Try main tools for free</td>
                <td>Monitor your competitors</td>
                <td>Grow products and revenue</td>
                <td>Be #1 in the app market</td>
              </tr>
              <tr>
                <th>Chrome Extension for Play Store</th>
                <td>300 cards per day</td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr>
                <th className="mark">Market Explorer</th>
                <td>5 results at search</td>
                <td>5 results at search</td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Unlimited Collections</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Unlimited Reports</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr>
                <th className="mark">App metrics</th>
                <td>Free data</td>
                <td>Starter data</td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Installs</th>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Date released</th>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Daily installs</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Downloads</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Revenue</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Ratings</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Top Country</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Revenue by Country</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Reviews</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Custom metrics</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>

              <tr>
                <th>Collections</th>
                <td>Free Public Collections </td>
                <td>Starter Public Collections</td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr>
                <th className="mark">Private Collections</th>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>

              <tr className="tr-small">
                <th>Number of collections</th>
                <td>1</td>
                <td>1</td>
                <td>10</td>
                <td>Custom</td>
              </tr>
              <tr className="tr-small">
                <th>Amount App & Devs in Collection</th>
                <td>5</td>
                <td>100</td>
                <td>10 000</td>
                <td>Custom</td>
              </tr>
              <tr className="tr-small">
                <th>Export</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr>
                <th className="mark">Teamwork</th>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Share Link</th>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Share pages with PRO features</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Invite users on Private boards</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr>
                <th>Top Charts</th>
                <td>200 </td>
                <td>200</td>
                <td>500</td>
                <td>Custom</td>
              </tr>

              <tr>
                <th className="mark">API</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>12 000 credits per month</td>
                <td>Custom</td>
              </tr>
              <tr className="tr-small">
                <th>Add packages</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  25 000 credits - 60$ <br />
                  50 000 credits - 120$ <br />
                  100 000 credits - 220$
                </td>
                <td>Custom</td>
              </tr>

              <tr>
                <th>SDK Explorer</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>

              <tr>
                <th className="mark">Special Features</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>

              <tr className="tr-small">
                <th>Personal manager</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Custom Collections</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Custom reports</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Reviews</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>
              <tr className="tr-small">
                <th>Integrations</th>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="dash" />
                </td>
                <td>
                  <div className="check" />
                </td>
              </tr>

              <tr>
                <th></th>
                <td>
                  <Button variant="outlined">Get started</Button>
                </td>
                <td>
                  <Button variant="outlined">Get started</Button>
                </td>
                <td>
                  <Button variant="contained">Get started</Button>
                </td>
                <td>
                  <Button variant="outlined">Get started</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pricing__get-start">
        <GetStart
          buttonText={'Get started'}
          title={'Start your trial today for free'}
          paragraph={
            'Explore the digital landscape with AppstoreSpy’s next-generation market-leading analytics platform by starting completely for free.'
          }
        />
      </div>
    </>
  );
}

export default Pricing;
