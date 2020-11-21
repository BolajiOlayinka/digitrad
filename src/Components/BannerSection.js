import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import FreightShip from "../assets/ship.png";
// import { HashLink as Link } from "react-router-hash-link";

export default function BannerSection() {
  return (
    <React.Fragment>
      <Container>
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-6">
            <LeftSection>
              <img src={Logo} alt="Digitrad Logo" />
              <JapaneseBannerText>新しい国際販売のご提案</JapaneseBannerText>
              <EnglishBannerText>
                International Digital Trading Service
              </EnglishBannerText>
            </LeftSection>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6">
            <RightSection>
              <img src={FreightShip} alt="Digitrad Freight Ship" />
            </RightSection>
          </div>
        </div>
        <ButtonSection>
          <StyledSectionLink>CROSSBORDER MARKETPLACE</StyledSectionLink>

          <StyledSectionLink>INTERNATIONAL PAYMENT</StyledSectionLink>

          <StyledSectionLink>OVERSEAS LOGISTICS</StyledSectionLink>

          <StyledSectionLink>FINANCIAL TOOLS</StyledSectionLink>
        </ButtonSection>
        <DividerContainer>
          <Line />
          <DividerButton href="">新しい国際販売のご提案</DividerButton>
          <Line />
        </DividerContainer>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  @media (min-width: 1200px) {
    width: 1012px;
    margin: auto;
  }
`;
const LeftSection = styled.div``;
const RightSection = styled.div`
  img {
    height: 380px;
    width: 333px;
  }
`;
const JapaneseBannerText = styled.div`
  width: 572px;
  height: 46px;
  font-style: normal;
  font-size: 36px;
  line-height: 49px;
  color: var(--mainBlack);
  margin-top: 30.55px;
`;
const EnglishBannerText = styled.div`
  width: 486px;
  height: 118px;
  font-style: normal;
  font-weight: 300px;
  font-size: 48px;
  line-height: 56px;
  color: var(--mainBlack);
`;

const StyledSectionLink = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  color: var(--mainBlue);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  border: 1px solid var(--mainBlue);
  padding: 8px 16px 8px 16px;
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 43px;
  padding-bottom: 40px;
`;
const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 974px;
  margin: auto;
  text-align: center;
`;
const Line = styled.hr`
  border: 1px solid var(--mainGreen);
  width: 33.3%;
`;
const DividerButton = styled.a`
  display: flex;
  justify-content: center;
  font-size: 18px;
  line-height: 25px;
  width: 325px;
  height: 35px;
  padding: 5px 18px 5px 18px;
  background-color: var(--mainGreen);
  color: var(--mainWhite);
`;
