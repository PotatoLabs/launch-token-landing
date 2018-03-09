import React, { Component } from "react";
import styled from "styled-components";
import Notification from "views/shared/notification";
import Header from "views/shared/header";
import Logo from "views/shared/logo";
import Navigation from "views/shared/navigation";
import NavigationLink from "views/shared/navigation-link";
import NavigationButton from "views/shared/navigation-button";
import Banner from "views/homepage/banner";
import BannerSection from "views/homepage/banner-section";
import Tagline from "views/homepage/tagline";
import Caption from "views/homepage/caption";
import TextInput from "views/shared/text-input";
import Text from "views/shared/text";
import Floater from "views/homepage/floater";
import Countdown from "views/homepage/countdown";
import Slanted from "views/homepage/slanted";
import SectionTitle from "views/homepage/section-title";
import Instructions from "views/homepage/instructions";
import Feature from "views/homepage/feature";
import Summary from "views/homepage/summary";
import Roadmap from "views/homepage/roadmap";
import TokenAllocation from "views/homepage/token-allocation";
import Team from "views/homepage/team";
import Media from "views/homepage/media";
import Footer from "views/shared/footer";

import IMAGES from "assets/images";

const PaddedContainer = styled.div`
  padding: 0 20%;
  width: 100%;
`;

class Homepage extends Component {
  render() {
    return (
      <div>
        <Notification>
          Invests in Unsplash -- To create the new currency for photography.
          Learn More
        </Notification>
        <Banner>
          <Header>
            <Logo />
            <Navigation>
              <NavigationLink href="www.google.com">HOME</NavigationLink>
              <NavigationLink href="www.google.com">ABOUT</NavigationLink>
              <NavigationLink href="www.google.com">TEAM</NavigationLink>
              <NavigationLink href="www.google.com">ROADMAP</NavigationLink>
              <NavigationLink href="www.google.com">CONTACT</NavigationLink>
              <NavigationButton href="www.google.com">
                WHITEPAPER
              </NavigationButton>
              <NavigationButton highlighted href="www.google.com">
                REGISTER
              </NavigationButton>
            </Navigation>
          </Header>
          <BannerSection>
            <Tagline>Create Your Stunning Website</Tagline>
            <Caption>
              Launch Token allows you to create beautiful ICO landing pages in
              minutes. It's drag and drop.
            </Caption>
            <div className="separated">
              <TextInput placeholder="Email address" />
              <NavigationButton highlighted href="www.google.com">
                PRE-REGISTER >>>
              </NavigationButton>
            </div>
            <NavigationButton href="www.google.com">
              WATCH VIDEO >
            </NavigationButton>
          </BannerSection>
          <BannerSection>
            <img src={IMAGES.BANNER_GRAPHIC} width="500" height="432" />
          </BannerSection>
          <Floater>
            <Text white>LEARN MORE</Text>
            <img src={IMAGES.BANNER_SCROLL} />
          </Floater>
        </Banner>
        <Countdown />
        <Slanted>
          <PaddedContainer>
            <SectionTitle centered>How It Works</SectionTitle>
            <Instructions />
          </PaddedContainer>
        </Slanted>
        <Slanted colored>
          <PaddedContainer>
            <Feature
              imageOnLeft
              graphic={IMAGES.FEATURE_GRAPHIC_1}
              icon={IMAGES.FEATURE_ICON_1}
              title={"No Coding Skills Required"}
              description={
                "Drag and drop photos, put beautiful timers and so much moretha"
              }
            />
          </PaddedContainer>
        </Slanted>
        <Slanted>
          <PaddedContainer>
            <Feature
              graphic={IMAGES.FEATURE_GRAPHIC_2}
              icon={IMAGES.FEATURE_ICON_2}
              title={"Easy, Powerful, Drag & Drop Website Builder"}
              description={
                "It is a long established fact that a reader will be distracted "
              }
            />
          </PaddedContainer>
        </Slanted>
        <Slanted colored>
          <PaddedContainer>
            <Feature
              imageOnLeft
              graphic={IMAGES.FEATURE_GRAPHIC_3}
              icon={IMAGES.FEATURE_ICON_3}
              title={"Decentralized & Secure"}
              description={
                "Drag and drop photos, put beautiful timers and so much moretha"
              }
            />
          </PaddedContainer>
        </Slanted>
        <Slanted long background={IMAGES.FEATURE_SUMMARY_BACKGROUND}>
          <PaddedContainer>
            <Summary />
          </PaddedContainer>
        </Slanted>
        <Slanted medium background={IMAGES.ROADMAP_BACKGROUND}>
          <PaddedContainer>
            <Roadmap />
          </PaddedContainer>
        </Slanted>
        <Slanted medium background={IMAGES.TOKEN_ALLOCATION_BACKGROUND}>
          <PaddedContainer>
            <TokenAllocation />
          </PaddedContainer>
        </Slanted>
        <Slanted medium colored>
          <PaddedContainer>
            <Team />
          </PaddedContainer>
        </Slanted>
        <Slanted>
          <PaddedContainer>
            <Media />
          </PaddedContainer>
        </Slanted>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
