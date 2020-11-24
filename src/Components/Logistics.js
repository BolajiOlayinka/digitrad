import React, { useEffect } from "react";
import styled from "styled-components";
import DT from "../assets/DT.png";
import Aos from "aos";
import "aos/dist/aos.css";
import TickCircle from "../assets/tickcircle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
export default function Logistics() {
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
      <Container>
        <HeaderSection>
          <DTSection data-aos="fade-right">
            <img src={DT} alt="Icon" />
          </DTSection>
          <div>
            <EnglishHeading> Overseas Logistics</EnglishHeading>
            <JapaneseHeading>
              輸出業務は、本当に大変です。
              輸出・輸入基準の確認、各種船積書類の作成、物流会社とのやり取り・・・
            </JapaneseHeading>
          </div>
        </HeaderSection>
        <DigitradPhrase>
          その業務、DiGiTRADで半分に減らしませんか？
        </DigitradPhrase>
        <BackgroundLine />
        <CircleTickSection>
          
            <FunctionBody  data-aos="fade-right">
              <img src={TickCircle} alt="tickcircle" />
              <TickText>
              輸出、輸入の可否を一緒にお調べ
              </TickText>
            </FunctionBody>

            <FunctionBody  data-aos="slide-up">
              <img src={TickCircle} alt="tickcircle" />
              <TickText>
              輸出書類は自動作成
              </TickText>
            </FunctionBody>

            <FunctionBody  data-aos="fade-left">
              <img src={TickCircle} alt="tickcircle" />
              <TickText>
              物流会社とのやり取りはチャットで楽々
              </TickText>
            </FunctionBody>
          
        </CircleTickSection>
        <PriceConfidant>
        そして・・・価格にも自信あり！！

        </PriceConfidant>
        <FontAwesomeContainer>
        <FontAwesomeIcon icon={faArrowDown}/>
        </FontAwesomeContainer>
        
        <SizeContainer>
        出荷製品のサイズ、重量を入力すると即時で概算物流費が分かります
        </SizeContainer>

        <ActionButton href="https://app.digitrad.world">
          LEARN MORE
        </ActionButton>
        <LineEnding />
      </Container>
    </React.Fragment>
  );
}
const Container = styled.div`
  width: 1200px;
  margin: auto;
`;

const HeaderSection = styled.div`
  display: flex;
  margin-top:76px;
`;
const DTSection = styled.div`
  background-color: var(--mainBlue);
  width: 222px;
  height: 45px;
  margin-top: 36px;

  display: flex;
  justify-content: flex-end;

  img {
    right: 0;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 6px;
  }
`;
const EnglishHeading = styled.div`
  width: 435px;
  height: 208px;
  font-size: 72px;
  line-height: 85px;
  font-weight: 300;
  color: var(--mainBlack);

  @media (min-width: 1200px) {
    ${"" /* margin-left: 262px; */}
    margin-left:67px;
  }
`;
const JapaneseHeading = styled.div`
  width: 451px;
  height: 159px;
  width: 451px;
  height: 159px;
  font-size: 26px;
  font-weight: 300;
  line-height: 45px;
  color: var(--mainBlack);

  @media (min-width: 1200px) {
    ${"" /* margin-left: 262px; */}
    margin-left:67px;
  }
`;

const DigitradPhrase = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  width: 782px;
  height: 45px;
  margin: auto;
  color: var(--mainBlue);
  Margin-bottom:100px;
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
const BackgroundLine = styled.hr`
  color: var(--mainGreen);
  border: 2px solid var(--mainGreen);
  width: 800px;
  margin: auto;
  
`;
const CircleTickSection = styled.div`
position:relative;
z-index:2;
${'' /* text-align:center; */}
width:1034px;
margin:auto;
margin-top:-60px;
text-align:center;
display:flex;
justify-content:space-between;

`;
const FunctionBody = styled.div `
text-align:center;
`
const TickText = styled.div `
font-weight:300;
font-style:normal;
font-size: 24px;
line-height: 29px;
width: 160px;
height: 106px;
text-align:center;
margin-top:24px;

 

`
const PriceConfidant = styled.div`
width:355.1px;
height:60px;
background-color:var(--mainBlue);
align-items:center;
display:flex;
justify-content:center;
margin:auto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 45px;
color:white;
`
const SizeContainer = styled.div `
display:flex;
align-items:center;
margin:auto;
justify-content:center;
margin-top:11px;
width: 672px;
height: 60px;
border: 1px solid var(--mainBlue);
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 45px;
color:var(--mainBlue);
`
const FontAwesomeContainer = styled.div `
text-align:center;
color:var(--mainBlue);
margin-top:-5px;
font-size:18px;
`
