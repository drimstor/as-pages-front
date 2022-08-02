import React from 'react';
import { AppInfo, AppMarketing, AppReports, AppRankings, AppNotification } from '../components';
import { ModalContext } from '../contexts';

import { Breadcrumbs, Link, Typography, Divider, IconButton } from '@mui/material';
import { NavigateNext, AutoGraph, ArrowBackIos } from '@mui/icons-material';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../assets/img/app-logo.svg';
import flag from '../assets/img/flag-uk.svg';

// Прогресс бар
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  const heightBar = document.querySelector('.app-page__nav--progress-bar');
  heightBar.style.height = scrolled + '%';

  const ul = heightBar.closest('ul').querySelectorAll('li');
  function clearLiActive() {
    ul.forEach((element) => element.classList.remove('--active'));
  }
  if (scrolled > 25 && scrolled < 50) {
    clearLiActive();
    ul[1].classList.add('--active');
  } else if (scrolled > 50 && scrolled < 75) {
    clearLiActive();
    ul[2].classList.add('--active');
  } else if (scrolled > 75 && scrolled < 101) {
    clearLiActive();
    ul[3].classList.add('--active');
  } else {
    clearLiActive();
    ul[0].classList.add('--active');
  }
}

function AppPage() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Collections
    </Link>,
    <Link underline="hover" key="3" color="inherit">
      Collection 1
    </Link>,
    <Typography key="4" color="text.primary">
      Zoom Cloud Meetings
    </Typography>,
  ];

  const { matches769 } = React.useContext(ModalContext);

  return (
    <div className="app-page">
      {/* ---------------------------- */}
      <AppNotification title={'ZOOM Cloud Meetings'} />
      {/* ---------------------------- */}
      <Divider />
      {/* ---------------------------- */}
      <div className="wrapper">
        {matches769 ? (
          <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        ) : (
          <div className="app-page__back">
            <IconButton aria-label="back">
              <ArrowBackIos />
            </IconButton>
          </div>
        )}
        {/* ---------------------------- */}
        <span className="app-page__reward">TOP 5 Apps like «Zoom Cloud Meetings» app</span>
        {/* ---------------------------- */}
        <div className="flex-wrapper">
          <div className="anchor" id="app-info"></div>
          <div className="app-page__wrapper">
            <AppInfo
              logo={logo}
              flag={flag}
              title={'ZOOM Cloud Meetings'}
              category={'Business'}
              link={'zoom.us'}
              description={
                'Zoom is a free HD meeting app with video and screen sharing up to 100 people.'
              }
            />
            {/* ---------------------------- */}
            <div className="anchor" id="app-reports"></div>
            <AppReports title={'ZOOM Cloud Meetings'} />
            {/* ---------------------------- */}
            <div className="app-page__prompt">
              <AutoGraph />
              <div className="app-page__prompt--wrap">
                <h4>Ready to discover more Features?</h4>
                <p>
                  Navigate the digital landscape with AppstoreSpy’s next-generation, digital
                  analytics platform.
                </p>
                <span className="app-page__reward">Upgrade now</span>
              </div>
            </div>
            {/* ---------------------------- */}
            <div className="anchor" id="app-marketing"></div>
            <AppMarketing title={'ZOOM Cloud Meetings'} />
            {/* ---------------------------- */}
            <div className="anchor" id="app-rankings"></div>
            <AppRankings title={'ZOOM Cloud Meetings'} />
          </div>
          <div className="app-page__nav-wrapper">
            <div className="app-page__nav">
              <p>CONTENTS</p>
              <ul>
                <div className="app-page__nav--progress-container">
                  <div className="app-page__nav--progress-bar"></div>
                </div>
                <AnchorLink href="#app-info" offset=" 100 ">
                  <li className="--active">Metrics summary</li>
                </AnchorLink>
                <AnchorLink href="#app-reports" offset=" 0 ">
                  <li>Reports</li>
                </AnchorLink>
                <AnchorLink href="#app-marketing" offset=" 110 ">
                  <li>About</li>
                </AnchorLink>
                <AnchorLink href="#app-rankings" offset=" 0 ">
                  <li>Rankings</li>
                </AnchorLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppPage;
