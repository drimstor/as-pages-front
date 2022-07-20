import React, { useContext } from 'react';
import { Title, Features, GetStart, SeeDown, TextAndImg, EmailForm } from '../components';
import { ModalContext } from '../contexts';

import { Divider } from '@mui/material';
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
  const { handleModalSingUp } = useContext(ModalContext);
  return (
    <>
      {/* ---------------------------- */}
      <Title
        img={title_img}
        imgMob={title_img_mob}
        title={'Get custom insights with AppstoreSpy collections'}
        paragraph={'A single space for analytics tailored specifically for you'}
        buttonClick={handleModalSingUp}
        buttonText={'Get started'}
      />
      {/* ---------------------------- */}
      <SeeDown text={'What you can do with AppstoreSpy collections'} />
      {/* ---------------------------- */}
      <div id="Overview" className="anchor" />
      <div id="MobOverview" className="anchor" />
      <div className="text-img--no-border">
        <TextAndImg
          img={top_img}
          imgMob={top_img_mob}
          left
          title={'Everything you need to know about your competitors in one place'}
          text={'Use one tool instead of multiple services to collect data about your competitors.'}
          text2={
            'Add them to your Collection and even sort them into sub-categories to stay on top of the competition.'
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
            'Generate over 30 different types of Reports based on your Collection or selected Collection Apps.'
          }
          link={'#'}
          textLink={'Create Personal Collection now'}
        />
      </div>
      {/* ---------------------------- */}
      <div className="features-imgs">
        <Features
          title={'A perfect tool for every Customer'}
          obj={[
            {
              img: { stock_img },
              title: 'For Founders & Owners',
              text: 'Monitor your market niche and its top players',
            },
            {
              img: { stock1_img },
              title: 'For Product & Marketing',
              text: 'Analyze your competitors` behavior',
            },
            {
              img: { stock2_img },
              title: 'For Investors & Ventures',
              text: 'Track & find promising apps and developers',
            },
          ]}
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
      <div id="Features" className="anchor" />
      <div id="MobFeatures" className="anchor" />
      <Features
        obj={[
          {
            icon: <Workspaces />,
            title: 'Group apps by features',
            text: 'Group competitors into collections and keep an eye on changes in your selected groups',
          },
          {
            icon: <Cached />,
            title: 'Data always stays up to date',
            text: 'You don`t need to update data in your Collections — we do it for you',
          },
          {
            icon: <Groups />,
            title: 'View public Collections',
            text: 'Explore 500+ Public Collections and copy them to your Collections for tracking',
          },
        ]}
      />
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
      <div className="wrapper">
        <Divider />
      </div>
      {/* ---------------------------- */}
      <GetStart
        buttonText={'Create your Collection now'}
        title={'Ready to get started?'}
        buttonClick={handleModalSingUp}
      />
    </>
  );
}

export default Collections;
