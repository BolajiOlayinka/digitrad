import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import FreightShip from '../assets/ship.png';
import Link from 'react-router-hash-link';

export default function BannerSection() {
return(
    <React.Fragment>
    <Container>
    <div className="row align-items-center">
        <div className="col-xl-7 col-lg-7 col-md-6">
        <LeftSection>
            <img src={Logo} alt="Digitrad Logo"/>
            <JapaneseBannerText> 
            新しい国際販売のご提案
            </JapaneseBannerText>
            <EnglishBannerText> 
            International Digital Trading Service
            </EnglishBannerText>
        </LeftSection>
        
        </div>
        <div className="col-xl-5 col-lg-5 col-md-6">
        <RightSection>
        <img src={FreightShip} alt="Digitrad Freight Ship"/>
        </RightSection>
        </div>
    </div>
    <div className="row">
    {/* <div className="col-xl-3 col-lg-3 col-md-3">
    <StyledSectionLink to ="/">

    </StyledSectionLink>
    </div> */}
    </div>
    </Container>
    </React.Fragment>
)

}

const Container = styled.div `

@media(min-width:1200px){
    width:1200px;
    margin:auto;
}
`
const LeftSection =styled.div `

`
const RightSection =styled.div `
img{
    height:380px;
}
`
const JapaneseBannerText = styled.div `
width:572px;
height:46px;
font-style:normal;
font-size:36px;
line-height:49px;
color:var(--mainBlack);
margin-top:30.55px;
`
const EnglishBannerText = styled.div `
width:486px;
height:118px;
font-style:normal;
font-weight:300px;
font-size:48px;
line-height:56px;
color:var(--maiinBlack)

`

// const StyledSectionLink =styled(Link) `
// width:268px;
// height:24px;
// `