import React from "react";
import styled from "styled-components";
import DT from "../assets/DT.png";
import IconOne from "../assets/icon1.svg";
import IconTwo from "../assets/icon2.svg";
import IconThree from "../assets/icon3.svg";
import Desktop from "../assets/desktop.png";
import Tick from "../assets/tick.png";

export default function CrossBorder() {
  return (
    <React.Fragment>
      <Container>
        <HeaderSection>
          <DTSection>
            <img src={DT} alt="Icon" />
          </DTSection>
          <div>
            <EnglishHeading>Crossborder Marketplace</EnglishHeading>
            <JapaneseHeading>こんなお悩みございませんか？</JapaneseHeading>
          </div>
        </HeaderSection>
        <IconsWrapper>
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <Section>
                <IconHead>
                  <img src={IconOne} alt="Digitrad Icon" />
                </IconHead>
                <IconText>製品には自信があるのに、海外展開ができない</IconText>
              </Section>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <Section>
                <IconHead>
                  <img src={IconTwo} alt="Digitrad Icon" />
                </IconHead>
                <IconText>輸出には慣れてないので、不安である</IconText>
              </Section>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <Section>
                <IconHead>
                  <img src={IconThree} alt="Digitrad Icon" />
                </IconHead>
                <IconText>インターネットでの販売方法がわからない</IconText>
              </Section>
            </div>
          </div>
        </IconsWrapper>
        <DesktopWrapper>
          <img src={Desktop} alt="" />
        </DesktopWrapper>
        <TickSection>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 text-center">
              <TickIcon>
                <img src={Tick} alt="digitrad Icon" />
              </TickIcon>
              <TickText>簡単掲載</TickText>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 text-center">
              <TickIcon>
                <img src={Tick} alt="digitrad Icon" />
              </TickIcon>
              <TickText>安心サポート</TickText>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 text-center">
              <TickIcon>
                <img src={Tick} alt="digitrad Icon" />
              </TickIcon>
              <TickText>今なら掲載無料</TickText>
            </div>
          </div>
        </TickSection>
        <ActionButton href="">SEE IN ACTION</ActionButton>
        <LineEnding />
      </Container>
    </React.Fragment>
  );
}
const HeaderSection = styled.div`
  display: flex;
`;
const DTSection = styled.div`
  background-color: var(--mainBlue);
  width: 222px;
  height: 45px;
  margin-top: 36px;

  display: flex;
  justify-content: flex-end;
  ${"" /* @media (min-width: 1400px) {
    width: 30vh;
  } */}
  img {
    right: 0;
    ${"" /* height:20.99px;
    width:31.42px; */}
    padding-top:12px;
    padding-bottom: 12px;
    padding-right: 6px;
  }
`;
const Container = styled.div`
  width: 1200px;
  margin: auto;
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
  @media (min-width: 1200px) {
    ${"" /* margin-left: 262px; */}
    margin-left:67px;
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
  @media (min-width: 1200px) {
    ${"" /* margin-left: 262px; */}
    margin-left:67px;
  }
`;
const Section = styled.div`
  height: 240px;
  margin-top: 45px;
`;
const IconsWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  width: 1002px;
  margin: auto;
`;
const IconHead = styled.div`
  text-align: center;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  margin: auto;
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
`;

const DesktopWrapper = styled.div`
  width: 1004px;
  margin: auto;
  margin-bottom: 80px;
`;

const TickSection = styled.div`
  width: 720px;
  margin: auto;
  margin-bottom: 40px;
`;
const TickIcon = styled.div`
  text-align: center;
  width: 105px;
  height: 105px;
  margin: auto;
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
`;

const ActionButton = styled.a`
  width: 424.51px;
  height: 40px;
  display: flex;
  align-items: center;
  color: var(--mainWhite);
  background-color: var(--mainGreen);
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  justify-content: center;
  margin: auto;
`;
const LineEnding = styled.hr`
  width: 974px;
  margin: auto;
  border: 1px solid var(--mainBlack);
  margin-top: 73px;
`;
