import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Notifications, { notify } from "react-notify-toast";

import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
// import Youtube from "content/assets/images/portfolio/Youtube.png";
// import YoutubeHover from "content/assets/images/portfolio/YoutubeHover.png";
import YoutubeComingSoon from "content/assets/images/portfolio/YoutubeComingSoon.png";
import "./Ceremony.scss";

const Ceremony = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader } = frontmatter;

  const copiedToClipboard = () => {
    const alertColor = { background: "#9ebc9f", text: "white" };
    notify.show(
      "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
      "custom",
      5000,
      alertColor,
    );
  };

  const Completionist = () => {
    return (
      <span className="finishedCountdown">
        <div className="countdownIntro">The ceremony is now live!</div>
        <div className="joinButtonWrapper">
          <div>
            <a href="https://www.youtube.com/watch?v=SCOKysMnH50" target="_blank" rel="noreferrer">
              <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
                <p className="buttonTitle">Join Now!</p>
              </Button>{" "}
              <br />
            </a>
          </div>
        </div>{" "}
        {/* joinButtonWrapper */}
        <div className="vendors">
          <p>
            Hosted at
            <a
              href="https://weddingz.in/nagpur/kachore-lawns-manish-nagar/"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              Kachore Lawns
            </a>
          </p>
          <p>
            Address
            <a
              href="https://goo.gl/maps/Hb73Z84ZymLP8STV8"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              Plot no.1, Beltarodi Road, Opposite Amar Sanjay Housing Society Layout, Manish Nagar,
              Somalwada, Nagpur, Maharashtra 440025
            </a>
          </p>
          <p>
            Hosted by
            <a
              href="http://cellobosco.com/"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              Raut and Family
            </a>
          </p>
          <p>
            Photos by
            <a
              href="https://anaisabelphotography.com/"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              Yet to decide
            </a>
            !
          </p>
        </div>{" "}
        {/* vendors */}
      </span> // finishedCountdown
    );
  };

  const renderer = () => {
    return <Completionist />;
  };

  return (
    <div className="outerWrapper">
      <PageSection className={clsx("ceremony-section", className)} id={anchor}>
        <Notifications options={{ zIndex: 200, top: "50px" }} />
        <Row className="justify-content-center ceremony-header">
          <SectionHeader header={header} subheader={subheader} />
          <div className="joinButtonWrapper">
            <div>
              <a
                href="https://www.youtube.com/watch?v=SCOKysMnH50"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
                  <p className="buttonTitle">Watch the Ceremony</p>
                </Button>{" "}
                <br />
              </a>
            </div>
          </div>{" "}
          {/* joinButtonWrapper */}
        </Row>
        <div className="countdownAndVideoDiv">
          <Row className="vendorDiv">
            <span className="finishedCountdown">
              <div className="vendors">
                <p className="singleVendor">
                  Hosted at
                  <a
                    href="https://weddingz.in/nagpur/kachore-lawns-manish-nagar/"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kachore Lawns
                  </a>
                </p>{" "}
                {/* singleVendor */}
                <p className="singleVendor">
                  Address
                  <a
                    href="https://goo.gl/maps/G6gPQsrGnhGoaVbm6"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kachore Lawns, Plot no.1, Beltarodi Road, Opposite Amar Sanjay Housing Society
                    Layout, Manish Nagar, Somalwada, Nagpur, Maharashtra 440025
                  </a>
                </p>{" "}
                {/* singleVendor */}
                <p className="singleVendor">
                  Hosted by
                  <a
                    href="http://cellobosco.com/"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Raut
                  </a>
                  &nbsp;and
                  <a
                    href="https://nickmontopoli.com/"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Family
                  </a>
                </p>{" "}
                {/* singleVendor */}
                <p className="singleVendor">
                  Photos by
                  <a
                    href="https://anaisabelphotography.com/"
                    className="countdownLinks"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yet to decide
                  </a>
                </p>{" "}
                {/* singleVendor */}
              </div>{" "}
              {/* vendors */}
            </span>{" "}
            {/* finished countdown */}
          </Row>{" "}
          {/* vendorDiv */}
          <Row className="videoDiv">
            <a
              href="https://www.youtube.com/watch?v=SCOKysMnH50"
              target="_blank"
              rel="noreferrer"
              className="youtubeLink"
            >
              <div className="container">
                <img
                  src={YoutubeComingSoon}
                  alt="youtubeLink"
                  className="image"
                  width="560"
                  height="auto"
                />
                <div className="middle">
                  <img
                    src={YoutubeComingSoon}
                    alt="youtubeLink"
                    className="imageHover"
                    width="560"
                    height="auto"
                  />
                </div>{" "}
                {/* middle */}
              </div>{" "}
              {/* container */}
            </a>
          </Row>{" "}
          {/* videoDiv */}
        </div>{" "}
        {/* countdownAndVideoDiv */}
      </PageSection>
    </div>
  );
};

Ceremony.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Ceremony.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Ceremony;
