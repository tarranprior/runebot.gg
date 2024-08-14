import * as React from "react";
import { Link } from '@reach/router';

import moment from 'moment';

// Config
import { developerURL } from '../config';

// Styles
import styled from 'styled-components';
import mixins from '../styles/mixins';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
  ${() => mixins.flexBetween};
  background-color: var(--white);
  color: var(--grey);
  text-align: center;
  margin-top: -1rem !important;

  .container {
    ${() => mixins.flexBetween};
    text-align: left !important;
    padding-top: 5rem;
    padding-bottom: 2.75rem;
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center !important;
      font-size: 24px;
    }
  }

  a, p {
    color: var(--grey);
    font-size: 14px;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  a {
    :hover {
      color: var(--blurple) !important;
    }
  }

  div {
    margin-top: -1.5rem;
    padding-bottom: 0.75rem;
  }

  ul {
    list-style-type: none;
    li {
      padding: 2px;
    }
  }

  .footer-nav-container {
    ${() => mixins.flexBetween};
    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: 2.5rem;
    }
  }

  .footer-nav {
    margin-left: 2.75rem;
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    @media (max-width: 768px) {
      margin-left: 0;
      margin-bottom: 5rem;
    }
  }

  .logo-container {
    margin-top: -2.75rem;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .logo {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 24px;
    font-weight: 300;
    @media (max-width: 768px) {
      padding-top: 1.5rem;
    }
  }

  .icon {
    margin-right: 0.25rem;
    padding-bottom: 0.25rem;
  }

  .social-icons {
    li {
      display: inline;
      padding-right: 0.75rem;
    }
  }
  .social-icon {
    padding-top: 1.25rem;
    font-size: 20px;
  }

  .copyright {
    margin-top: 1.5rem;
  }
  .copyright-bottom {
    display: none;
    @media (max-width: 768px) {
      display: inline;
      font-size: 16px;
    }
  }
`;

function Footer() {
  return (
    <>
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--white)" fill-opacity="1" d="M0,0L34.3,37.3C68.6,75,137,149,206,154.7C274.3,160,343,96,411,101.3C480,107,549,181,617,192C685.7,203,754,149,823,117.3C891.4,85,960,75,1029,85.3C1097.1,96,1166,128,1234,128C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      <StyledFooter>
        <div className="container">
          <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            <div className="logo-container">
              <p><Link to="/" className="logo">Rune<strong>bot</strong></Link></p>
              <p>The open-source RuneScape lookup tool for Discord.</p>
              <ul className="social-icons">
                <li><a href="https://github.com/tarranprior/runebot" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faGithub} size="1x" /> </a></li>
                <li><a href="https://runebot.org/support" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faDiscord} size="1x" /> </a></li>
              </ul>
              <p className="copyright">
                Copyright © {moment().year()} <a href={developerURL} target="_blank" rel="noopener noreferrer">Runebot</a>
              </p>
            </div>
          </div>
          <div className="footer-nav-container">
            <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
              <div className="footer-nav">
                <h4>Runebot</h4>
                <ul>
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/">Our Team</Link></li>
                  <li><Link to="/">Documentation</Link></li>
                </ul>
              </div>
            </div>
            <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
              <div className="footer-nav">
                <h4>Support</h4>
                <ul>
                  <li><a href="https://runebot.org/support" target="_blank" rel="noreferrer">Community</a></li>
                  <li><Link to="/">FAQ</Link></li>
                  <li><Link to="/">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
              <div className="footer-nav">
                <h4>Legal</h4>
                <ul>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms of Service</Link></li>
                  <li><a href="https://dmca.com/site-report/runebot.org" target="_blank" rel="noreferrer">DMCA</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            <p className="copyright-bottom">
              Copyright © {moment().year()} <a href={developerURL} target="_blank" rel="noopener noreferrer">Runebot</a>
            </p>
          </div>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;