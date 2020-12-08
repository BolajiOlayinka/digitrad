import React, { useEffect } from "react";
import styled from "styled-components";
import DT from "../assets/DT.svg";
import IconOne from "../assets/icon1.svg";
import IconTwo from "../assets/icon2.svg";
import IconThree from "../assets/icon3.svg";
import Desktop from "../assets/desktop.png";
import Logo from "../assets/logo.svg";
import Tick from "../assets/tick.svg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CrossBorder() {
  useEffect(() => {
    Aos.init(
      {
        duration: 1200,
      },
      []
    );
  });
  return (
    <React.Fragment>
      {/* <ExtendDT data-aos="fade-right"></ExtendDT> */}
      <DTSection data-aos="fade-right">
        <img src={DT} alt="Icon" />
      </DTSection>
      <Container>
        <HeaderSection className="crossborder">
          <div>
            <EnglishHeading>Crossborder Marketplace</EnglishHeading>
            <JapaneseHeading>こんなお悩みございませんか？</JapaneseHeading>
          </div>
        </HeaderSection>
        <SmallJapaneseHeading>
          こんなお悩みございませんか？
        </SmallJapaneseHeading>
        <IconsWrapper>
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <Section>
                <IconHead data-aos="fade-up">
                  <img src={IconOne} alt="Digitrad Icon" />
                </IconHead>
                <IconText>製品には自信があるのに、海外展開ができない</IconText>
              </Section>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <Section>
                <IconHead data-aos="fade-up">
                  <img src={IconTwo} alt="Digitrad Icon" />
                </IconHead>
                <IconText>輸出には慣れてないので、不安である</IconText>
              </Section>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <Section>
                <IconHead data-aos="fade-up">
                  <img src={IconThree} alt="Digitrad Icon" />
                </IconHead>
                <IconText>インターネットでの販売方法がわからない</IconText>
              </Section>
            </div>
          </div>
        </IconsWrapper>
        <SmallDigitrad>
          <img src={Logo} alt="Digitrad Logo" />
        </SmallDigitrad>
        <DesktopWrapper>
          <img src={Desktop} alt="" />
        </DesktopWrapper>
        <TickSection>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-4 text-center">
              <TickIcon
                data-aos="fade-up"
                style={{ transitionDuration: "0.6s" }}
              >
                <img src={Tick} alt="digitrad Icon" />
              </TickIcon>
              <TickText>簡単掲載</TickText>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-4 text-center">
              <TickIcon
                data-aos="fade-up"
                style={{ transitionDuration: "1.2s" }}
              >
                <img src={Tick} alt="digitrad Icon" />
              </TickIcon>
              <TickText>安心サポート</TickText>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-4 text-center">
              <TickIcon
                data-aos="fade-up"
                style={{ transitionDuration: "2.4s" }}
              >
                <img src={Tick} alt="digitrad Icon" />
              </TickIcon>
              <TickText>今なら掲載無料</TickText>
            </div>
          </div>
        </TickSection>
        <ActionButton
          href="https://app.digitrad.world/auth/signin"
          rel="noreferrer"
          target="_blank"
        >
          LEARN MORE
        </ActionButton>
        <LineEnding />
      </Container>
    </React.Fragment>
  );
}
const HeaderSection = styled.div`
  display: flex;
  margin-top: 76px;
  @media (min-width: 767px) and (max-width: 991px) {
    margin-left: 107px;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    margin-left: 67px;
  }
  @media (min-width: 1441px) and (max-width: 1800px) {
    ${"" /* margin-left:25%; */}
    margin-left:220px;
  }
  @media (min-width: 1801px) and (max-width: 2600px) {
    ${"" /* margin-left:35%; */}
    margin-left:220px;
  }
  @media (min-width: 2601px) {
    margin-left: 220px;
  }
`;

const DTSection = styled.div`
  background-color: var(--mainBlue);
  width: 222px;
  height: 45px;
  margin-top: 116px;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: flex-end;

  img {
    right: 0;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 6px;
  }

  @media (min-width: 576px) and (max-width: 767.9px) {
    width: 200px;
  }
  @media (min-width: 426px) and (max-width: 575.9px) {
    width: 200px;
  }
  @media (max-width: 575.9px) {
    width: 100px;
  }
  @media (max-width: 426px) {
    margin-top: 100px;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 222px;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    width: 28%;
  }
  @media (min-width: 1441px) and (max-width: 1800px) {
    width: 35%;
  }
  @media (min-width: 1801px) and (max-width: 2300px) {
    width: 38%;
  }
  @media (min-width: 2301px) and (max-width: 2600px) {
    width: 40%;
  }
  @media (min-width: 2652px) and (max-width: 4000px) {
    width: 40%;
  }
  @media (min-width: 4000px) {
    display: none;
  }
`;
const Container = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 1200px) {
    width: 1000px;
    margin: auto;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    margin: auto;
  }
`;

const EnglishHeading = styled.div`
  width: 435px;
  height: 208px;
  font-size: 72px;
  line-height: 85px;
  font-weight: 300;
  color: var(--mainBlack);
  display: flex;
  align-items: center;
  margin-left: 67px;
  @media (min-width: 1200px) {
    margin-left: 262px;
    ${"" /* margin-left:67px; */}
  }
  @media (min-width: 991px) and (max-width: 1199px) {
    margin-left: 262px;
    width: 300px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 300px;
    font-size: 60px;
    margin-left: 108px;
  }
  @media (min-width: 576px) and (max-width: 767.9px) {
    width: 300px;
    font-size: 56px;
    margin-left: 230px;
    height: 200px;
  }
  @media (max-width: 575.9px) {
    width: 200px;
    font-size: 45px;
    line-height: 54px;
    margin-left: 130px;
    height: 160px;
  }
  @media (max-width: 426px) {
    font-size: 36px;
    line-height: 44px;
    margin-left: 130px;
    height: 96px;
  }
  @media (max-width: 375px) {
    font-size: 30px;
    margin-left: 120px;
  }
`;
const JapaneseHeading = styled.div`
  width: 715px;
  height: 100px;
  font-weight: bold;
  font-size: 45px;
  line-height: 85px;
  color: var(--mainBlack);
  display: flex;
  align-items: center;
  margin-left: 67px;
  @media (min-width: 1200px) {
    margin-left: 67px;
  }
  @media (min-width: 991px) and (max-width: 1199px) {
    margin-left: 67px;
    width: -webkit-fill-available;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 40px;
    width: 100%;
    font-size: 30px;
    height: 80px;
  }
  @media (min-width: 576px) and (max-width: 767.9px) {
    width: -webkit-fill-available;
    font-size: 56px;
    margin-left: 30px;
    height: 50%;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
const SmallJapaneseHeading = styled.div`
  height: 50px;
  font-size: 24px;
  line-height: 85px;
  font-weight: bold;
  width: 350px;
  margin: auto;
  @media (min-width: 576px) {
    display: none;
  }
`;
const Section = styled.div`
  height: 240px;
  margin-top: 45px;
  @media (max-width: 426px) {
    margin-top: 30px;
  }
  @media (max-width: 375px) {
    width: 90%;
    margin: auto;
    margin-top: 30px;
  }
`;
const IconsWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  width: 1002px;
  margin: auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 768.1px) and (max-width: 991px) {
    width: 768px;
    margin: auto;
  }

  @media (max-width: 576px) {
    width: 301px;
    margin: auto;
  }
`;
const SmallDigitrad = styled.div`
  text-align: center;
  margin-top: 37px;
  margin-bottom: 37px;
  img {
    width: 256px;
  }
  @media (min-width: 576px) {
    display: none;
  }
`;
const IconHead = styled.div`
  text-align: center;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  margin: auto;
  z-index: 1;
  position: relative;
`;
const IconText = styled.div`
  font-size: 24px;
  width: 300px;
  line-height: 29px;
  height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 300;
  font-style: normal;
  margin-top: 12.16px;
  z-index: 3;
  position: relative;
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 20px;
    height: 40px;
    width: 200px;
  }
  @media (max-width: 768px) {
    margin: auto;
  }
`;

const DesktopWrapper = styled.div`
  width: 1004px;
  margin: auto;
  margin-bottom: 80px;
  img {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    ${"" /* img{
      width:90%;
    margin:auto;
    } */}
  }
  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
    }
  }

  @media (max-width: 426px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

const TickSection = styled.div`
  width: 720px;
  margin: auto;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 576.9px) and (max-width: 767.9px) {
    width: 70%;
    margin: auto;
    text-align: center;
  }
  @media (max-width: 576px) {
    width: 277px;
    margin: auto;
    margin-bottom: 27px;
  }
`;
const TickIcon = styled.div`
  text-align: center;
  width: 105px;
  height: 105px;
  margin: auto;
  @media (min-width:576.9px) and (max-width: 767.9px) {
    height:80px;
    text-align:center;
    
    img{
      width:80px
    }
  }
  @media(max-width:576px){
    height:45px;
    img{
      width:45px;
    }
   
  }
 }
`;
const TickText = styled.div`
  width: 220px;
  height: 50px;
  margin-top: 20px;
  margin: auto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  @media (min-width: 576.9px) and (max-width: 767.9px) {
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
    width: 150px;
  }
  @media (max-width: 576px) {
    font-weight: 300;
    font-size: 14px;
    line-height: 29px;
    width: 89px;
  }
`;

const ActionButton = styled.a`
  width: 424.51px;
  height: 60px;
  display: flex;
  align-items: center;
  color: var(--mainWhite);
  background-color: var(--mainGreen);
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  justify-content: center;
  margin: auto;
  :hover {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    width: 65%;
    margin: auto;
  }
  @media (max-width: 426px) {
    width: 239px;
    margin: auto;
  }
`;
const LineEnding = styled.hr`
  width: 974px;
  margin: auto;
  border: 1px solid var(--mainBlack);
  background-color: var(--mainBlack);
  margin-top: 70px;
  @media (max-width: 991px) {
    width: 80%;
    margin: auto;
    margin-top: 70px;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    margin-top: 70px;
  }
  @media (max-width: 576px) {
    margin-top: 50px;
    width: 157px;
  }
`;
