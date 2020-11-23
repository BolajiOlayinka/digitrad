import React from "react";
import styled from "styled-components";
import PaymentImage from "../assets/paymentimage.png";
import Calculator from './Calc';

export default function Payment() {
  return (
    <Container>
      <StyledWrapper>
        <LeftWrapper>
          <Title>International Payment</Title>
          <img src={PaymentImage} alt="Digitrad Payment Service" />
          <TextBody>
            館ヤウホ説金3就シ蘇田準とイろ家討ト事中テメコヘ送混や政利シヘハス断救けにむい変掲81皇テ都響
            そねぱ略客人ヲウミタ共5籍すせ。
          </TextBody>
        </LeftWrapper>

        <RightWrapper>
        <div>
          <Calculator/>
          </div>
        </RightWrapper>
      </StyledWrapper>
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
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top:40px;
  margin-bottom:100px;

`;
const LeftWrapper = styled.div`
  padding-left: 60px;
  margin-right: 55px;
`;
const RightWrapper = styled.div`
  background-color: var(--mainBlue);
  width: 650px;
  height: 550px;
 display:flex;
 align-items:center;
 justify-content:center;
`;
const Title = styled.div`
  font-weight: 300;
  font-size: 72px;
  line-height: 85px;
  width: 435px;
  height: 208px;
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
  margin-top: 35px;
`;

