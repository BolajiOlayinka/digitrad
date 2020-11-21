import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../assets/icon.png";

export default function Header() {
  const [background, setBackground] = useState("transparent");
  const [fixed, setFixed] = useState("initial");
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setBackground("rgba(0, 0, 0, 0.8)");
    } else {
      setBackground("transparent");
    }
  };
  const fixedScroll = () => {
    if (window.pageYOffset >= 180) {
      setFixed("fixed");
    } else {
      setFixed("initial");
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", fixedScroll);
  return (
    <React.Fragment>
      <NavWrapper background={background} fixed={fixed}>
        <Container>
          <LargeNav>
            <IconSection>
              <img src={Icon} alt="Digitrad Icon" />
            </IconSection>
            <ItemsContainer>
              <NavItems>
                <a href="https://app.digitrad.world/">ニュース</a>
              </NavItems>
              <NavItems>
                <a href="https://app.digitrad.world/">お問い合わせ</a>
              </NavItems>
              <NavItems>
                <a href="https://app.digitrad.world/">ABOUT</a>
              </NavItems>
            </ItemsContainer>
          </LargeNav>
        </Container>
      </NavWrapper>
    </React.Fragment>
  );
}

const NavWrapper = styled.div`
  z-index: 12;
  display: flex;
  flex: auto;
  align-items: center;
  position: ${(props) => props.fixed} !important;

  background: ${(props) => props.background} !important;
  transition: 0.4s all;
  width: -webkit-fill-available;
  @media (max-width: 576px) {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const Container = styled.div`
  @media (min-width: 1200px) {
    width: 1012px;
    margin: auto;
  }
`;

const IconSection = styled.div`
  height: 45px;
  img {
    width: 45px;
    height: 45px;
  }
`;
const LargeNav = styled.div`
  display: flex;
  padding-top: 25px;
  padding-bottom: 19px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ItemsContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const NavItems = styled.div`
  display: flex;

  height: 30px;
  margin-right: 40px;
  :nth-child(1) {
    width: 113px;
    a {
      width: 72px;
    }
  }
  :nth-child(2) {
    width: 158px;
    a {
      width: 108px;
    }
  }
  :nth-child(3) {
    width: 108px;
    margin-right: 0px;
    a {
      width: 58px;
    }
  }
  a {
    color: var(--mainGreen);
    font-size: 18px;
    font-weight: 400;
    line-height: 24.52px;
    height: 25px;
    text-decoration: none;
    :hover {
      text-decoration: none;
    }
  }
`;
