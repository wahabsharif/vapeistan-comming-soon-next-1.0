import React from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { ParallaxProvider } from "react-scroll-parallax";
import MainWrapper, {
  MainContentSection,
  FooterSection,
  LogoImageContainer,
} from "common/ui/six.style";

import { SOCIAL_PROFILES } from "common/data/social-share/six";
import { SocialShare } from "../components";

// images
import BG from "common/static/images/bg.png";

const IndexPage = () => (
  <ParallaxProvider>
    <React.Fragment>
      <NextSeo
        title="Vapeistan - Coming Soon"
        description="Online Vape and e-Cigratte Store"
      />
      <MainWrapper
        style={{
          backgroundImage: `url(${BG.src})`,
          backgroundColor: "#18192e",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <LogoImageContainer>
          <Link href={"/"}>{/* <img src={LogoTwo.src} alt="logo" /> */}</Link>
        </LogoImageContainer>
        <FooterSection>
          <MainContentSection>
            <h6>COMING SOON</h6>
          </MainContentSection>
          <SocialShare items={SOCIAL_PROFILES} />
          <p>
            <a href="https://beacontechh.com/">Powered By Beacontech</a>
          </p>
        </FooterSection>
      </MainWrapper>
    </React.Fragment>
  </ParallaxProvider>
);

export default IndexPage;
