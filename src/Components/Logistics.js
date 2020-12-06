import React, { useEffect } from "react";
import styled from "styled-components";
import DT from "../assets/DT.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import TickCircle from "../assets/tickcircle.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
export default function Logistics() {
  useEffect(() => {
    Aos.init({
        duration: 1200,},
      []
    );
  });
  return (
    <React.Fragment>
    <ExtendDT data-aos="fade-right"></ExtendDT>
      <Container className="logistics">
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
        <SmallHeaderSection>
        <SmallJapaneseHeading className="roboto">
              輸出業務は、本当に大変です。
              輸出・輸入基準の確認、各種船積書類の作成、物流会社とのやり取り・・・
            </SmallJapaneseHeading>
        </SmallHeaderSection>

        <DigitradPhrase>
          その業務、DiGiTRADで半分に減らしませんか？
        </DigitradPhrase>
        <BackgroundLine data-aos="fade-right" style={{transitionDuration: "3.6s"}}/>
        <CircleTickSection>
          
            <FunctionBody  data-aos="fade-right" style={{transitionDuration: "0.6s"}}>
              <img src={TickCircle} alt="tickcircle" />
              <TickText>
              輸出、輸入の可否を一緒にお調べ
              </TickText>
            </FunctionBody>

            <FunctionBody  data-aos="fade-right" style={{transitionDuration: "1.2s"}}>
              <img src={TickCircle} alt="tickcircle" />
              <TickText>
              輸出書類は自動作成
              </TickText>
            </FunctionBody>

            <FunctionBody  data-aos="fade-right" style={{transitionDuration: "2.4s"}}>
              <img src={TickCircle} alt="tickcircle" />
              <TickText>
              物流会社とのやり取りはチャットで楽々
              </TickText>
            </FunctionBody>
          
        </CircleTickSection>
        <SmallCircleTick>
        <SmallBackgroundLine data-aos="fade-down" style={{transitionDuration: "3.4s"}}/>
        <TickSection>
          <Section>
          <img src={TickCircle} alt="tickcircle"  data-aos="fade-up" style={{transitionDuration: "0.6s"}}/>
          <SectionText>
              輸出、輸入の可否を一緒にお調べ
              </SectionText>
          </Section>
          <Section>
          <img src={TickCircle} alt="tickcircle" data-aos="fade-up" style={{transitionDuration: "1.2s"}} />
          <SectionText>
          輸出書類は自動作成
              </SectionText>
          </Section>
          <Section>
          <img src={TickCircle} alt="tickcircle" data-aos="fade-up" style={{transitionDuration: "2.4s"}} />
          <SectionText>
          物流会社とのやり取りはチャットで楽々
              </SectionText>
          </Section>
        </TickSection>
        </SmallCircleTick>
        <PriceConfidant>
        そして・・・価格にも自信あり！！

        </PriceConfidant>
        <FontAwesomeContainer>
        <FontAwesomeIcon icon={faArrowDown}/>
        </FontAwesomeContainer>
        
        <SizeContainer>
        出荷製品のサイズ、重量を入力すると即時で概算物流費が分かります
        </SizeContainer>

        <ActionButton href="https://app.digitrad.world/auth/signin" rel="noreferrer" target="_blank">
          LEARN MORE
        </ActionButton>
        <LineEnding />
      </Container>
    </React.Fragment>
  );
}
const Container = styled.div`
 width:100%;
 margin:auto;
  @media(min-width:1200px){
    width:1034px;
    margin:auto;
  }
  @media (min-width: 768px) and (max-width: 991px) {
width:100%;
margin:auto;

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
  margin-top:76px;
`;
const DTSection = styled.div`
  background-color: var(--mainBlue);
  width: 222px;
  height: 45px;
  margin-top: 15px;
position:relative;
z-index:2;
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
    margin-top: 10px;
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
  @media (min-width: 991px) and (max-width: 1199px) {
    margin-left: 67px;
    width:400px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 300px;
    font-size: 56px;
    margin-left: 30px;
  }
  @media (min-width: 576px) and (max-width: 767.9px) {
    width: 300px;
    font-size: 56px;
    margin-left: 30px;
    height: 200px;
  }
  @media (max-width: 575.9px) {
    width: 200px;
    font-size: 36px;
    line-height: 44px;
    margin-left: 50px;
    height:90px;
  }
  @media (max-width: 426px) {
    font-size: 36px;
    line-height: 44px;
    margin-left: 50px;
    height: 96px;
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
  @media (min-width: 768px) and (max-width:991px) {
    width:60%;
    margin-left:67px;
  }
  @media(max-width:576px){
    display:none;
  }
`;
const SmallJapaneseHeading = styled.div `
font-size: 15px;
line-height: 20px;
font-weight: 300;
width:263px;
margin:auto;
margin-top:20px;
margin-bottom:20px;
@media(min-width:426px) and (max-width:576px){
  width:400px;
  font-size:24px;
  line-height:36px;
}
`
const DigitradPhrase = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  width: 782px;
  height: 45px;
  margin: auto;
  color: var(--mainBlue);
  margin-bottom:100px;
  @media(min-width:768px) and (max-width:991px){
    width:700px;
    font-size:28px;
    margin:auto;
    margin-bottom:100px;
  }
  @media(min-width:576.9px) and (max-width:767.9px){
    width:90%;
    margin:auto;

    font-size:28px;
    line-height:45px;
    margin-bottom:100px;
    margin-top:12px;
   
  }
  
  @media(max-width:576px){
    width:289px;
    font-size:25px;
    line-height:45px;
    margin:auto;
    margin-top:12px;
   
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
  margin-top: 50px;
  :hover{
    text-decoration:none;
  }
  @media(max-width:576px){
    width:60%;
    margin:auto;
    margin-top:50px;
  }
  @media(max-width:425px){
    width:239px;
    margin:auto;
    margin-top: 50px;
  }
  @media(max-width:576px){
    margin-bottom:50px;
  }
  
`;
const LineEnding = styled.hr`
  width: 974px;
  margin: auto;
  border: 1px solid var(--mainBlack);
  background-color:var(--mainBlack);
  margin-top: 70px;
  @media(max-width:990.9px){
    width:80%;
    margin:auto;
    margin-top:70px;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    margin-top: 70px;
  }
  @media (max-width: 576px) {
    margin-top:50px;
    width: 157px;
  }
`;
const SmallBackgroundLine = styled.hr `
color: var(--mainGreen);
border: 2px solid var(--mainGreen);
height:150px;
position:absolute;
margin-left:22%;
background-color:var(--mainGreen);
margin-top:63px;
height:320px;
@media(max-width:425px){
  margin-left:75px;
  height:250px;
}
@media(max-width:375px){
  margin-left:55px;
}
`
const BackgroundLine = styled.hr`
  color: var(--mainGreen);
  border: 2px solid var(--mainGreen);
  width: 800px;
  margin: auto;
  background-color:var(--mainGreen);
  @media (min-width: 991px) and (max-width: 1024px) {
width:800px;
margin:auto;
  }
  @media (min-width: 768px) and (max-width: 990.9px) {
    width:600px;
  }
  @media (max-width:767.9px) {
display:none

}

`;
const TickSection = styled.div `
width:90%;

`
const Section = styled.div `
display:flex;
align-items:center;
width:70%;
padding-top:63px;
margin:auto;

@media(max-width:425px){
  width:325px;
  margin:auto;
  
}
:nth-child(1) {
padding-top:0px;
}
:nth-child(3) {
padding-bottom:42px;
}
img{
  width:100px;
  x
  z-index:2;
  position:relative;
}
`
const SectionText = styled.div `
width:165px;
font-weight: 300;
font-size: 20px;
line-height: 29px;
text-align:center;
margin-left:30px;

@media(max-width:425px){
width:165px;
font-weight: 300;
font-size: 20px;
line-height: 29px;
}

`
const SmallCircleTick = styled.div `
display:flex;
@media(min-width:576px){
  display:none;
}
@media(max-width:425px){
  margin-top:60px;
}
`

const SmallHeaderSection =styled.div `
@media(min-width:576.9px){
  display:none;
}
`
const CircleTickSection = styled.div`
position:relative;
z-index:2;
${'' /* text-align:center; */}
width:1000px;
margin:auto;
margin-top:-60px;
text-align:center;
display:flex;
justify-content:space-between;
@media (min-width: 991px) and (max-width: 1024px) {
  position:relative;
  z-index:2;
  margin-top:-60px;
  width:900px;
  margin:auto;
  margin-top:-60px;
}
@media (min-width: 768px) and (max-width: 990.9px) {
width:700px;
margin:auto;
margin-top:-60px;


}
@media (max-width:767.9px) {
display:none

}
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
@media(max-width:576px){
   width:349px;
   margin:auto;
   text-align:center;
   font-size: 18px;
line-height: 31px;
 }
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
@media(max-width:767.9px){
  width:90%;
  margin:auto;
  font-size:12px;
}
@media(max-width:576px){
   width:349px;
   margin:auto;
   text-align:center;
   font-size: 18px;
line-height: 31px;
 }
`
const FontAwesomeContainer = styled.div `
text-align:center;
color:var(--mainBlue);
margin-top:-5px;
font-size:18px;
`
