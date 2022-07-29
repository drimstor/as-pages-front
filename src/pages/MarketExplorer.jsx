import React from 'react';

import { Title, Features, GetStart, SeeDown, TextAndImg } from '../components';

import { Groups, BusinessCenter, Hail } from '@mui/icons-material';

import title_img from '../assets/img/market-explorer-title.png';
import title_img_mob from '../assets/img/market-explorer-title-mob.png';
import top_img from '../assets/img/market-explorer-img1.png';
import top1_img from '../assets/img/market-explorer-img2.png';
import top2_img from '../assets/img/market-explorer-img3.png';

function MarketExplorer() {
  return (
    <div className="market-explorer">
      {/* ---------------------------- */}
      <Title
        img={title_img}
        imgMob={title_img_mob}
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
              icon: <Groups />,
              title: 'For teams',
              text: 'Make data-driven decisions:',
              ul: ['Find your competitors', 'Track their key metrics', 'Study your market niche'],
              text2: 'Build your app with insights into 1.7M other developers',
            },
            {
              icon: <BusinessCenter />,
              title: 'For business development',
              text: 'Build & improve market strategies:',
              ul: ['Use tailored searches', 'Track your competitors', 'Customize your analytics'],
              text2: 'Stay on top of your niche with insights into 13 million apps',
            },
            {
              icon: <Hail />,
              title: 'For investors',
              text: 'Invest smart with easy research:',
              ul: [
                'Use 30+ search filters',
                'Track top market performers',
                'Find the best new opportunities',
              ],
              text2: 'Get onboard the hottest projects with access to pro market insights',
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
