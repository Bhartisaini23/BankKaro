import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social-media">
          <li>Twitter</li>
          <li>Instagram</li>
        </div>
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, et dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex.
        </p>
        <div className="app-buttons">
          <button className="app-store-button">App Store</button>
          <button className="google-play-button">Google Play</button>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About BankKaro</li>
            <li>Vision and Mission</li>
            <li>Our Team Members</li>
            <li>Partners and Investors</li>
           </ul> 
        </div>
        <div className="footer-column">
          <h4>Blog</h4>
          <ul>
            <li>BankKaro Savings</li>
            <li>Cashless Makes Perfect</li>
            <li>BankKaro No Interest</li>
            <li>BankKaro Digital Wallet</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Features</h4>
          <ul>
            <li>Card Genius</li>
            <li>Lounge Finder</li>
            <li>Beat My Card</li>
            <li>Compare Card</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
        </p>
        <div className="footer-links">
          <div className="contact">
            <h4>Contact</h4>
            <ul>
              <li>Contact Us</li>
              <li>Contact Support</li>
            </ul>
          </div>
          <div className="legal">
            <h4>Legal</h4>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2024 BankKaro Powered by Posting Pounds</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
