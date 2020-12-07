import React, { useEffect } from "react";
import styled from "styled-components";
import Lock from "../assets/lock.svg";
import DT from "../assets/DT.svg";
import Aos from "aos";
import "aos/dist/aos.css";

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
    <React.Fragment>
    {/* <ExtendDT data-aos="fade-right"></ExtendDT> */}
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
          
          <SmallEnglishSection>Finance Tools</SmallEnglishSection>
            <EnglishHeading>Trading Finance Service</EnglishHeading>
                  
            
            <JapaneseHeading>
              貿易ビジネスを開始した多くの企業が、【キャッシュフローが悪くなった】と言っています。
              そのため、貿易企業の実に3割以上が貿易ファイナンスサービスを活用しています。
            </JapaneseHeading>
            </div>

         
          <ImageSection>
            <img src={Lock} alt="padlock lock" />
          </ImageSection>
        </HeaderSection>

        <Wrapper>
          <ActionButton href="https://app.digitrad.world/auth/signin" rel="noreferrer" target="_blank">
            LEARN MORE
          </ActionButton>
          <LineEnding />
        </Wrapper>
      </Container>
    </React.Fragment>
  );
}
const Container = styled.div`
width:100%;
@media (min-width:1200px){
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
// const ExtendDT = styled.div `
// background-color:var(--mainBlue);
// height:45px;
// width:25%;
// position:absolute;
// z-index:1;
// margin-top:91px;

// @media(min-width:1024.5px) and (max-width:1199px){
//   width:15%;
// }
// @media(min-width:1800px){
//   width:31%;
// }
// @media(min-width:2600px){
//   width:35%;
// }
// @media(min-width:3000px){
//   width:40%;
// }
// @media(max-width:1024px){
// display:none;
// }
// `
const HeaderSection = styled.div`
  display: flex;
  margin-top: 76px;
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
  @media(min-width:1500px){
    margin-left:100px
  }
  @media(min-width:2000px){
    margin-left:30px
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
    line-height:70px;
    height:150px;
  }
  @media (max-width: 768px) {
   display:none;
  }

`;
const SmallEnglishSection = styled.div `
@media(min-width:768.1px){
  display:none
}

@media (min-width: 576px) and (max-width: 768.1px) {
    margin-left: 50px;
    width: 230px;
    font-size: 60px;
    line-height:80px;


  }
  @media (max-width: 575.9px) {
    margin-left: 26px;
    width: 244px;
    font-size: 50px;
    line-height: 60px;
  }
  @media(max-width:375px){
    font-size:36px;
    line-height:44px;
    width:200px;
    margin-top:10px;
  }
`
const JapaneseHeading = styled.div`
  width: 451px;
  height: 159px;
  width: 451px;
  height: 159px;
  font-size: 26px;
  font-weight: 300;
  line-height: 45px;
  color: var(--mainBlack);
  margin-left: 67px;
  margin-bottom: 67px;
  @media (min-width: 1200px) {
    margin-left: 200px;
  }
  @media(min-width:1500px){
    margin-left:100px
  }
  @media(min-width:2000px){
    margin-left:30px
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
    margin-right:10px;
  }
  @media (min-width: 576px) and (max-width: 767.9px) {
    margin-left: 50px;
    width: 80%;
    font-size: 18px;
    margin-right:5px;
  }
  @media (max-width: 575.9px) {
    margin-left: 26px;
    line-height:40px;
    width: 80%;
    font-size: 15px;
  }
  @media(max-width:425px){
width:250px;
  }
  @media(max-width:375px){
    font-size:15px;
   line-height:30px;
    height:144px;
    width:221px;
    margin-top:10px;
  }
`;
const LargeDT = styled.div`
  background-color: var(--mainBlue);
  width: 222px;
  height: 45px;
  margin-top: 93px;
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
    width: 35%;
  }
  @media (min-width: 1801px) and (max-width: 2300px) {
    width: 38%;
  }
  @media (min-width: 2301px) and (max-width: 2600px) {
    width: 35%;
  }
  @media (min-width: 2652px) and (max-width: 4000px) {
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
  position:relative;
  z-index:2;
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
    padding-right:10px;
  }
  @media(min-width:768px) and (max-width:991px){
    width:50%;
    img{
   width:50%;
   height:70%; 
  }
  }
  
  @media(max-width:576px){
    display:none;
  }
`;
const SmallImageSection = styled.div `
img{
    width:130px;
  margin-top:100px;
  margin-left:-30px;
  }
@media(max-width:425px){
  img{
    width:130px;
  margin-top:100px;
  margin-left:-80px;
}

}
@media(max-width:375px){
  img{
    width:100px;
    height:142px;
  margin-top:85px;
  }
 
} 


@media(min-width:576px){
  display:none;
}
`
const Wrapper = styled.div`
 width:100%;
 margin:auto;
  @media (min-width: 1200px) {
    width: 1034px;
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 50px;
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
  :hover {
    text-decoration: none;
  }
  @media(max-width:576px){
    width:70%;
    margin:auto;
    margin-top:50px;
  }

`;
const LineEnding = styled.hr`
  width: 974px;
  margin: auto;
  border: 1px solid var(--mainBlack);
  background-color:var(--mainBlack);
  margin-top: 70px;
  @media (min-width: 991px) and (max-width: 1023.9px) {
    width: 500px;
    margin:auto;
    margin-top:70px;
  }
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
