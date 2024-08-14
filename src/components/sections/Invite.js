import * as React from "react";

// Styles
import styled from 'styled-components';
import mixins from '../../styles/mixins';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStar } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const StyledInviteSection = styled.section`
  margin: 12em 0;
  .container {
    max-width: 800px;
  }

  p {
    padding-bottom: 36px;
  }

  .invite-button {
    ${() => mixins.lgButton};
    font-weight: 600;
    color: var(--white);
    background-color: var(--grey);
  }

  .server-button {
    ${() => mixins.lgButton};
    font-weight: 600;
    color: var(--dark-grey);
    background-color: var(--white);
  }

  .github-button {
    ${() => mixins.lgButton};
    font-weight: 600;
    color: var(--white);
    background-color: var(--grey);
  }

  .support-server {
    float: right;
    margin: 6rem 0;
  }

  .support-us {
    float: left;
    margin: 1em 0;
    @media (max-width: 468px) {
      float: right;
    }
  }
`;

function Invite() {

  const inviteButton = (<a href="https://runebot.org/invite" className="invite-button wobble-on-hover" target="_self"><FontAwesomeIcon className="fa-icon" icon={faDiscord} size="1x" />Invite To Discord</a>)
  const serverButton = (<a href="https://runebot.org/support" className="server-button wobble-on-hover" target="_self"><FontAwesomeIcon className="fa-icon" icon={faUsers} size="1x" />Join Support Server</a>)
  const githubButton = (<a href="https://github.com/tarranprior/runebot" className="github-button wobble-on-hover" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fa-icon" icon={faStar} size="1x" />Star on GitHub</a>)

  return (
    <StyledInviteSection id="invite">
      <div className="container">
        <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          <h2>Ready to invite Runebot?</h2>
          <p>You've already came this far! Why not try it out?!</p>
          {inviteButton}
        </div>
        <div data-sal="slide-up" data-sal-delay="600" data-sal-easing="ease">
          <div className="support-server">
            <h2>Still have questions?</h2>
            <p>Join the support server and ask away!</p>
            {serverButton}
          </div>
        </div>
        <div data-sal="slide-up" data-sal-delay="900" data-sal-easing="ease">
          <div className="support-us">
            <h2>Fancy supporting us?</h2>
            <p>The best way to support us is by using Runebot in your server, and dropping a <FontAwesomeIcon className="icon" icon={faStar} size="1x" /> on our <a href="https://github.com/tarranprior/runebot" target="_blank" rel="noreferrer">Github</a> repo!</p>
            {githubButton}
          </div>
        </div>
      </div>
    </StyledInviteSection>
  );
};

export default Invite;