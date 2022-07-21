import React, { useContext, useState, 
  // useEffect
 } from 'react';
import { GetStart, PricingCard, SeeDown } from '../components';
import { ModalContext } from '../contexts';

import { Button, Switch } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  // EffectCards,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

function Pricing() {
  const { handleModalSingUp, handleModalContactUs, 
    // handleModalHelpToChoose, 
    matches1025 } =
    useContext(ModalContext);

  // Состояние Switch'a
  const [switchState, setSwitchState] = useState(true);
  function handleSwitch(event) {
    setSwitchState(event.target.checked);
  }

  // useEffect(
  //   () => {
  //     // Всплывающая модалка
  //     const timer = setTimeout(handleModalHelpToChoose, 45000);
  //     return () => clearTimeout(timer);
  //   },
  //   // eslint-disable-next-line
  //   [],
  // );

  // Закреп названий тарифов
  matches1025 &&
    document.addEventListener('scroll', function () {
      const triggerIn = document.querySelector('#tablehead');
      const fixBlock = document.querySelector('.tableBtns');
      const triggerOut = document.querySelector('.tablebottom');
      // Поведение от верхнего триггера
      if (triggerIn.getBoundingClientRect().top < 64) {
        fixBlock.classList.add('fixed');
      } else {
        fixBlock.classList.remove('fixed');
      }
      // Поведение от нижнего триггера
      if (triggerOut.getBoundingClientRect().top < 112) {
        fixBlock.classList.add('transform');
      } else {
        fixBlock.classList.remove('transform');
      }
    });

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
            <Switch size="medium" checked={switchState} onChange={handleSwitch} />
            <span>Annually (-20%)*</span>
          </div>
        </div>
        {/* ---------------------------- */}
        {matches1025 ? (
          <div className="wrapper">
            <div className="pricing__cards">
              <PricingCard
                name={'Free'}
                price={'0'}
                buttonClick={handleModalSingUp}
                buttonText={'Get started'}
                subText={'Try main tools for free'}
                ul={[
                  'Chrome Extension for Play Store (limited version)',
                  'Free Public Collections',
                  '5 apps in Private Collection',
                ]}
              />
              <PricingCard
                name={'Starter'}
                price={switchState ? '19' : '24'}
                buttonClick={handleModalSingUp}
                buttonText={'Get started'}
                subText={'Monitor your competitors'}
                ul={[
                  'Chrome Extension for Play Store',
                  'Starter Public Collections ',
                  '100 apps in Private Collection',
                  'Installs & Revenue reports',
                  'Niche Finder (basic)',
                ]}
              />
              <PricingCard
                name={'Professional'}
                price={switchState ? '99' : '124'}
                favorite
                buttonClick={handleModalSingUp}
                buttonText={'Get started'}
                subText={'Grow products and revenue'}
                ul={[
                  'Chrome Extension for Play Store',
                  'Market Explorer',
                  'All metrics on App/Dev pages',
                  'Public & Private Collections',
                  '30+ reports',
                  'Niche Finder',
                  'Export ',
                  'API',
                  'SDK Explorer',
                ]}
              />
              <PricingCard
                name={'Enterprise'}
                price={'Custom'}
                title={'All PRO features, plus:'}
                buttonClick={handleModalContactUs}
                buttonText={'Contact us'}
                subText={'Be #1 in the app market'}
                month
                ul={[
                  'Personal manager',
                  'Custom Collections',
                  'Custom Reports',
                  'Reviews',
                  'Integrations',
                ]}
              />
            </div>
            {/* ---------------------------- */}
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
            {/* ---------------------------- */}
            <table>
              <caption>Detaided Plan Comparison</caption>
              <thead id="tablehead">
                <tr>
                  <th></th>
                  <th>Free</th>
                  <th>Starter</th>
                  <th>Professional</th>
                  <th>Enterprise</th>
                </tr>
              </thead>

              <tbody>
                <tr className="tr-small">
                  <td></td>
                  <td>0$</td>
                  <td>19$</td>
                  <td>99$</td>
                  <td>Price upon request</td>
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
                    <Button onClick={handleModalSingUp} variant="outlined">
                      Start for free
                    </Button>
                  </td>
                  <td>
                    <Button onClick={handleModalSingUp} variant="outlined">
                      Start for 19$
                    </Button>
                  </td>
                  <td>
                    <Button onClick={handleModalSingUp} variant="contained">
                      Start for 99$
                    </Button>
                  </td>
                  <td>
                    <Button onClick={handleModalContactUs} variant="outlined">
                      Contact us
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="pricing__cards">
            <Swiper
              spaceBetween={1}
              modules={[Navigation, Pagination]}
              navigation
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              pagination={true}
              // effect={'cards'}
              // modules={[EffectCards]}
              // onSlideChange={}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <PricingCard
                  name={'Starter'}
                  price={switchState ? '19' : '24'}
                  buttonClick={handleModalSingUp}
                  buttonText={'Get started'}
                  subText={'Monitor your competitors'}
                  ul={[
                    'Chrome Extension for Play Store',
                    'Starter Public Collections ',
                    '100 apps in Private Collection',
                    'Installs & Revenue reports',
                    'Niche Finder (basic)',
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PricingCard
                  name={'Professional'}
                  price={switchState ? '99' : '124'}
                  favorite
                  buttonClick={handleModalSingUp}
                  buttonText={'Get started'}
                  subText={'Grow products and revenue'}
                  ul={[
                    'Chrome Extension for Play Store',
                    'Market Explorer',
                    'All metrics on App/Dev pages',
                    'Public & Private Collections',
                    '30+ reports',
                    'Niche Finder',
                    'Export ',
                    'API',
                    'SDK Explorer',
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PricingCard
                  name={'Enterprise'}
                  price={'Custom'}
                  title={'All PRO features, plus:'}
                  buttonClick={handleModalContactUs}
                  buttonText={'Contact us'}
                  subText={'Be #1 in the app market'}
                  month
                  ul={[
                    'Personal manager',
                    'Custom Collections',
                    'Custom Reports',
                    'Reviews',
                    'Integrations',
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PricingCard
                  name={'Free'}
                  price={'0'}
                  buttonClick={handleModalSingUp}
                  buttonText={'Get started'}
                  subText={'Try main tools for free'}
                  ul={[
                    'Chrome Extension for Play Store (limited version)',
                    'Free Public Collections',
                    '5 apps in Private Collection',
                  ]}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
      {/* ---------------------------- */}
      <div className="pricing__get-start">
        <GetStart
          buttonText={'Get started'}
          title={'Start today for free'}
          buttonClick={handleModalSingUp}
          paragraph={
            'Dive into mobile market analytics with AppstoreSpy’s next-generation tools — get all the basics free and move to a more advanced plan whenever you want!'
          }
        />
      </div>
    </>
  );
}

export default Pricing;
