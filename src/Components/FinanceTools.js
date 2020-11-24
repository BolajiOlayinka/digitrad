import React,{useEffect} from "react";
import styled from "styled-components";
import Lock from "../assets/lock.png";
import DT from "../assets/DT.png";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function FinanceTools() {
  useEffect(()=>{
    Aos.init({
      duration:1200
    },[])
  })
  return (
    <React.Fragment>
      <Container>
        <DTSection data-aos="fade-right">
          <img src={DT} alt="Icon" />
        </DTSection>
        <Wrapper>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <LeftSection>
                <Title>Finance Tools</Title>
                <BodyText>
                  館ヤウホ説金3就シ蘇田準とイろ家討ト事中テメコヘ送混や政利シヘハス断救けにむい変掲81皇テ都響
                  そねぱ略客人ヲウミタ共5籍すせ。
                </BodyText>
              </LeftSection>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <RightSection>
                <img src={Lock} alt="Digitrad Secured" />
              </RightSection>
            </div>
          </div>
          <ActionButton href="https://app.digitrad.world">
            LEARN MORE
          </ActionButton>
          <LineEnding />
        </Wrapper>
      </Container>
    </React.Fragment>
  );
}
const Container = styled.div`
  width: 1200px;
  margin: auto;
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
const Wrapper = styled.div`
  @media (min-width: 1200px) {
    width: 1034px;
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 50px;
  }
`;
const LeftSection = styled.div``;
const RightSection = styled.div`
text-align:right;
`;

const Title = styled.div`
  width: 315px;
  height: 174px;
  font-weight: 300;
  font-size: 72px;
  line-height: 85px;
`;
const BodyText = styled.div`
  width: 416px;
  height: 216px;
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
  margin-top: 50px;
  :hover{
    text-decoration:none;
  }
`;
const LineEnding = styled.hr`
  width: 974px;
  margin: auto;
  border: 1px solid var(--mainBlack);
  margin-top: 70px;
`;
