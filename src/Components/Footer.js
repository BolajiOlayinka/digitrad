import React from 'react';
import styled from 'styled-components';
import Whatsapp from "../assets/whatsapp.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";

export default function Footer() {
    return (
        <React.Fragment>
        <FooterWrapper>
            <FooterContainer>
            
            <FooterLeft>
            <div>DiGiTRAD is a registered trademark and product by STANDAGE, Inc</div>
            <div>Privacy Policy</div>
            </FooterLeft>
            <FooterRight>
               <IconContainer>
                   <a href="http://app.digitrad.world/"><img src={Whatsapp} alt="Whatsapp Icon"/></a>
                   <a href="http://app.digitrad.world/"><img src={Facebook} alt="Facebook Icon"/></a>
                   <a href="http://app.digitrad.world/"><img src={Instagram} alt="Instagram Icon"/></a>
                   <a href="http://app.digitrad.world/"><img src={Linkedin} alt="Linkedin Icon"/></a>
                   <a href="http://app.digitrad.world/"><img src={Twitter} alt="Twitter Icon"/></a>
               </IconContainer>
            </FooterRight>
            </FooterContainer>
        </FooterWrapper>
        </React.Fragment>
    )
}

const FooterWrapper = styled.div `
background-color:var(--mainBlack);
${'' /* padding: 9px 20px; */}
height: 86px;
display:flex;
`
const FooterContainer = styled.div `
@media(min-width:1200px){
    width:1200px;
    margin:auto;
display:flex;
align-items:center;
}
`
const FooterLeft =styled.div `
display:flex;
align-self:center;
color:white;
font-weight:300;
font-size:16px;
line-height:24px;
div:nth-child(1) {
border-right:1px solid white;
padding-right:10px;
margin-right:10px;
}
`
const FooterRight = styled.div `
display:flex;
margin-left:auto;
`
const IconContainer= styled.div `
display:flex;
width:192px;
height:24px;
justify-content:space-between;
img{
    width:24px;
    height:24px;
    
}
`