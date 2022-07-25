import React from 'react';

import { TextAndImg, Features, GetStart, SeeDown, Title } from '../components';

import { SavedSearch, StarOutline, Cached } from '@mui/icons-material';

import title_img from '../assets/img/finder-title.png';
import title_img_mob from '../assets/img/finder-title-mob.png';
import finder1_img from '../assets/img/finder1.png';
import finder1_img_mob from '../assets/img/finder1-mob.png';
import finder1_img_before from '../assets/img/finder1-before.png';
import finder2_img from '../assets/img/finder2.png';
import finder2_img_mob from '../assets/img/finder2-mob.png';
import finder2_img_before from '../assets/img/finder2-before.png';
import finder3_img from '../assets/img/finder3.png';
import finder3_img_mob from '../assets/img/finder3-mob.png';
import finder3_img_before from '../assets/img/finder3-before.png';
import finder4_img from '../assets/img/finder4.png';
import finder4_img_mob from '../assets/img/finder4-mob.png';

function Finder() {
  return (
    <div className="finder">
      <Title
        img={title_img}
        imgMob={title_img_mob}
        title={'Niche Finder'}
        paragraph={
          'The first tool offering basic market overview using keywords in just a few clicks'
        }
        search
      />
      {/* ---------------------------- */}
      <SeeDown
        title={'How to use Niche Finder'}
        text={'Easy step-by-step guide to building your market research'}
      />
      {/* ---------------------------- */}
      <div className="text-img--finder1">
        <TextAndImg
          img={finder1_img}
          imgMob={finder1_img_mob}
          imgBefore={finder1_img_before}
          left
          spanText={'Step 1'}
          title={'Enter a keyword'}
          text={"Find the niche that’s ready for a breakthrough."}
          text2={'Select filters and enter a keyword so we can find your niche and show you it’s key metrics.'}
        />
      </div>
      {/* ---------------------------- */}
      <div className="text-img--finder2">
        <TextAndImg
          img={finder2_img}
          imgMob={finder2_img_mob}
          imgBefore={finder2_img_before}
          spanText={'Step 2'}
          title={'Customize widgets'}
          text={'You will get an idea of the market as a whole or by individual categories.'}
          text2={'Choose widgets from the list and add them to your dashboard to analyze your niche.'}
        />
      </div>
      {/* ---------------------------- */}
      <div className="text-img--finder3">
        <TextAndImg
          img={finder3_img}
          imgMob={finder3_img_mob}
          imgBefore={finder3_img_before}
          left
          spanText={'Step 3'}
          title={'Explore top niche players'}
          text={'Improve your strategy or find free niches where you can reach the top.'}
          text2={'Analyze the main players and their metrics to better understand who you have to compete with in a niche.'}
        />
      </div>
      {/* ---------------------------- */}
      <TextAndImg
        img={finder4_img}
        imgMob={finder4_img_mob}
        spanText={'Step 4'}
        title={'Save & share your selection'}
        text={'Stay on top of your niche using personalized Collection dashboards.'}
        text2={'Add custom widgets and share data with your entire team.'}
      />
      {/* ---------------------------- */}
      <Features
        obj={[
          {
            icon: <SavedSearch />,
            title: 'Power search',
            text: 'Customize search filters to fit your needs',
          },
          {
            icon: <StarOutline />,
            title: 'Custom insights',
            text: 'Save a report or selected applications for further monitoring',
          },
          {
            icon: <Cached />,
            title: 'Data auto-update',
            text: 'Data in your saved reports and collections stays current with automatic updates',
          },
        ]}
      />
      {/* ---------------------------- */}
      <GetStart title={'Ready to get started?'} paragraph={'Try Niche Finder Now!'} search />
    </div>
  );
}

export default Finder;
