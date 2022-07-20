import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__list">
          <ul>
            <li>Products</li>
            <li>
              <a href="#top">Apps Database (Google & Apple App Stores)</a>
            </li>
            <li>
              <a href="#top">App Watchlists</a>
            </li>
            <li>
              <a href="#top">Recent Apps</a>
            </li>
            <li>
              <a href="#top">Fresh Ads</a>
            </li>
          </ul>
          <ul>
            <li>Free tools</li>
            <li>
              <a href="#top">Chrome extension for Play Store</a>
            </li>
            <li>
              <a href="#top">Top Charts</a>
            </li>
            <li>
              <a href="#top">Google Play Pass Full List</a>
            </li>
          </ul>
          <ul>
            <li>Contacts</li>
            <li>
              <a className="footer__email" href="#top">
                support@appstorespy.com
              </a>
            </li>
          </ul>
        </div>
        <p>
          Applications listed on appstorespy.com are from the Google Play Store and the Apple App
          Store® and all the rights belong to their respective owners. Android, Google Play and the
          Google Play logo are trademarks of Google LLC.
          <br />
          App Store® and iTunes® are trademarks of Apple Inc. Any third party trademark and/or logo
          displayed on this website, shall NOT be interpreted as any sponsorship, endorsement and/or
          affiliation with appstorespy.
        </p>
        <div className="footer__copyright">
          <span>2022 AppstoreSpy©</span>
          <a href="#top">AGREEMENT</a>
          <a href="#top">PRIVACY</a>
        </div>
      </div>
    </footer>
  );
}
