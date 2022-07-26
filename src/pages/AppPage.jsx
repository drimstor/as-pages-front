import React from 'react';

import { Breadcrumbs, Link, Typography, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
  return (
    <div className="app-page">
      <div className="wrapper">
        <div className="app-page__notification">
          <h4>Zoom Cloud Meetings app Trends and Statistics 2022</h4>
          <span>App’s Downloads, Revenue and Ratings by Сountry</span>
          <p>
            Zoom Cloud Meetings App displays growing trends in 2022 among Business apps for Android
            on Google Play. Good dynamic of downloads shows that in 2022 Zoom Cloud Meetings App
            reached 500M+ Installs. Zoom.us Company made revenue on Zoom Cloud Meetings App in
            January of 500M+ USD. Today Zoom Cloud Meetings App is ranking with 4,4 stars (13,9K
            votes) and has 15,7K reviews in total. Zoom Cloud Meetings App was updated on Mar 3,
            2022 to the latest Ver 3.1. current Version now. Trending Zoom Cloud Meetings App in
            Business Category was released 8 years ago on Mar 1, 2014.
          </p>
        </div>
      </div>

      <Divider />
      
      <div className="wrapper">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default AppPage;
