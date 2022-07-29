import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';

import slide from '../assets/slide1.png';

function AppMarketing( { title } ) {
  return (
    <div className="app-page__marketing">
      <h3>Best «{title}» Images and Marketing Description.</h3>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        navigation={true}
        modules={[EffectCreative, Navigation]}>
        <SwiperSlide>
          <img src={slide} alt="slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide} alt="slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide} alt="slide" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide} alt="slide" />
        </SwiperSlide>
      </Swiper>

      <div className="app-page__paragraphs">
        <p>
          App displays growing trends in 2022 among Business apps for Android on
          Google Play. Good dynamic of downloads shows that in 2022 Zoom Cloud Meetings App reached
          500M+ Installs.
        </p>
        <p>Zoom.us Company made revenue on Zoom Cloud Meetings App in January of 500M+ USD.</p>
        <p style={{ color: 'transparent' }}>
          Today Zoom Cloud Meetings App ranking 4,4 with 13,9K votes and has 15,7K reviews in total.
        </p>
        <div className="app-page__paragraphs--shadow">
          {' '}
          Today Zoom Cloud Meetings App ranking 4,4 with 13,9K votes and has 15,7K reviews in total.
        </div>
      </div>
      <span className="app-page__paragraphs--span">SHOW MORE</span>
    </div>
  );
}

export default AppMarketing;
