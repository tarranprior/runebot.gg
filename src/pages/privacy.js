import * as React from "react";
import { Link } from '@reach/router';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Styles
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

const StyledBody = styled.body`
  background-color: var(--white);
  color: var(--dark-grey);

  h2, h3 {
    margin-top: 3.25rem;
    font-weight: 600;
  }
  h4 {
    margin-top: 2.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--dark-grey);
  }
  a:hover {
    color: var(--blurple);
  }

  strong {
    font-weight: 600;
  }

  ol {
    padding: 0.75rem 0 0 1.25rem;
    li, p {
      list-style-type: none;
      font-size: 16px;
    }
  }

  pre {
    padding-bottom: 3.5rem;
  }

  .waves {
    display: none;
  }

  .bottom-text {
    padding-bottom: 200px;
  }
`;

export default function Home() {
  return (
    <StyledBody>
      <GlobalStyle />
      <Navbar />
      <div className="container">
        <h2>Our Privacy Policy</h2>
        <p>Your privacy is important to us.</p>
        <p>It is Runebot's policy to respect your privacy regarding any information we may collect from you across our Discord bot, <Link to="/">https://runebot.org</Link>, and other websites we own and operate (hereinafter, "us", "we", "runebot.org" or "our".)</p>
        <h3>Data Collection & Use</h3>
        <p>We try our best to avoid collecting data unless it's necessary for the functionality of Runebot. The only information our Discord bot collects is the data you provide us, which is entirely optional.</p>
        <p>This data includes:</p>
        <ol>
          <li><p><strong>Discord User ID</strong> if you choose to set an RSN, which allows us to connect your Discord account to your RuneScape account.</p></li>
          <li><p><strong>RuneScape Account Data</strong> if you choose to set an RSN. This includes your Old School RuneScape display name, skill levels and experience, and other similar stats.</p></li>
        </ol>
        <h4>Hosting Provider</h4>
        <p>Netlify provides hosting for this website, and may collect usage data including information such as your device’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. The operators of this website do not have access to this data.</p>
        <ol>
          <li><a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer">Netlify's Privacy Policy</a></li>
          <li><a href="https://www.netlify.com/gdpr-ccpa/" target="_blank" rel="noreferrer">Netlify's GDPR Commitment</a></li>
        </ol>
        <h4>How We Collect Information</h4>
        <p>We collect information by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. You are free to refuse our request for this information, with the understanding that we may be unable to provide you with some of your desired services without it.</p>
        <h4>Data Retention</h4>
        <p>We store your data for as long as required or until a data deletion request is made.</p>
        <h3>Disclosure of Data</h3>
        <p>We care about your data. We will not give your user information to anyone outside of our team, other than in the belief that such action is necessary to:</p>
        <ol>
          <li>Comply with a legal obligation.</li>
          <li>Protect and defend the rights or property of Runebot.</li>
          <li>Prevent or investigate possible wrongdoing in connection with the service.</li>
          <li>Protect the personal safety of users of the service or the public.</li>
          <li>Protect against legal liability.</li>
        </ol>
        <br/>
        <p>We will never sell or rent your data to third parties.</p>
        <h3>Security</h3>
        <p>We value your trust in providing us your personal data, thus we are striving to use a commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
        <h3>Data Deletion</h3>
        <p>If you wish for us to delete your data, please email us at <a href="mailto:privacy@runebot.org">privacy@runebot.org</a> and we'll delete your data within 48 hours.</p>
        <h3>Changes To This Policy</h3>
        <p>We may update this privacy policy to reflect changes to our information practices. If we do make any changes, we will notify you by means of a notice on this website prior to the change becoming effective. We encourage you to frequently review this page for the latest information on our privacy practices.</p>
        <h3>Contact Us</h3>
        <p className="bottom-text">You have the right to access, update or delete your personal data at any time. If you have any questions or concerns about this policy, please contact us at <a href="mailto:privacy@runebot.org">privacy@runebot.org</a> or join our <a href="https://runebot.org/support" target="_blank" rel="noreferrer">support server</a>.</p>
      </div>
      <Footer />
    </StyledBody>
  );
};

export function Head() {
  return (
    <title>Our Privacy Policy - Runebot</title>
  );
};