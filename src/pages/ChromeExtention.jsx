import React from 'react';
import { Header, TextImg, Footer } from '../components';
import { Button, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { KeyboardArrowDown, SavedSearch, AutoGraph, AppShortcut } from '@mui/icons-material';

import title_img from '../assets/img/mac.png';
import title_img_mob from '../assets/img/title-mob.png';
import card_img from '../assets/img/card-w200.png';
import card_mini from '../assets/img/mini-card0-w161.png';
import card_mini_premium from '../assets/img/mini-card1-w161.png';
import preview_img from '../assets/img/preview.png';
import preview_img_mob from '../assets/img/preview-mob.png';
import collections_img from '../assets/img/collections.png';
import collections_img_mob from '../assets/img/collections-mob.png';
import collections_mini_img from '../assets/img/add-col.png';

function ChromeExtention() {
  const matches1025 = useMediaQuery('(min-width:1025px)');
  const matches769 = useMediaQuery('(min-width:769px)');
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2196F3',
      },
      secondary: {
        main: '#212121',
      },
      text: {
        primary: '#212121',
        secondary: '#616161',
        disabled: '#9E9E9E',
      },
      white: {
        main: '#ffffff',
      },
    },
  });

  return (
    <>
      <Header matches={matches1025} theme={theme} />

      {/* ---------------------------- */}
      <section className="title">
        <div className="wrapper">
          <div className="title__wrapper">
            <div className="title__text">
              <h1>
                Enrich Play Store with mobile
                <br /> app analytics
              </h1>
              <p>Get more information in less time:</p>
              <ul>
                <li>Key metrics</li>
                <li>Screenshots</li>
                <li>Personal Collections</li>
              </ul>
              <ThemeProvider theme={theme}>
                <Button variant="contained">Install Chrome Extension now</Button>
              </ThemeProvider>
              <span>
                Don’t have an account? <a href="#">Sign up for free</a>
              </span>
            </div>
            <div className="title__img">
              <picture>
                <source media="(max-width: 1024px)" srcSet={title_img_mob} />
                <source media="(min-width: 1025px)" srcSet={title_img} />
                <img src={title_img} alt="sreen" />
              </picture>
              <img className="card-img--144" src={card_img} alt="card" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- */}

      <section className="see-down">
        <div className="wrapper">
          <div className="line">
            <span>See what you can do with AppstoreSpy Extension</span>
            <KeyboardArrowDown />
          </div>
        </div>
      </section>

      <section className="card-info">
        <div className="wrapper">
          <div className="card-info__wrapper">
            {matches769 ? (
              <div className="card-info__card">
                <div className="card-info__caption-position-left">
                  <p>Category</p>
                  <p>Release date & Last update</p>
                  <p>Top Countries</p>
                </div>

                <img src={card_img} alt="Card pic" />

                <div className="card-info__caption-position-right">
                  <div className="card-info__age-bg">
                    <span>App&#8217;s age: background color</span>
                    <p>&lt;1 month</p>
                    <p>&lt;1 year</p>
                    <p>&gt;1 year</p>
                  </div>

                  <div className="card-info__caption-text">
                    <p>Developer: total apps & installs</p>
                    <p>Accurate installs: total & daily</p>
                    <p>Revenue & downloads estimates</p>
                    <p>Raiting, purchases, ads & file size</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="card-info__matches">
                  <div className="card-info__card card-info__card--left">
                    <img src={card_img} alt="Card pic" />
                    <div className="card-info__caption-position-right">
                      <div className="card-info__age-bg">
                        <span>App&#8217;s age: background color</span>
                        <p>&lt;1 month</p>
                        <p>&lt;1 year</p>
                        <p>&gt;1 year</p>
                      </div>
                      <div className="card-info__caption-text">
                        <p>Developer: total apps & installs</p>
                        <p>Accurate installs: total & daily</p>
                        <p>Revenue & downloads estimates</p>
                        <p>Raiting, purchases, ads & file size</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-info__card card-info__card--right">
                    <div className="card-info__caption-position-left">
                      <p>Category</p>
                      <p>Release date & Last update</p>
                      <p>Top Countries</p>
                    </div>
                    <img src={card_img} alt="Card pic" />
                  </div>
                </div>
              </>
            )}

            <div className="card-info__title">
              <h2>No more clicks to app pages</h2>
              <p>
                Extension AppstoreSpy embeds information directly into the app cards, so now you can
                simply scroll through the Play Store and analyze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- */}

      <div className="text-img--preview">
        <TextImg
          img={preview_img}
          img_mob={preview_img_mob}
          img_before={card_img}
          title={'Preview Store Listing'}
          text={
            'Save time exploring Apps without visiting App pages: all information and even screenshots are available when browsing Play Store.'
          }
        />
      </div>
      <div className="text-img--collections">
        <TextImg
          img={collections_img}
          img_mob={collections_img_mob}
          img_before={collections_mini_img}
          left
          title={'Add apps to your Collections'}
          text={
            'Add the apps you are interested in to your Personal Collections directly from Google Play to learn more about them, monitor and analyze.'
          }
        />
      </div>

      {/* ---------------------------- */}

      <section className="feature">
        <div className="wrapper">
          <div className="feature__wrapper">
            <div className="feature__item">
              <SavedSearch />
              <h3>Take the helicopter view</h3>
              <p>Get more data for the competitors’ primary analysis in Google Play Store.</p>
            </div>
            <div className="feature__item">
              <AutoGraph />
              <h3>Develop more effectively</h3>
              <p>Explore exclusive metrics and visuals about your app from across Google Play.</p>
            </div>
            <div className="feature__item">
              <AppShortcut />
              <h3>Save favourite apps</h3>
              <p>
                Save apps from the Top charts or your search to come back later for analysis and
                follow them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- */}

      <section className="plans">
        <div className="wrapper">
          <div className="plans__title">
            <h2>Find the plan that is right for you</h2>
            <p>
              Choose a subscription plan that best fits your goal.
              <br />
              Downgrade, upgrade or cancel any time.
            </p>
          </div>
          <div className="plans__cards">
            <div className="plans__card">
              <img src={card_mini} alt="card" />
              <div className="plans__text">
                <h3>Free plan</h3>
                <ThemeProvider theme={theme}>
                  <Button variant="outlined">Try now</Button>
                </ThemeProvider>
                <span>Start exploring the App’s metrics for free:</span>
                <li>App’s age highlights:</li>
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
                <ThemeProvider theme={theme}>
                  <Button variant="contained">Get Started</Button>
                </ThemeProvider>
                <span>
                  <a href="#">See more Plans</a>
                </span>
                <ul>
                  <li>All free features</li>
                  <li>Developer: total apps and installs</li>
                  <li>Accurate total installs</li>
                  <li>Installs daily</li>
                  <li>Revenue and downloads estimates</li>
                  <li>Top countries</li>
                  <li>Raiting, purchases, ads and file size</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- */}

      <section className="get-start">
        <div className="wrapper">
          <div className="get-start__wrapper">
            <div className="line"></div>
            <h2>Ready to get started?</h2>
            <ThemeProvider theme={theme}>
              <Button variant="contained">Try Chrome Extension now</Button>
            </ThemeProvider>
          </div>
        </div>
      </section>

      {/* ---------------------------- */}

      <Footer />
    </>
  );
}

export default ChromeExtention;
