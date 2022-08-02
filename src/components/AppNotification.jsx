import React from 'react';

function AppNotification({ title }) {
  const notification = React.useRef(null);
  function hideNotification() {
    notification.current.style.marginTop = `-${notification.current.clientHeight - 65}px`;
  }
  return (
    <div className="wrapper">
      <div className="app-page__notification" ref={notification}>
        <a href="#top" onClick={hideNotification}>
          Hide
        </a>
        <h4>{title} app Trends and Statistics 2022</h4>
        <span>App’s Downloads, Revenue and Ratings by Сountry</span>
        <p>
          {title} App displays growing trends in 2022 among Business apps for Android on Google
          Play. Good dynamic of downloads shows that in 2022 {title} App reached 500M+ Installs.
          Zoom.us Company made revenue on {title} App in January of 500M+ USD. Today {title} App is
          ranking with 4,4 stars (13,9K votes) and has 15,7K reviews in total. {title} App was
          updated on Mar 3, 2022 to the latest Ver 3.1. current Version now. Trending {title} App in
          Business Category was released 8 years ago on Mar 1, 2014.
        </p>
      </div>
    </div>
  );
}

export default AppNotification;
