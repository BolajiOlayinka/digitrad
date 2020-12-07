import React, { useEffect } from "react";
import styled from "styled-components";
import PaymentImage from "../assets/paymentimage.svg";
import Calculator from "./Calc";
import DT from "../assets/DT.svg";
import Timer from "../assets/timer.svg";
import Secured from "../assets/secure.svg";
import Percent from "../assets/percent.svg";
import TenMin from "../assets/10Min.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Payment() {
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
      <ExtendDT data-aos="fade-right"></ExtendDT>
    
    <Container className="payment">
      <HeaderSection>
        <DTSection data-aos="fade-right">
          <img src={DT} alt="Icon" />
        </DTSection>
        <div>
          <Title>International Payment</Title>
        </div>
      </HeaderSection>
      <VisibleOnSmall>
        <TopSmallVisibility>
          貿易代金決済・国際送金で、以下のような悩みを抱えていらっしゃる企業様へ
        </TopSmallVisibility>
      </VisibleOnSmall>
      <StyledWrapper>
        <LeftWrapper>
          <img src={PaymentImage} alt="Digitrad Payment Service" />
          <TextBody>
            貿易代金決済・国際送金で、以下のような悩みを抱えていらっしゃる企業様へ
          </TextBody>
          <TextBodyTwo>
            <div>
              <strong style={{ fontWeight: "bold" }}>✓</strong>{" "}
              少額の送金なのに、手数料が高い
            </div>
            <div>
              <strong style={{ fontWeight: "bold" }}>✓</strong> 毎度手続きが煩雑{" "}
            </div>
            <div>
              <strong style={{ fontWeight: "bold" }}>✓</strong>{" "}
              外貨規制が頻繁に起こり、いつ送金、 着金できるかわからない
            </div>
          </TextBodyTwo>
        </LeftWrapper>
        <VisibleOnSmall>
          <SmallPaymentFunction>
            <div className="row align-items">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <FunctionIcon data-aos="flip-right">
                  <img src={Timer} alt="Digitrad Fast Payment" />
                </FunctionIcon>
                <FunctionHeader>即時</FunctionHeader>
                <FunctionText>最短1時間以内で着金</FunctionText>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <FunctionIcon data-aos="flip-right">
                  <img src={Secured} alt="Digitrad Fast Payment" />
                </FunctionIcon>

                <FunctionHeader>安全</FunctionHeader>

                <FunctionText>
                  独自のエスクロー機能による安全な送金を実現。
                </FunctionText>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <FunctionIcon data-aos="flip-right">
                  <img src={Percent} alt="Digitrad Fast Payment" />
                </FunctionIcon>
                <FunctionHeader>安価</FunctionHeader>

                <FunctionText>手数料0.7%～</FunctionText>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                <FunctionIcon data-aos="flip-right">
                  <img src={TenMin} alt="Digitrad Fast Payment" />
                </FunctionIcon>
                <FunctionHeader>簡単</FunctionHeader>
                <FunctionText>
                  以下問い合わせより送金額を入力するだけ。10分程度で手続き完了。
                </FunctionText>
              </div>
            </div>
          </SmallPaymentFunction>
        </VisibleOnSmall>
        <RightWrapper>
          <div>
            <Calculator />
          </div>
        </RightWrapper>
      </StyledWrapper>
      <VisibleOnSmall></VisibleOnSmall>
      <PaymentFunctionSection>
        <div className="row align-items">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <FunctionIcon data-aos="flip-right">
              <img src={Timer} alt="Digitrad Fast Payment" />
            </FunctionIcon>
            <FunctionHeader>即時</FunctionHeader>
            <FunctionText>最短1時間以内で着金</FunctionText>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <FunctionIcon data-aos="flip-right">
              <img src={Secured} alt="Digitrad Fast Payment" />
            </FunctionIcon>

            <FunctionHeader>安全</FunctionHeader>

            <FunctionText>
              独自のエスクロー機能による安全な送金を実現。
            </FunctionText>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <FunctionIcon data-aos="flip-right">
              <img src={Percent} alt="Digitrad Fast Payment" />
            </FunctionIcon>
            <FunctionHeader>安価</FunctionHeader>

            <FunctionText>手数料0.7%～</FunctionText>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <FunctionIcon data-aos="flip-right">
              <img src={TenMin} alt="Digitrad Fast Payment" />
            </FunctionIcon>
            <FunctionHeader>簡単</FunctionHeader>
            <FunctionText>
              以下問い合わせより送金額を入力するだけ。10分程度で手続き完了。
            </FunctionText>
          </div>
        </div>
      </PaymentFunctionSection>
      <VisibleOnSmall>
        <Highlight>
          <div>
            <StyledFontAwesomeIcon icon={faCheck} />
            少額の送金なのに、手数料が高い
          </div>
          <div>
            <StyledFontAwesomeIcon icon={faCheck} />
            毎度手続きが煩雑{" "}
          </div>
          <div>
            <StyledFontAwesomeIcon icon={faCheck} />
            外貨規制が頻繁に起こり、いつ送金、 着金できるかわからない
          </div>
        </Highlight>
      </VisibleOnSmall>
      <ActionButton
        href="https://app.digitrad.world/auth/signin"
        rel="noreferrer"
        target="_blank"
      >
        SEE IN ACTION
      </ActionButton>
      <LineEnding />
    </Container>
    </React.Fragment>
  );
}
const Container = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 1200px) {
    width: 1000px;
    margin: auto;
  }
`;
const ExtendDT = styled.div `
background-color:var(--mainBlue);
height:45px;
width:25%;
position:absolute;
z-index:1;
margin-top:91px;

@media(min-width:1024.5px) and (max-width:1199px){
  width:15%;
}
@media(min-width:1800px){
  width:31%;
}
@media(min-width:2600px){
  width:35%;
}
@media(min-width:3000px){
  width:40%;
}
@media(max-width:1024px){
display:none;
}
`
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
  position:relative;
  z-index:2;
  img {
    right: 0;
    ${"" /* height:20.99px;
    width:31.42px; */}
    padding-top:12px;
    padding-bottom: 12px;
    padding-right: 6px;
  }
  @media (max-width: 768px) {
    width: 180px;
  }
  @media (max-width: 576px) {
    width: 85px;
  }
  @media (max-width: 425px) {
    width: 85px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  ${'' /* align-items: center; */}
  margin-bottom: 100px;
  @media (min-width: 768px) and (max-width: 991px) {
    flex-wrap: wrap;
  }
  @media (max-width: 767.9px) {
    flex-wrap: wrap;
  }
`;
const LeftWrapper = styled.div`
  padding-left: 60px;
  margin-right: 55px;
  @media (min-width: 768px) and (max-width: 991px) {
    width: 95%;
    img {
      display: none;
    }
  }
  @media (max-width: 767.9px) {
    width: 90%;
    margin: auto;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
    img {
      display: none;
    }
  }
  @media (max-width: 425px) {
    img {
      display: block;
    }
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
`;

const RightWrapper = styled.div`
  background-color: var(--mainBlue);
  width: 650px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 767.9px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const PaymentFunctionSection = styled.div`
  width: 1000px;
  margin: auto;
  text-align: center;
  height: 311px;
  margin-bottom: 51px;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 767.9px) {
    margin-bottom: 0px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
const SmallPaymentFunction = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
  text-align: center;
`;
const VisibleOnSmall = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
const Highlight = styled.div`
  color: var(--mainGreen);
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    font-size: 24px;
    line-height: 48px;
    font-style: 300;
  }
  @media (max-width: 425px) {
    font-size: 18px;
    line-height: 45px;
  }
`;
const TopSmallVisibility = styled.div`
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  @media (max-width: 768px) {
    font-size: 26px;
    width: 80%;
    margin-left: auto;
    line-height: 48px;
    font-weight: bold;
  }
  @media (max-width: 425px) {
    width: 275px;
    height: 50px;
    font-size: 15px;
    line-height: 20px;
    margin: auto;
  }
`;
const FunctionHeader = styled.div`
  width: 208px;
  height: 40px;
  font-weight: bold;
  font-size: 36px;
  line-height: 29px;
  ${"" /* margin-top:29px; */}
  margin:auto;
  @media (min-width: 767.9px) and (max-width: 991px) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    font-size: 36px;
    text-align: center;
    margin-top: 10px;
  }
`;
const FunctionIcon = styled.div`
  margin-bottom: 21px;
  height: 100px;
  @media (min-width: 767.9px) and (max-width: 991px) {
    height: 20%;
    img {
      height: 53px;
      margin: auto;
    }
  }
  @media (max-width: 425px) {
    height: 60px;
    text-align: center;
    img {
      width: 50px;
      height: 55px;
      margin: auto;
    }
  }
`;
const FunctionText = styled.div`
  width: 208px;
  height: 142px;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  margin: auto;
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    font-size: 20px;
  }
  @media (max-width: 767.9px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    font-size: 15px;
    text-align: center;
  }
`;

const Title = styled.div`
  font-weight: 300;
  font-size: 72px;
  line-height: 85px;
  width: 421px;
  margin-left: 50px;
  margin-bottom: 127px;
  @media (min-width: 768px) and (max-width: 991px) {
    margin-bottom: 40px;
  }
  @media (max-width: 767.9px) {
    width: 400px;
    margin-bottom: 40px;
  }
  @media (max-width: 576px) {
    font-size: 36px;
    line-height: 44px;
    width: 244px;
    margin-left: 52px;
  }
`;
const TextBody = styled.div`
  width: 336px;
  height: 118px;
  font-weight: 300;
  font-size: 26px;
  line-height: 45px;
  margin-top: 38px;
  margin-bottom: 38px;
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    font-size: 30px;
    line-height: 48px;
    font-weight: bold;
  }
  @media (max-width: 767.9px) {
    display: none;
  }
`;
const TextBodyTwo = styled.div`
  width: 330px;
  height: 170px;
  font-size: 18px;
  line-height: 45px;
  font-weight: 300;
  color: var(--mainGreen);
  @media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 70px;
    height: 100%;
    padding-top: 18px;
    padding-bottom: 18px;
  }
  @media (max-width: 767.9px) {
    margin-bottom: 70px;
    height: 100%;
    padding-top: 18px;
    padding-bottom: 18px;
    margin-top: 70px;
  }
  @media (max-width: 576px) {
    width: 239px;
  }
`;
const LineEnding = styled.hr`
  width: 974px;
  margin: auto;
  border: 1px solid var(--mainBlack);
  background-color: var(--mainBlack);
  margin-top: 70px;
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
    width: 157px;
  }
`;
