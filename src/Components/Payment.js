import React from "react";
import styled from "styled-components";
import PaymentImage from "../assets/paymentimage.png";
import Calculator from "./Calc";
import DT from "../assets/DT.png";
import Timer from "../assets/timer.png";
import Secured from "../assets/secure.png";
import Percent from "../assets/percent.png";
import TenMin from "../assets/10Min.png";

export default function Payment() {
  return (
    <Container>
      <HeaderSection>
        <DTSection data-aos="fade-right">
          <img src={DT} alt="Icon" />
        </DTSection>
        <div>
          <Title>International Payment</Title>
        </div>
      </HeaderSection>
      <StyledWrapper>
        <LeftWrapper>
          <img src={PaymentImage} alt="Digitrad Payment Service" />
          <TextBody>
            館ヤウホ説金3就シ蘇田準とイろ家討ト事中テメコヘ送混や政利シヘハス断救けにむい変掲81皇テ都響
            そねぱ略客人ヲウミタ共5籍すせ。
          </TextBody>
          <TextBodyTwo>
            ✓少額の送金なのに、手数料が高い ✓毎度手続きが煩雑
            ✓外貨規制が頻繁に起こり、いつ送金、 着金できるかわからない
          </TextBodyTwo>
        </LeftWrapper>

        <RightWrapper>
          <div>
            <Calculator />
          </div>
        </RightWrapper>
      
      </StyledWrapper>
      <PaymentFunctionSection>
        <div class="row align-items">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
            <FunctionIcon data-aos="flip-right">
            <img src={Timer} alt="Digitrad Fast Payment"/>
            </FunctionIcon>
            <FunctionHeader>
            即時
            </FunctionHeader>
            <FunctionText>

            最短1時間以内で着金
            </FunctionText>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
            <FunctionIcon data-aos="flip-right">
            <img src={Secured} alt="Digitrad Fast Payment"/>
            </FunctionIcon>
           
            <FunctionHeader>
            安全
            </FunctionHeader>
            
            <FunctionText>
            独自のエスクロー機能による安全な送金を実現。

            </FunctionText>
            

            
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
            <FunctionIcon data-aos="flip-right">
            <img src={Percent} alt="Digitrad Fast Payment"/>
            </FunctionIcon>
            <FunctionHeader>
            安価
            </FunctionHeader>

            <FunctionText>
            手数料0.7%～

            </FunctionText>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
          
          <FunctionIcon data-aos="flip-right">
            <img src={TenMin} alt="Digitrad Fast Payment"/>
            </FunctionIcon>
            <FunctionHeader>
            簡単
            </FunctionHeader>
            <FunctionText>
            以下問い合わせより送金額を入力するだけ。10分程度で手続き完了。


            </FunctionText>
          </div>
            
          

        </div>
         
        </PaymentFunctionSection>
      <ActionButton href="https://app.digitrad.world">LEARN MORE</ActionButton>
      <LineEnding />
    </Container>
  );
}
const Container = styled.div`
  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }
`;
const HeaderSection = styled.div`
  display: flex;
  margin-top: 76px;
`;
const DTSection = styled.div`
  background-color: var(--mainBlue);
  width: 222px;
  height: 45px;
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;

  img {
    right: 0;
    ${"" /* height:20.99px;
    width:31.42px; */}
    padding-top:12px;
    padding-bottom: 12px;
    padding-right: 6px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;
const LeftWrapper = styled.div`
  padding-left: 60px;
  margin-right: 55px;
`;
const RightWrapper = styled.div`
  background-color: var(--mainBlue);
  width: 650px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentFunctionSection = styled.div `
width:1000px;
margin:auto;
text-align:center;
height:311px;
margin-bottom:51px;
`

const FunctionHeader = styled.div `
width: 208px;
height: 40px;
font-weight: bold;
font-size: 36px;
line-height: 29px;
${'' /* margin-top:29px; */}
margin:auto;
`
const FunctionIcon =styled.div `
margin-bottom:21px;
height:100px;
`
const FunctionText = styled.div `
width: 208px;
height: 142px;
font-weight: 300;
font-size: 24px;
line-height: 29px;
margin:auto;'
`

const Title = styled.div`
  font-weight: 300;
  font-size: 72px;
  line-height: 85px;
  width: 421px;
  margin-left: 50px;
  margin-bottom: 127px;
`;
const TextBody = styled.div`
  width: 416px;
  height: 216px;
  font-weight: 300;
  font-size: 26px;
  line-height: 45px;
  font-weight: 300;
  font-size: 26px;
  line-height: 45px;
`;
const TextBodyTwo = styled.div`
  width: 330px;
  height: 170px;
  font-size: 18px;
  line-height: 45px;
  font-weight: 300;
  color: var(--mainGreen);
`;
const ActionButton = styled.a`
  width: 470px;
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
`;
const LineEnding = styled.hr`
  width: 974px;
  margin: auto;
  border: 1px solid var(--mainBlack);
  margin-top: 70px;
`;
