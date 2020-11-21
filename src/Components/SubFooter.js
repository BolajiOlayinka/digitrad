import React from "react";
import Logo from "../assets/logo.png";
import styled from "styled-components";
import animateScrollTo from "animated-scroll-to";


export default function SubFooter() {
  const Scroll = () => {
    animateScrollTo(0);
  };
  return (
    <React.Fragment>
      <LogoContainer onClick={Scroll}>
        <img src={Logo} alt="digitrad Logo" />
      </LogoContainer>
     
    </React.Fragment>
  );
}

const LogoContainer = styled.div`
  text-align: center;
  img {
    width: 228.96px;
    height: 37.73px;
    margin-top: 79.13px;
    margin-bottom: 232.14px;
    cursor:pointer;
  }
`;
