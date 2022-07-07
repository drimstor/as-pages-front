import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__list">
          <ul>
            <li>Products</li>
            <li>
              <a href="#">Apps Database (Google & Apple App Stores)</a>
            </li>
            <li>
              <a href="#">App Watchlists</a>
            </li>
            <li>
              <a href="#">Recent Apps</a>
            </li>
            <li>
              <a href="#">Fresh Ads</a>
            </li>
          </ul>
          <ul>
            <li>Free tools</li>
            <li>
              <a href="#">Chrome extension for Play Store</a>
            </li>
            <li>
              <a href="#">Top Charts</a>
            </li>
            <li>
              <a href="#">Google Play Pass Full List</a>
            </li>
          </ul>
          <ul>
            <li>Contacts</li>
            <li>
              <a className='footer__email' href="#">support@appstorespy.com</a>
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
          <span>© 2022 AppstoreSpy</span>
          <a href="#">AGREEMENT</a>
          <a href="#">PRIVACY</a>
        </div>
      </div>
    </footer>
  );
}
