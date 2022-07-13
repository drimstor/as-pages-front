import React, { useContext } from 'react';
import { Title, Features, GetStart, SeeDown, TextAndImg, EmailForm } from '../components';
import { ModalContext } from '../contexts';

import { Workspaces, Cached, Groups, Extension, GridOn, Timeline } from '@mui/icons-material';

import title_img from '../assets/img/mac-collections.png';
import title_img_mob from '../assets/img/mac-collections-mob.png';
import top_img from '../assets/img/mytop.png';
import top_img_mob from '../assets/img/mytop-mob.png';
import top1_img from '../assets/img/mytop1.png';
import top1_img_mob from '../assets/img/mytop1-mob.png';
import top2_img from '../assets/img/mytop2.png';
import top2_img_mob from '../assets/img/mytop2-mob.png';
import stock_img from '../assets/img/stockpeople.png';
import stock1_img from '../assets/img/stockpeople1.png';
import stock2_img from '../assets/img/stockpeople2.png';

function Collections() {
  const { toggleModal } = useContext(ModalContext);
  return (
    <>
      {/* ---------------------------- */}
      <Title
        img={title_img}
        imgMob={title_img_mob}
        title={'Get custom insights with AppstoreSpy collections'}
        paragraph={'A single space for analytics tailored specifically for you'}
        buttonClick={toggleModal}
        buttonText={'Get started'}
      />
      {/* ---------------------------- */}
      <SeeDown text={'What you can do with AppstoreSpy collections'} />
      {/* ---------------------------- */}
      <div className="text-img--no-border">
        <TextAndImg
          img={top_img}
          imgMob={top_img_mob}
          left
          title={'Everything you need to know about your competitors in one place'}
          text={
            'Use one tool instead of multiple services to collect data about your competitors: Add them to your Collection and even sort them into sub-categories to stay on top of the competition'
          }
          link={'#'}
          textLink={'Create Personal Collection now'}
        />
      </div>
      {/* ---------------------------- */}
      <div className="text-img--no-border">
        <TextAndImg
          img={top1_img}
          imgMob={top1_img_mob}
          title={'Analyze all apps in one tab'}
          text={'Get quick overviews on the apps you track on your Collection page:'}
          ul={[
            'View all key metrics in one table',
            'See all icons and descriptions on one screen',
            'Get full screenshots on hover',
          ]}
          link={'#'}
          textLink={'Try AppstoreSpy Collection now'}
        />
      </div>
      {/* ---------------------------- */}
      <div className="text-img--no-border">
        <TextAndImg
          img={top2_img}
          imgMob={top2_img_mob}
          left
          title={'Over 30 Reports in one click'}
          text={
            'Generate over 30 different types of Reports based on your Collection or selected Collection Apps'
          }
          link={'#'}
          textLink={'Create Personal Collection now'}
        />
      </div>
      {/* ---------------------------- */}
      <div className="features-imgs">
        <Features
          title={'A perfect tool for every Customer'}
          img1={stock_img}
          img2={stock1_img}
          img3={stock2_img}
          title1={'For Founders & Owners"'}
          title2={'For Product & Marketing'}
          title3={'For Investors & Ventures'}
          text1={'Monitor your market niche and its top players'}
          text2={'Analyze your competitors` behavior'}
          text3={'Track & find promising apps and developers'}
        />
      </div>
      {/* ---------------------------- */}
      <EmailForm
        buttonText={'Get started'}
        title={'Try AppstoreSpy Collections for free'}
        paragraph={'Build your Collections to track and analyze competitors — start for free!'}
        label={
          'By checking this box you agree to AppstoreSpy’s Terms and Conditions and Privacy Policy, and to receive the occasional product and marketing Email.'
        }
      />
      {/* ---------------------------- */}
      <Features
        icon1={<Workspaces />}
        icon2={<Cached />}
        icon3={<Groups />}
        title1={'Group apps by features'}
        title2={'Data always stays up to date'}
        title3={'View public Collections'}
        text1={'Group competitors into collections and keep eye on changes in your selected groups'}
        text2={'You don`t need to update data in your Collections — we do it for you'}
        text3={'Explore 500+ Public Collections and copy them to your Collections for tracking'}
      />
      {/* ---------------------------- */}
      <div className="table-features">
        <Features
          title={'Discover more products by AppstoreSpy'}
          subLink={'https://chrome.google.com/'}
          subLinkText={'See all products'}
          icon1={<Extension />}
          icon2={<GridOn />}
          icon3={<Timeline />}
          title1={'Chrome Plugin'}
          title2={'Niche Finder'}
          title3={'App Timeline'}
          link1={
            'https://chrome.google.com/webstore/detail/appstorespy-for-play-stor/dclnfogoojlodlkdfnmghfbeloeojken?utm_source=appstorespy.com&utm_medium=website&utm_campaign=playstore'
          }
          link2={
            'https://chrome.google.com/webstore/detail/appstorespy-for-play-stor/dclnfogoojlodlkdfnmghfbeloeojken?utm_source=appstorespy.com&utm_medium=website&utm_campaign=playstore'
          }
          link3={
            'https://chrome.google.com/webstore/detail/appstorespy-for-play-stor/dclnfogoojlodlkdfnmghfbeloeojken?utm_source=appstorespy.com&utm_medium=website&utm_campaign=playstore'
          }
          text1={
            'Install AppstoreSpy Chrome Extension to automatically embed app data directly into Google Play Store.'
          }
          text2={
            'Build and grow the next hot app by finding and tracking the right market  niche for you.'
          }
          text3={
            'Track all available recent app changes to analyze what influences app performance.'
          }
        />
      </div>
      {/* ---------------------------- */}
      <GetStart buttonText={'Create your Collection now'} buttonClick={toggleModal} />
    </>
  );
}

export default Collections;
