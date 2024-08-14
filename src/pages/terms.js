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
        <h2>Our Terms of Service</h2>
        <p>Runebot (hereinafter "us", "we", "runebot.org", or "our") operates the <Link to="/">https://runebot.org</Link> website and the Runebot Discord bot (the "service".)</p>
        <h3>Terms</h3>
        <p>By accessing this website, <Link to="/">https://runebot.org</Link>, or using the Runebot Discord bot, you agree to be bound to the terms of service, all applicable laws, regulations, and agree that you are responsible for compliance with any applicable laws of the place where the owner is based. If you do not acknowledge and agree to these terms, you are prohibited from using or accessing this website and the Runebot Discord bot.</p>
        <h3>Limitations</h3>
        <p>In no event shall Runebot be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Runebot's website or Discord bot, even if Runebot or a Runebot authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
        <h3>Use License</h3>
        <p>Permission to use, copy, modify, and/or distribute this website for any purpose with or without fee is hereby granted. We stand by free and open-source software.</p>
        <h3>Accuracy of Materials</h3>
        <p>The materials appearing on Runebot's website and Discord bot could include technical, typographical, or photographic errors. Runebot does not warrant that any of the materials on its website are accurate, complete or current. Runebot may make changes to the materials contained on its website at any time without notice. However Runebot does not make any commitment to update the materials.</p>
        <h3>Modification</h3>
        <p>Runebot may revise these terms of service for its website and Discord bot at any time without notice. By using this website or the Runebot Discord bot you are agreeing to be bound by the then current version of these terms of service.</p>
        <h3>Contact Us</h3>
        <p className="bottom-text">If you have questions or concerns with regards to these Terms of Service, we'd love to chat! Please contact us at <a href="mailto:hello@runebot.org">hello@runebot.org</a> or join our <a href="https://runebot.org/support" target="_blank" rel="noreferrer">support server</a>.</p>
      </div>
      <Footer />
    </StyledBody>
  );
};

export function Head() {
  return (
    <title>Our Terms of Service - Runebot</title>
  );
};