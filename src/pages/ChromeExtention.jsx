import React, { useContext } from 'react';
import { TextAndImg, Features, GetStart, SeeDown, Title } from '../components';
import { ModalContext } from '../contexts';

import { Button } from '@mui/material';
import { SavedSearch, AutoGraph, AppShortcut } from '@mui/icons-material';

import title_img from '../assets/img/mac-extention.png';
import title_img_mob from '../assets/img/mac-extention-mob.png';
import card_img from '../assets/img/card-w200.png';
import card_mini from '../assets/img/mini-card0-w161.png';
import card_mini_premium from '../assets/img/mini-card1-w161.png';
import chrome_ext1_img from '../assets/img/chrome-ext1.png';
import chrome_ext1_img_mob from '../assets/img/chrome-ext1-mob.png';
import chrome_ext_img from '../assets/img/chrome-ext.png';
import chrome_ext_img_mob from '../assets/img/chrome-ext-mob.png';
import collections_mini_img from '../assets/img/add-col.png';
import chrome_store_img from '../assets/img/ChromeWebStore.png';

export default function ChromeExtention() {
  const { matches769 } = useContext(ModalContext);
  return (
    <>
      <Title
        img={title_img}
        imgMob={title_img_mob}
        cardImg={card_img}
        title={'Get pro app insights with a simple Chrome extension'}
        paragraph={'Get more information in less time:'}
        ul={['Key metrics', 'Screenshots', 'Custom analytics']}
        buttonLink={
          'https://chrome.google.com/webstore/detail/appstorespy-for-play-stor/dclnfogoojlodlkdfnmghfbeloeojken?utm_source=appstorespy.com&utm_medium=website&utm_campaign=playstore'
        }
        buttonText={'Install AppStoreSpy on Chrome'}
        target
      />
      {/* ---------------------------- */}
      <SeeDown text={'What you can do with The AppstoreSpy Extension'} />
      {/* ---------------------------- */}
      <section className="card-info">
        <div className="wrapper">
          <div className="card-info__wrapper">
            {matches769 ? (
              <div className="card-info__card">
                <div className="card-info__caption-position-left">
                  <p>Category</p>
                  <p>Release date & Last update</p>
                  <p>Top Country</p>
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
                    <p>Top Country</p>
                  </div>
                  <img src={card_img} alt="Card pic" />
                </div>
              </div>
            )}
            <div className="card-info__title">
              <h2>No more clicks to app pages</h2>
              <p>
                The Extension AppstoreSpy embeds information directly into the app cards, so now you
                can simply scroll through the Play Store and analyze.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------- */}
      <div className="text-img--preview">
        <TextAndImg
          img={chrome_ext1_img}
          imgMob={chrome_ext1_img_mob}
          imgBefore={card_img}
          title={'Get full Store listing previews'}
          text={
            'AppstoreSpy offers more than just data in previews: access full Store listing views including screenshots without opening the app page'
          }
        />
      </div>
      {/* ---------------------------- */}
      <div className="text-img--collections">
        <TextAndImg
          img={chrome_ext_img}
          imgMob={chrome_ext_img_mob}
          imgBefore={collections_mini_img}
          left
          title={'Customize your research'}
          text={
            'Add the apps you are interested in to your Personal Collections directly from Google Play to learn more about them, monitor, and analyze'
          }
        />
      </div>
      {/* ---------------------------- */}
      <Features
        icon1={<SavedSearch />}
        icon2={<AutoGraph />}
        icon3={<AppShortcut />}
        title1={'Get the "helicopter view"'}
        title2={'Grow your business more efficiently'}
        title3={'Get custom insights'}
        text1={'Get basic insights into your competitors right in the Google Play Store'}
        text2={'Explore exclusive metrics and visuals about your app on Google Play'}
        text3={
          'Save apps from the Top charts or your search to come back later to track and analyze them'
        }
      />
      {/* ---------------------------- */}
      <section className="plans" id="Plans">
        <div className="wrapper">
          <div className="plans__title">
            <h2>Find the plan that is right for you</h2>
            <p>
              Choose a subscription plan that best fits your goal.
              <br />
              Downgrade, upgrade, or cancel any time.
            </p>
          </div>
          <div className="plans__cards">
            <div className="plans__card">
              <img src={card_mini} alt="card" />
              <div className="plans__text">
                <h3>Free plan</h3>
                  <Button variant="outlined">Try now</Button>
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
                  <Button variant="contained">Get Started</Button>
                <span>
                  <a href="#">See more Plans</a>
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
        </div>
      </section>
      {/* ---------------------------- */}
      <GetStart
        img={chrome_store_img}
        buttonLink={
          'https://chrome.google.com/webstore/detail/appstorespy-for-play-stor/dclnfogoojlodlkdfnmghfbeloeojken?utm_source=appstorespy.com&utm_medium=website&utm_campaign=playstore'
        }
        buttonText={'Add to Chrome'}
        target
      />
    </>
  );
}
