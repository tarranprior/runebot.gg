import * as React from "react";
import { Link } from '@reach/router';

// Styles
import styled from 'styled-components';
import mixins from '../../styles/mixins';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const StyledHeroSection = styled.section`

  ${() => mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start; 
  min-height: 50vh;
  padding-top: 5em;

  p {
    max-width: 750px;
    margin-bottom: 1.75rem;
  }

  strong {
    font-weight: 600;
  }

  .buttons {
    ${() => mixins.flexCenter};
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .explore-button {
      ${() => mixins.lgButton};
      font-weight: 600;
      background-color: var(--white);
      margin-right: 1.25rem;
      transition: var(--transition);
      p {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--dark-grey) !important;
      }
      @media (max-width: 768px) {
        margin-bottom: 1.25rem;
        transition: var(--transition);
      }
    }

    .invite-button {
      ${() => mixins.lgButton};
      font-weight: 600;
      background-color: var(--grey);
      p {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--white) !important;
      }
      @media (max-width: 768px) {
        margin-bottom: 3.75rem;
      }
    }
  }
`;

function Hero() {

  const heroHeader = <h1>The open-source RuneScape lookup tool for Discord.</h1>
  const heroText = <p>Runebot is a feature rich Discord bot which scrapes, pulls and displays information about the popular MMORPG <strong>Old School RuneScape</strong>.</p>
  const heroComponents = [heroHeader, heroText]

  const exploreButton = (<p>Learn More</p>)
  const inviteButton = (<p><FontAwesomeIcon className="fa-icon" icon={faDiscord} size="1x" />Invite to Discord</p>)

  return (
    <>
      <div className="container">
        <StyledHeroSection>
          {heroComponents.map((component, i) => (
            <div key={i} data-sal="slide-up" data-sal-delay="600" data-sal-easing="ease" data-sal-duration="500">{component}</div>
          ))}
          <div data-sal="slide-up" data-sal-delay="600" data-sal-easing="ease">
            <div className="buttons">
              <Link to="#features">
                <div className="explore-button wobble-on-hover">
                  {exploreButton}
                </div>
              </Link>
              <a href="https://runebot.org/invite" target="_blank" rel="noopener noreferrer">
                <div className="invite-button wobble-on-hover">
                {inviteButton}
                </div>
              </a>
            </div>
          </div>
        </StyledHeroSection>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--white)" fill-opacity="10" d="M0,32L40,69.3C80,107,160,181,240,181.3C320,181,400,107,480,90.7C560,75,640,117,720,149.3C800,181,880,203,960,192C1040,181,1120,139,1200,122.7C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </>
  );
};

export default Hero;