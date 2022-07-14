import React from 'react';
import { GetStart, PricingCard, SeeDown } from '../components';

import { Button } from '@mui/material';

function Pricing() {
  return (
    <>
      <div className="pricing">
        <div className="wrapper">
          <div className="pricing__title">
            <h2>Choose your Plan</h2>
            <p>
              AppstoreSpy plans start as low as $0 per user per month for Free Plan, $9 per user per
              month for Premium Plan, $49 per user per month for Pro Plan and $99 per user per month
              for Business Plan.
            </p>
          </div>

          <div className="pricing__tumbler"></div>

          <div className="pricing__cards">
            <PricingCard
              name={'Free'}
              price={0}
              ul={[
                'Chrome extension for Play Store',
                'Free watchlists',
                '1 Personal watchlists',
                '1 Apps in a watchlist',
                'Apps from Google Play and App store',
              ]}
            />
            <PricingCard
              name={'Premium'}
              price={7}
              ul={[
                'Chrome extension for Play Store',
                'Apps Database',
                'Export CSV',
                'Unlimited Personal watchlists',
                '100 Apps in a watchlist',
                'Apps from Google Play and App store',
                'Accurate installs for apps in Google Play',
                'See app changes',
              ]}
            />
            <PricingCard
              name={'Pro'}
              price={39}
              favorite
              ul={[
                'Chrome extension for Play Store',
                'Apps Database',
                'Export CSV',
                'All watchlists',
                'Unlimited Personal watchlists',
                '10,000 Apps in a watchlist',
                'Apps from Google Play and App store',
                'Accurate installs for apps in Google Play',
                'See app changes',
              ]}
            />
            <PricingCard
              name={'Business'}
              price={79}
              ul={[
                'Chrome extension for Play Store',
                'Apps Database',
                'Export CSV',
                'API',
                'All watchlists',
                'Unlimited Personal watchlists',
                '10,000 Apps in a watchlist',
                'Apps from Google Play and App store',
                'Accurate installs for apps in Google Play',
                'See app changes',
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
            <thead>
              <th></th>
              <th>Free</th>
              <th>Starter</th>
              <th>Professional</th>
              <th>Enterprise</th>
            </thead>
            <tbody>
            <tr className="tr-small">
            <td></td>
                <td></td>
                <td>19$</td>
                <td>99$</td>
                <td>O/R</td>
              </tr>
              <tr className="tr-small">
              <td></td>
                <td>Try main tools for free</td>
                <td>Explore the market and monitor your competitors</td>
                <td>Grow products and revenue</td>
                <td>Be #1 in the mobile app market</td>
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
                <th>Date update</th>
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
                <th>Google Play</th>
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
                <th>App Store</th>
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
                <th>Number of collections</th>
                <td>1</td>
                <td>1</td>
                <td>10</td>
                <td>Contact us</td>
              </tr>
              <tr className="tr-small">
                <th>Amount App & Devs in Collection</th>
                <td>5</td>
                <td>100</td>
                <td>10 000</td>
                <td>Contact us</td>
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
                <td>Contact us</td>
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
                <td>Contact us</td>
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
                  Packages:  <br />
                  25 000 credits - 60$ <br />
                  50 000 credits - 120$ <br />
                  100 000 credits - 220$
                </td>
                <td>Contact us</td>
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
