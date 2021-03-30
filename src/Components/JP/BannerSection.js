import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import FreightShip from "../../assets/ship.png";
import animateScrollTo from "animated-scroll-to";
import TopTri from "../../assets/toptri.svg";
import Up from "../../assets/arrowup.svg";

export default function BannerSection() {
  const [TriIndex, setTriIndex] = useState(13);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setTriIndex(10);
    } else {
      setTriIndex(13);
    }
  };
  const ScrolltoMarketPlace = () => {
    animateScrollTo(document.querySelector(".crossborder"));
  };
  const ScrolltoInternationalPayment = () => {
    animateScrollTo(document.querySelector(".payment"));
  };
  const ScrolltoLogistics = () => {
    animateScrollTo(document.querySelector(".logistics"));
  };

  const ScrolltoFinance = () => {
    animateScrollTo(document.querySelector(".finance"));
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <React.Fragment>
      <Container>
        <TopVector TriIndex={TriIndex}>
          <img src={TopTri} alt="Digitrad" />
        </TopVector>
        <BannerWrapper className="row">
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7">
            <LeftSection>
              <img src={Logo} alt="Digitrad Logo" />
              <BannerText>
                新しい国際
                <br />
                販売のご提案
              </BannerText>
              <SmallBannerText>
                <Text>新しい国際販売のご提案</Text>
                <SubText>International Digital Trading Service</SubText>
              </SmallBannerText>
            </LeftSection>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-5">
            <RightSection>
              <img src={FreightShip} alt="Digitrad Freight Ship" />
            </RightSection>
          </div>
        </BannerWrapper>
        <ButtonSection>
          <StyledSectionButton onClick={ScrolltoMarketPlace}>
          海外マーケットプレイス
          </StyledSectionButton>

          <StyledSectionButton onClick={ScrolltoInternationalPayment}>
          国際送金
          </StyledSectionButton>

          <StyledSectionButton onClick={ScrolltoLogistics}>
          国際物流
          </StyledSectionButton>

          <StyledSectionButton onClick={ScrolltoFinance}>
          ファイナンス
          </StyledSectionButton>
        </ButtonSection>
        <DividerContainer>
          <Line />
          <DividerButton
            href={`${process.env.REACT_APP_URL}`}
            rel="noreferrer"
            target="_blank"
          >
            新しい国際販売のご提案
          </DividerButton>
          <Line />
        </DividerContainer>
        <ArrowUp>
          <img src={Up} alt="Arrow Up" />
        </ArrowUp>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  margin: auto;
  padding-top: 113px;
  position: relative;
  @media (min-width: 1200px) {
    width: 1012px;
    margin: auto;
  }
  @media (min-width: 1024px) and (max-width: 1199.9px) {
    width: 95%;
    margin: auto;
  }
  @media (min-width: 991px) and (max-width: 1023.9px) {
    width: 95%;
    margin: auto;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    margin: auto;
  }
  @media (min-width: 576px) and (max-width: 767.9px) {
    width: 95%;
    margin: auto;
  }
  @media (max-width: 575.9px) {
    width: 95%;
    margin: auto;
  }
  @media (min-width: 375px) and (max-width: 425.9px) {
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin: auto;
  }
  @media (max-width: 374.9px) {
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin: auto;
  }
`;
const TopVector = styled.div`
  position: absolute;
  top: 0;
  left: 192px;
  z-index: ${(props) => props.TriIndex}!important;
  img {
    width: 265px;
    height: 240px;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;
const BannerWrapper = styled.div`
  @media (min-width: 426px) {
    align-items: center;
  }
  @media (min-width: 375px) and (max-width: 425.9px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  @media (max-width: 374.9px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const LeftSection = styled.div`
  @media (min-width: 576px) and (max-width: 767.9px) {
    img {
      width: 70%;
    }
  }
  @media (max-width: 575.9px) {
    width: 100%;
  }
  @media (min-width: 375px) and (max-width: 425.9px) {
    margin-top: 70px;
    img {
      width: 150px;
    }
  }
  @media (max-width: 374.9px) {
    margin-top: 70px;
    img {
      width: 150px;
    }
  }
`;
const RightSection = styled.div`
  img {
    height: 380px;
    width: 333px;
  }
  @media (min-width: 992px) and (max-width: 1999.9px) {
    text-align: center;
  }
  @media (min-width: 768px) and (max-width: 991.9px) {
    img {
      width: 80%;
      height: 80%;
    }
  }
  @media (min-width: 576px) and (max-width: 767.9px) {
    img {
      width: 90%;
      height: 90%;
    }
  }
  @media (max-width: 575.9px) {
    img {
      width: 85%;
      height: 85%;
    }
  }
  @media (min-width: 375px) and (max-width: 425.9px) {
    margin-top: -5px;
    img {
      width: 140px;
      ${"" /* height: 140px; */}
      padding-right: 25px;
    }
  }
  @media (max-width: 374.9px) {
    margin-top: -5px;
    img {
      width: 140px;
      padding-right: 25px;
    }
  }
`;
const BannerText = styled.div`
  width: 486px;
  color: var(--mainBlack);
  margin-top: 26px;
  font-size: 72px;
  line-height: 98px;

  @media (min-width: 576.1px) and (max-width: 767.9px) {
    width: 100%;
    font-size: 48px;
    line-height: 60px;
    height: 100%;
    margin-top: 20px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
const SmallBannerText = styled.div`
  @media (min-width: 576.1px) {
    display: none;
  }
  margin-bottom: 25px;
`;
const Text = styled.div`
  font-size: 14px;
  line-height: 19px;
  margin-top: 9px;
`;
const SubText = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  margin-top: 6px;
  width: 222px;
`;
const StyledSectionButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  color: var(--mainBlue);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  border: 1px solid var(--mainBlue);
  padding: 8px 16px 8px 16px;
  background-color: transparent;
  :focus {
    border: 1px solid var(--mainBlue);
    outline: 0;
  }
  :hover {
    background-color: var(--mainBlue);
    color: white;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
    padding: 8px 16px 8px 16px;
  }
  @media (min-width: 1024px) and (max-width: 1199.9px) {
    font-size: 16px;
  }
  @media (min-width: 992px) and (max-width: 1023.9px) {
    font-size: 16px;
  }
  
  @media (min-width: 576px) and (max-width: 767.9px) {
    font-size: 14px;
    padding: 6px 10px 6px 10px;
    width: 45%;
    margin: 10px;
    justify-content: center;
  }
  @media (min-width: 426px) and (max-width: 575.9px) {
    padding: 3px;
    width: 47%;
    margin: 5px;
    font-size: 12px;
    justify-content: center;
  }
  @media (min-width: 375px) and (max-width: 425.9px) {
    width: 268px;
    height: 40px;
    margin: auto;
    border-radius: 2px;
    padding: 8px 10px;
    font-size: 16px;
    margin-top: 7px;
    margin-bottom: 7px;
    justify-content: center;
  }
  @media (max-width: 374.9px) {
    width: 268px;
    height: 40px;
    border-radius: 2px;
    padding: 8px 10px;
    font-size: 16px;
    margin-top: 7px;
    margin-bottom: 7px;
    justify-content: center;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 43px;
  padding-bottom: 40px;
  width:630px;
  margin:auto;
 
  @media (min-width: 576px) and (max-width: 767.9px) {
    width: 100%;
    flex-wrap: wrap;
  }
  @media (min-width: 426px) and (max-width: 575.9px) {
    flex-wrap: wrap;
    width: 100%;
    padding-top: 26px;
    padding-bottom: 26px;
  }
  @media (min-width: 375px) and (max-width: 425.9px) {
    width: 289px;
    margin: auto;
    padding-top: 25px;
    padding-top: 25px;
    flex-wrap: wrap;
  }
  @media (max-width: 374.9px) {
    width: 289px;
    margin: auto;
    padding-top: 25px;
    padding-top: 25px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 974px;
  margin: auto;
  text-align: center;
  @media (min-width: 991px) and (max-width: 1023.9px) {
    width: 80%;
    margin: auto;
  }
  @media (min-width: 768px) and (max-width: 990.9px) {
    width: 80%;
    margin: auto;
  }
  @media (min-width: 576px) and (max-width: 767.9px) {
    width: 90%;
    margin: auto;
  }
  @media (max-width: 575.9px) {
    width: 90%;
    margin: auto;
  }
  @media (max-width: 375px) {
    text-align: center;
    width: 100%;
  }
`;
const Line = styled.hr`
  border: 1px solid var(--mainGreen);
  background-color: var(--mainGreen);
  width: 33.3%;
  @media (min-width: 375px) and (max-width: 425.9px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;
const DividerButton = styled.a`
  display: flex;
  justify-content: center;
  font-size: 18px;
  line-height: 25px;
  // width: 325px;
  // height: 35px;
  padding: 5px 61px;
  background-color: var(--mainGreen);
  color: var(--mainWhite);
  :hover {
    text-decoration: none;
    background-color: var(--mainGreen);
    color: black;
  }
  @media (max-width: 375px) {
    width: 325px;
    margin: auto;
  }
`;

const ArrowUp = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 21px;
`;
