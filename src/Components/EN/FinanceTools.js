import React, { useEffect } from "react";
import styled from "styled-components";
import Lock from "../../assets/lock.svg";
import DT from "../../assets/DT.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import Dots from "../../assets/sidepolygon.svg";
import Close from "../../assets/close.svg";
import Check from "../../assets/check.svg";

export default function FinanceTools() {
  useEffect(() => {
    Aos.init(
      {
        duration: 1200,
      },
      []
    );
  });
  return (
    <div style={{ position: "relative" }}>
      <SideDots>
        <img src={Dots} alt="Digitrad" />
      </SideDots>
      <LargeDT data-aos="fade-right">
        <img src={DT} alt="Icon" />
      </LargeDT>
      <Container className="finance">
        <HeaderSection>
          <DTSection data-aos="fade-right">
            <img src={DT} alt="Icon" />
          </DTSection>
          <SmallImageSection>
            <img src={Lock} alt="padlock lock" />
          </SmallImageSection>
          <div>
            <SmallEnglishSection>Trading Finance Service</SmallEnglishSection>
            <EnglishHeading>Trading Finance Service</EnglishHeading>

            <JapaneseHeading>
            Legacy financial companies have seen their trading business becoming increasingly challenged with cash flow profitability. 
            In order to reduce these hurdles, over 30% of trading companies utilize financial services like DiGiTRAD.
            </JapaneseHeading>
          </div>

          <ImageSection>
            <img src={Lock} alt="padlock lock" />
          </ImageSection>
        </HeaderSection>
        <Container>
          <ServicePoints>
            <h5>Key Service Points</h5>
            <h6>
              <img src={Check} alt="tick" />
              <p>Collateral for purchase order only</p>
            </h6>
            <h6>
              <img src={Check} alt="tick" />
              <p>Quick application and approval</p>
            </h6>
            <h6>
              <img src={Check} alt="tick" />
              <p>Low interest rates</p>
            </h6>
          </ServicePoints>
        </Container>
        <Wrapper>
          <ActionButton
            href={`${process.env.REACT_APP_URL}/auth/signup?service=finance`}
            rel="noreferrer"
            target="_blank"
          >
            START SAVING NOW
          </ActionButton>
          <LineEnding />
        </Wrapper>
      </Container>
    </div>
  );
}
const Container = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 1080px;
    margin: auto;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    width: 100%;
    margin: auto;
  }
  @media (max-width: 1023.9px) {
    width: 100%;
    margin: auto;
  }
`;
const SideDots = styled.div`
  position: absolute;
  left: 0;
  top: 60px;
  img {
    width: 265px;
    height: 441px;
  }
  @media (max-width: 1199px) {
    display: none;
  }
`;
const HeaderSection = styled.div`
  display: flex;
  margin-top: 70px;
  @media (min-width: 767px) and (max-width: 991px) {
    margin-left: 0px;
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
const EnglishHeading = styled.div`
  width: 561px;
  height: 174px;
  font-size: 72px;
  line-height: 85px;
  font-weight: 300;
  color: var(--mainBlack);
  margin-left: 67px;
  margin-bottom: 23px;
  @media (min-width: 1200px) {
    margin-left: 200px;
  }
  @media (min-width: 1500px) {
    margin-left: 100px;
  }
  @media (min-width: 2000px) {
    margin-left: 30px;
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    font-size: 60px;
    width: 450px;
    margin-left: 262px;
  }
  @media (min-width: 991px) and (max-width: 1023.9px) {
    font-size: 60px;
    margin-left: 40px;
    width: 500px;
  }

  @media (min-width: 768px) and (max-width: 990.9px) {
    margin-left: 60px;
    width: 450px;
    font-size: 60px;
    line-height: 70px;
    height: 150px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const SmallEnglishSection = styled.div`
  @media (min-width: 768.1px) {
    display: none;
  }

  @media (min-width: 576px) and (max-width: 768.1px) {
    margin-left: 50px;
    width: 230px;
    font-size: 60px;
    line-height: 80px;
  }
  @media (max-width: 575.9px) {
    margin-left: 26px;
    width: 244px;
    font-size: 50px;
    line-height: 60px;
  }
  @media (max-width: 375px) {
    font-size: 36px;
    line-height: 44px;
    width: 200px;
    margin-top: 10px;
  }
`;
const JapaneseHeading = styled.div`
  width: 451px;
  // height: 159px;
  font-size: 26px;
  font-weight: 300;
  line-height: 45px;
  color: var(--mainBlack);
  margin-left: 67px;
  margin-bottom: 67px;
  @media (min-width: 1200px) {
    margin-left: 200px;
  }
  @media (min-width: 1500px) {
    margin-left: 100px;
  }
  @media (min-width: 2000px) {
    margin-left: 30px;
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    margin-left: 262px;
  }

  @media (min-width: 991px) and (max-width: 1023.9px) {
    margin-left: 40px;
    font-size: 23px;
  }

  @media (min-width: 768px) and (max-width: 990.9px) {
    margin-left: 60px;
    width: 330px;
    font-size: 19px;
    margin-right: 10px;
  }
  @media (min-width: 576px) and (max-width: 767.9px) {
    margin-left: 50px;
    width: 80%;
    font-size: 18px;
    margin-right: 5px;
  }
  @media (max-width: 575.9px) {
    margin-left: 26px;
    line-height: 40px;
    margin-bottom: 10px;
    width: 80%;
    font-size: 15px;
  }
  @media (max-width: 425px) {
    width: 250px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
    line-height: 30px;
    height: 144px;
    width: 221px;
    margin-top: 10px;
  }
`;
const ServicePoints = styled.div`
  width: 590px;
  font-size: 18px;
  line-height: 45px;
  font-weight: 300;
  color: var(--mainBlack);
  padding-top: 60px;
  margin-left: 30px;
  margin-bottom: 23px;
  p {
    margin-bottom: 0px;
  }
  @media (min-width: 1200px) {
    margin-left: 270px;
  }
  @media (min-width: 1441px) {
    margin-left: 430px;
  }
  @media (min-width: 1500px) {
    margin-left: 330px;
  }
  @media (min-width: 2000px) {
    margin-left: 270px;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    font-size: 18px;
    width: 450px;
    margin-left: 262px;
  }
  @media (min-width: 991px) and (max-width: 1023.9px) {
    font-size: 18px;
    margin-left: 220px;
    width: 500px;
  }

  @media (min-width: 768px) and (max-width: 990.9px) {
    margin-left: 150px;
    width: 450px;
    font-size: 18px;
    line-height: 70px;
  }
  @media (max-width: 768px) {
    margin-left: 100px;
    width: 500px;
  }
  @media (max-width: 576px) {
    margin-left: 40px;
    width: 400px;
    padding-top: 60px;
    h5 {
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
    }
    h6 {
      width: 400px;
      font-weight: 300;
      font-size: 14px;
      line-height: 45px;
    }
    p {
      line-height: 24px;
    }
  }

  @media (max-width: 426px) {
    width: 330px;
    margin-left: 30px;
    h6 {
      width: 100%;
    }
  }
  h5 {
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: #30318c;
    margin-bottom: 25px;
  }
  h6 {
    margin-bottom: 25px;
    font-weight: 300;
    font-size: 18px;
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 24px;
  }
  @media (max-width: 374px) {
    margin-left: 10px;
  }
`;

const LargeDT = styled.div`
  background-color: var(--mainBlue);
  width: 222px;
  height: 45px;
  margin-top: 10px;
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
  @media (max-width: 1023.9px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: 222px;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    width: 22%;
  }
  @media (min-width: 1441px) and (max-width: 1800px) {
    width: 34.5%;
  }
  @media (min-width: 1801px) and (max-width: 2300px) {
    width: 33%;
  }
  @media (min-width: 2301px) and (max-width: 2600px) {
    width: 34%;
  }
  @media (min-width: 2601px) and (max-width: 3000px) {
    width: 38%;
  }
  @media (min-width: 3001px) and (max-width: 4000px) {
    width: 40%;
  }
  @media (min-width: 4000px) {
    display: none;
  }
`;
const DTSection = styled.div`
  background-color: var(--mainBlue);
  width: 222px;
  height: 45px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
  img {
    right: 0;

    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 6px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    width: 180px;
  }
  @media (min-width: 991px) and (max-width: 1023.9px) {
    width: 180px;
  }
  @media (min-width: 768px) and (max-width: 990.9px) {
    width: 130px;
  }
  @media (min-width: 576px) and (max-width: 767.9px) {
    width: 200px;
  }
  @media (min-width: 426px) and (max-width: 575.9px) {
    width: 200px;
  }
  @media (max-width: 575.9px) {
    width: 400px;
  }
  @media (max-width: 375px) {
  }
`;
const ImageSection = styled.div`
  margin-top: 110px;
  img {
    width: 234px;
    height: 350px;
    padding-right: 10px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 50%;
    img {
      width: 50%;
      height: 70%;
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`;
const SmallImageSection = styled.div`
  img {
    width: 130px;
    margin-top: 100px;
    margin-left: -30px;
  }
  @media (max-width: 425px) {
    img {
      width: 130px;
      margin-top: 100px;
      margin-left: -80px;
    }
  }
  @media (max-width: 375px) {
    img {
      width: 100px;
      height: 142px;
      margin-top: 85px;
    }
  }

  @media (min-width: 576px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 68px;
  text-align: center;
  @media (min-width: 1200px) {
    width: 1034px;
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 70px;
  }
`;

const ActionButton = styled.a`
  padding: 18px 119px;
  color: var(--mainWhite);
  background-color: var(--mainGreen);
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  :hover {
    text-decoration: none;
  }
  @media (max-width: 576px) {
    display: none;
    padding: 8px 34px;
  }
`;
const LineEnding = styled.hr`
  width: 974px;
  margin: auto;
  border: 1px solid var(--mainBlack);
  background-color: var(--mainBlack);
  margin-top: 70px;
  @media (min-width: 991px) and (max-width: 1023.9px) {
    width: 500px;
    margin: auto;
    margin-top: 70px;
  }
  @media (max-width: 990.9px) {
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
    margin-bottom: 156px;
    width: 157px;
  }
`;
