import React from 'react';
import styled from 'styled-components';
import Whatsapp from "../assets/whatsapp.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <React.Fragment>
        <FooterWrapper>
            <FooterContainer>
            
            <FooterLeft>
            <div>DiGiTRAD is a registered trademark and product by STANDAGE, Inc</div>
            <Link to ="/">Privacy Policy</Link>
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
padding-left:20px;
padding-right:20px;
width:1200px;
margin:auto;
@media(min-width:1200px){
    width:1200px;
    margin:auto;
display:flex;
align-items:center;
}
@media(max-width:425px){
    padding-left:21px;
    padding-right:21px;
    padding-top:12px;
    padding-bottom:12px;
    font-size:12px;
    line-height:20px
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
a{
    color:white;
    text-decoration:none;  
}
@media(max-width:425px){
    font-size:12px;
    line-height:20px
}
`
const FooterRight = styled.div `
display:flex;
margin-left:auto;
@media(max-width:425px){
    font-size:12px;
    line-height:20px
}
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