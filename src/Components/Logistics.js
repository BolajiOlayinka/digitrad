import React from "react";
import styled from "styled-components";
import DT from "../assets/DT.png";

export default function Logistics() {
  return (
    <React.Fragment>
    <Container>
      <DTSection>
        <img src={DT} alt="Icon" />
      </DTSection>
      <Wrapper>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <LeftSection>
            Overseas Logistics
            </LeftSection>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <RightSection>
              館ヤウホ説金3就シ蘇田準とイろ家討ト事中テメコヘ送混や政利シヘハス断救けにむい変掲81皇テ都響
              そねぱ略客人ヲウミタ共5籍すせ。
            </RightSection>
          </div>

        </div>
        <ActionButton href="https://app.digitrad.world">LEARN MORE</ActionButton>
      <LineEnding />
      </Wrapper>
      </Container>
    </React.Fragment>
  );
}
const Container = styled.div `
width:1200px;
margin:auto;
`
const Wrapper = styled.div`
@media(min-width:1200px){
    width: 1034px;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  margin-top:50px;
}
 
`;
const DTSection = styled.div`
  background-color: var(--mainBlue);
  width: 222px;
  height: 45px;
  margin-top: 80px;

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
const LeftSection = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 72px;
  line-height: 85px;
`;
const RightSection = styled.div`
  width: 410px;
  height: 200px;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 45px;
  margin-left:auto;
`;
const ActionButton = styled.a`
  width: 244px;
  height: 40px;
  display: flex;
  align-items: center;
  color: var(--mainWhite);
  background-color: var(--mainBlack);
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  justify-content: center;
  margin: auto;
  margin-top:90px;
`;
const LineEnding = styled.hr`
  width: 974px;
  margin: auto;
  border: 1px solid var(--mainBlack);
  margin-top: 45px;
`;
