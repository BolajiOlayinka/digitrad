import React from 'react';
import styled from 'styled-components';
import Whatsapp from "../assets/whatsapp.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
// import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <React.Fragment>
        <FooterWrapper>
            <FooterContainer>
            
            <FooterLeft>
            <div>DiGiTRAD is a registered trademark and product by STANDAGE, Inc</div>
            <a href ={`${process.env.REACT_APP_URL}/terms`} rel="noreferrer" target="_blank">Privacy Policy</a>
            </FooterLeft>
            <FooterRight>
               <IconContainer>
                   <a href="https://wa.me/message/JRO5UQOD3LB3D1"  rel="noreferrer" target="_blank"><img src={Whatsapp} alt="Whatsapp Icon"/></a>
                   <a href="https://www.facebook.com/digitrad.ng/"  rel="noreferrer" target="_blank"><img src={Facebook} alt="Facebook Icon"/></a>
                   <a href="https://www.instagram.com/digitrad.world/"  rel="noreferrer" target="_blank"><img src={Instagram} alt="Instagram Icon"/></a>
                   <a href="https://www.linkedin.com/showcase/digitrad-world/"  rel="noreferrer" target="_blank"><img src={Linkedin} alt="Linkedin Icon"/></a>
                   <a href="https://mobile.twitter.com/digitrad_world" rel="noreferrer" target="_blank"><img src={Twitter} alt="Twitter Icon"/></a>
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
display:flex;
align-items:center;
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
    line-height:20px;
    flex-direction:column;
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
@media(min-width:768px) and (max-width:991px){
    font-size:12px;
    line-height:22px;
    width:70%;
}
@media(max-width:425px){
    font-size:12px;
    line-height:20px;
    width:100%;
}
`
const FooterRight = styled.div `
display:flex;
margin-left:auto;
@media(max-width:425px){
    flex-direction:column;
    font-size:12px;
    line-height:20px;
    margin-left:5px;
    width:100%;
}
@media(min-width:768px) and (max-width:991px){
    width:30%;
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
@media(min-width:768px) and (max-width:991px){
    width:130px;
    img{
        width:20px;
        height:20px;
    }
    
}
@media(max-width:425px){
    width:100px;
        img{
            width:10px;
            height:10px;
        }
    }
`