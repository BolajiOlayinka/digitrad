import React from "react";
import Logo from "../assets/logo.png";
import styled from "styled-components";

export default function SubFooter() {
  return (
    <React.Fragment>
      <LogoContainer>
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
  }
`;
