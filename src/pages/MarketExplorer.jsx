import React from 'react';

import { Title, Features, GetStart, SeeDown, TextAndImg } from '../components';

import { Extension, GridOn, Timeline } from '@mui/icons-material';

import title_img from '../assets/img/Screenshot_2022-07-2.webp';
import top_img from '../assets/img/2022-07-20_160651.jpg';
import top1_img from '../assets/img/2022-07-20_160709.PNG';
import top2_img from '../assets/img/2022-07-20_160702.jpg';

function MarketExplorer() {
  return (
    <div className="market-explorer">
      {/* ---------------------------- */}
      <Title
        img={title_img}
        // imgMob={title_img_mob}
        title={'Dig into the full range of apps and developers in a few clicks'}
        paragraph={
          'Improve your strategy with unlimited access to mobile market insights. Millions of apps from 1.7 million developers at your fingertips'
        }
        // buttonClick={handleModalSingUp}
        buttonText={'Get started'}
      />
      {/* ---------------------------- */}
      <SeeDown text={'What you can do with Market Explorer'} />
      {/* ---------------------------- */}
      <TextAndImg
        img={top_img}
        // imgMob={top_img_mob}
        left
        title={'Make quick decisions with our smart search'}
        text={
          'A custom search to find the apps and developers you need. Use 30+ filters to find the information you need to form the best strategy for your projects.'
        }
      />
      {/* ---------------------------- */}
      <TextAndImg
        img={top1_img}
        // imgMob={top1_img_mob}
        title={'Stay ahead of the competition'}
        text={'Keep your eyes open and stay up to date with competitors` key metrics!'}
        text2={'You`ll have access to the basics & more:'}
        ul={['Installs', 'Revenue', 'Rating', 'Updates', 'Availability', 'Categories']}
      />
      {/* ---------------------------- */}
      <TextAndImg
        img={top2_img}
        // imgMob={top_img_mob}
        left
        title={'Get customized reports and automate your work'}
        text={
          'Set up the metrics you need, save your filters, add the apps and developers you want to watch to your collection and stay tuned to the latest updates in your niche with just a couple of clicks.'
        }
      />
      {/* ---------------------------- */}
      <div className="table-features">
        <Features
          title={'AppstoreSpy will fit your needs'}
          obj={[
            {
              icon: <Extension />,
              title: 'Chrome Plugin',
              text: 'Install AppstoreSpy Chrome Extension to automatically embed app data directly into Google Play Store.',
              // link: '#',
            },
            {
              icon: <GridOn />,
              title: 'Niche Finder',
              text: 'Build and grow the next hot app by finding and tracking the right market  niche for you.',
              // link: '#',
            },
            {
              icon: <Timeline />,
              title: 'App Timeline',
              text: 'Track all available recent app changes to analyze what influences app performance.',
              // link: '#',
            },
          ]}
        />
      </div>
      {/* ---------------------------- */}
      <GetStart
        buttonText={'Get started now'}
        title={'Ready to get started?'}
        // buttonClick={handleModalSingUp}
      />
    </div>
  );
}

export default MarketExplorer;
