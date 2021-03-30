import React,{useEffect} from "react";
import Logo from "../assets/logo.svg";
import styled from "styled-components";
import animateScrollTo from "animated-scroll-to";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function SubFooter() {
  useEffect(()=>{
    Aos.init({
      duration:1200
    },[])
  })
  const Scroll = () => {
    animateScrollTo(0);
  };
  return (
    <React.Fragment>
      <LogoContainer onClick={Scroll} data-aos="flip-right">
        <img src={Logo} alt="digitrad Logo" />
      </LogoContainer>
     
    </React.Fragment>
  );
}

const LogoContainer = styled.div`
  text-align: center;
  img {
    width: 228.96px;
    margin-top: 247px;
    margin-bottom: 48px;
    cursor:pointer;
  }
  @media(max-width:576px){
    display:none;
  }
`;
