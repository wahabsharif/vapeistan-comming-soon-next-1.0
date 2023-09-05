import styled from "styled-components";

const MainWrapper = styled.section`
  height: 100%;
  min-height: 100vh;
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
    color: #fff;
    line-height: 1.125;
    text-align: center;
    max-width: 1000px;
    font-weight: 200;
    letter-spacing: 40px;
    margin-bottom: 10px;
    @media (max-width: 1440px) {
      font-size: 60px;
      max-width: 530px;
      margin-bottom: 25px;
    }
    @media (max-width: 768px) {
      font-size: 50px;
    }
    @media (max-width: 480px) {
      font-size: 36px;
      line-height: 1.2em;
      max-width: 100%;
      margin-bottom: 20px;
    }
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
