import React from 'react';
import { TextAndImg, Features, GetStart, SeeDown, Title, PlansCards } from '../components';
import { ModalContext } from '../contexts';

import { SavedSearch, AutoGraph, AppShortcut } from '@mui/icons-material';

import title_img from '../assets/img/mac-extention.png';
import title_img_mob from '../assets/img/mac-extention-mob.png';
import card_img from '../assets/img/card-w200.png';
import chrome_ext1_img from '../assets/img/chrome-ext1.png';
import chrome_ext1_img_mob from '../assets/img/chrome-ext1-mob.png';
import chrome_ext_img from '../assets/img/chrome-ext.png';
import chrome_ext_img_mob from '../assets/img/chrome-ext-mob.png';
import collections_mini_img from '../assets/img/add-col.png';
import chrome_store_img from '../assets/img/ChromeWebStore.png';

export default function ChromeExtention() {
  const { matches769 } = React.useContext(ModalContext);
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
      <div id="Overview" className="anchor" />
      <div id="MobOverview" className="anchor" />
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
      <div className="chrome__feature" style={{ paddingTop: 120 }}>
        <div id="Features" className="anchor" />
        <div id="MobFeatures" className="anchor" />
        <Features
          obj={[
            {
              icon: <SavedSearch />,
              title: 'Get the "helicopter view',
              text: 'Get basic insights into your competitors right in the Google Play Store',
            },
            {
              icon: <AutoGraph />,
              title: 'Grow your business more efficiently',
              text: 'Explore exclusive metrics and visuals about your app on Google Play',
            },
            {
              icon: <AppShortcut />,
              title: 'Get custom insights',
              text: 'Save apps from the Top charts or your search to come back later to track and analyze them',
            },
          ]}
        />
      </div>
      {/* ---------------------------- */}
      <div id="Plans" className="anchor" />
      <div id="MobPlans" className="anchor" />
      <section className="plans">
        <div className="wrapper">
          <div className="plans__title">
            <h2>Find the plan that is right for you</h2>
            <p>
              Choose a subscription plan that best fits your goal.
              <br />
              Downgrade, upgrade, or cancel any time.
            </p>
          </div>
          <PlansCards />
        </div>
      </section>
      {/* ---------------------------- */}
      <GetStart
        img={chrome_store_img}
        buttonLink={
          'https://chrome.google.com/webstore/detail/appstorespy-for-play-stor/dclnfogoojlodlkdfnmghfbeloeojken?utm_source=appstorespy.com&utm_medium=website&utm_campaign=playstore'
        }
        title={'Ready to get started?'}
        buttonText={'Add to Chrome'}
        target
      />
    </>
  );
}
