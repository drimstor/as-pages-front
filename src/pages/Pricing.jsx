import React, { useContext, useState } from 'react';
import { GetStart, PricingCard, SeeDown } from '../components';
import { ModalContext } from '../contexts';

import { Button, Switch } from '@mui/material';

function Pricing() {
  const { openModal } = useContext(ModalContext);

  document.addEventListener('scroll', function () {
    const triggerIn = document.querySelector('#tablehead');
    const fixBlock = document.querySelector('.tableBtns');
    const triggerOut = document.querySelector('.tablebottom');
    if (
      triggerIn.getBoundingClientRect().top < 63 &&
      triggerOut.getBoundingClientRect().top > 112
    ) {
      fixBlock.classList.add('fixed');
    }
    if (
      triggerIn.getBoundingClientRect().top > 63 ||
      triggerOut.getBoundingClientRect().top < 112
    ) {
      fixBlock.classList.remove('fixed');
    }
  });

  const [switchState, setSwitchState] = useState(true);

  // function handleSwitch(event) {
  //   setSwitchState(event.target.checked);
  // }

  return (
    <>
      <div className="pricing">
        <div className="wrapper">
          <div className="pricing__title">
            <h2>Choose your Plan</h2>
            <p>
              We have a range of price plans that will work for anyone, from individuals to big
              companies.
            </p>
          </div>
          <div className="pricing__tumbler">
            <span>Montly</span>
            <Switch size="medium" checked={switchState} onChange={(event)=> setSwitchState(event.target.checked)} />
            <span>Annually (-20%)*</span>
          </div>
          {/* ---------------------------- */}
          <div className="pricing__cards">
            <PricingCard
              name={'Free'}
              price={'$0'}
              buttonClick={openModal}
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
              price={switchState ? '$19' : '$24'}
              buttonClick={openModal}
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
              price={switchState ? '$99' : '$124'}
              favorite
              buttonClick={openModal}
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
              buttonClick={openModal}
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
            * Monthly prices listed for prices billed annually.
          </span>
          {/* ---------------------------- */}
          <div className="pricing__see-down">
            <SeeDown text={'Compare plans in detail'} />
          </div>
          {/* ---------------------------- */}
          <div className="tableBtns">
            <div className="wrapper">
              <div className="tablehead">
                <div className="el1"></div>
                <div className="el2">Free</div>
                <div className="el2">Starter</div>
                <div className="el2">Professional</div>
                <div className="el2">Enterprise</div>
              </div>
            </div>
          </div>
          <table>
            <caption>Detaided Plan Comparison</caption>
            <thead id="tablehead">
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
                <th>Market Explorer</th>
                <td>5 results at search</td>
                <td>5 results at search</td>
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
                <th>Date updated</th>
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

              <tr className="tablebottom">
                <th></th>
                <td>
                  <Button onClick={openModal} variant="outlined">
                    Start for free
                  </Button>
                </td>
                <td>
                  <Button onClick={openModal} variant="outlined">
                    Start for 19$
                  </Button>
                </td>
                <td>
                  <Button onClick={openModal} variant="contained">
                    Start for 99$
                  </Button>
                </td>
                <td>
                  <Button onClick={openModal} variant="outlined">
                    Contact us
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* ---------------------------- */}
      <div className="pricing__get-start">
        <GetStart
          buttonText={'Get started'}
          title={'Start today for free'}
          buttonClick={openModal}
          paragraph={
            'Dive into mobile market analytics with AppstoreSpy’s next-generation tools — get all the basics free and move to a more advanced plan whenever you want!'
          }
        />
      </div>
    </>
  );
}

export default Pricing;
