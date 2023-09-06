import styled from "styled-components";

const MainWrapper = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const LogoImageContainer = styled.div`
  text-align: center;
  padding-top: 40px;
  @media (max-width: 1600px) {
    padding-top: 30px;
  }
  img {
    margin: 0;
  }
`;
export const MainContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 60px 0;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
  @media (max-width: 480px) {
    margin-top: 0px;
  }
  .mainContainer {
    z-index: 99;
    position: relative;
  }

  h6 {
    font-size: 40px;
    font-family: "Montserrat", serif;
    color: transparent; /* Make text transparent to show the gradient */
    line-height: 1.125;
    text-align: center;
    max-width: 1000px;
    font-weight: 200;
    letter-spacing: 40px;
    margin-bottom: 10px;
    color: #c7d63c;
    background-image: linear-gradient(
      90deg,
      #6e40aa,
      #963db3,
      #bf3caf,
      #e3419e,
      #fe4b83,
      #ff5e64,
      #ff7747,
      #fb9633,
      #e2b72f,
      #c7d63c,
      #c7d63c
    );
    background-position: 100% 0;
    background-size: 500% 100%;
    transition: background-position 1s linear;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: 1.75s linear 0s infinite alternate both running textGradient;
  }
  /* Media query for screens smaller than 768px */
  @media screen and (max-width: 768px) {
    h6 {
      font-size: 30px;
      letter-spacing: 30px;
    }
  }

  /* Media query for screens smaller than 480px */
  @media screen and (max-width: 480px) {
    h6 {
      font-size: 20px;
      letter-spacing: 20px;
    }
  }
  @keyframes textGradient {
    from {
      background-position: 100% 0;
    }
    to {
      background-position: 0% 0;
    }
  }
  @media (max-width: 1440px) {
    font-size: 60px;
    margin-bottom: 25px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 1.2em;
    max-width: 100%;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    font-family: "Roboto";
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.833;
    text-align: center;
    max-width: 420px;
    font-weight: 400;
    @media (max-width: 1440px) {
      font-size: 16px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
`;

export const FooterSection = styled.div`
  position: relative;
  padding-bottom: 30px;
  @media (max-width: 1600px) {
    padding-bottom: 30px;
  }

  .social_profiles {
    justify-content: center;
    .social_profile_item {
      border-radius: 50%;
      background-color: rgb(46, 47, 67);
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease;
      cursor: pointer;
      a {
        color: #fff;
        font-size: 17px;
        transition: all 0.5s ease;
      }
      &:hover {
        background-color: #626372;
        a {
          color: #fff;
        }
      }
    }
  }
  p {
    margin-top: 30px;
    font-size: 14px;
    font-family: "Roboto";
    color: rgb(78, 97, 124);
    line-height: 22px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    @media (max-width: 1440px) {
      margin-top: 15px;
    }
    @media (max-width: 340px) {
      font-size: 12px;
    }
  }
`;
export default MainWrapper;
