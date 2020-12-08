import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Nav, NavItem } from "reactstrap";
import Logo from "../assets/DT-bluebackground.svg";
import { HashLink as Link } from "react-router-hash-link";
import animateScrollTo from "animated-scroll-to";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [background, setBackground] = useState("white");
  const [boxshadow, setBoxShadow] = useState("transparent");
  const [fixed, setFixed] = useState("fixed");

  const [showIcon, setShowIcon] = useState(true);
  const [showItem, setShowItem] = useState(false);
  // const [SmallBackground, setSmallBackground]=useState("black")

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setBackground("white");
      setBoxShadow("0 0 10px rgba(0,0,0,0.2)");
    } else {
      setBackground("white");
      setBoxShadow("transparent");
    }
  };
  const fixedScroll = () => {
    if (window.pageYOffset >= 0) {
      setFixed("fixed");
    } else {
      setFixed("initial");
    }
  };
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", fixedScroll);

  const toggle = (e) => {
    setShowItem(!showItem, e);
    setShowIcon(!showIcon, e);
  };

  const ScrolltoMarketPlace = () => {
    animateScrollTo(document.querySelector(".crossborder"));
  };
  const ScrolltoInternationalPayment = () => {
    animateScrollTo(document.querySelector(".payment"));
  };
  const ScrolltoLogistics = () => {
    animateScrollTo(document.querySelector(".logistics"));
  };
  // const ScrolltoLogistics = () => {
  //   animateScrollTo(3630);
  // };
  const ScrolltoFinance = () => {
    animateScrollTo(document.querySelector(".finance"));
  };
  return (
    <NavWrapper background={background} boxshadow={boxshadow} fixed={fixed}>
      <StyledNavbar expand="md">
        <div onClick={toggle}>
          {showIcon ? (
            <StyledFontAwesome icon={faBars} />
          ) : (
            <StyledFontCancel icon={faBars} />
          )}
        </div>
        <LogoContainer>
          <Link to="/">
            <img src={Logo} alt="Digitrad Logo" />
          </Link>
        </LogoContainer>
        {showItem && (
          <StyledNav navbar>
            <NavItem>
              <StyledLink
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid white",
                }}
                to="/"
                onClick={() => {
                  ScrolltoMarketPlace();
                  toggle();
                }}
              >
                CROSSBORDER MARKETPLACE
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/"
                onClick={() => {
                  ScrolltoInternationalPayment();
                  toggle();
                }}
              >
                INTERNATIONAL PAYMENT
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/"
                onClick={() => {
                  ScrolltoLogistics();
                  toggle();
                }}
              >
                OVERSEAS LOGISTICS
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/"
                onClick={() => {
                  ScrolltoFinance();
                  toggle();
                }}
              >
                FINANCIAL TOOLS
              </StyledLink>
            </NavItem>
          </StyledNav>
        )}
        <LargeNav className="ml-auto">
          <StyledNav navbar>
            <NavItem>
              <StyledLink href="https://standage.co.jp/blog/"  rel="noreferrer" target="_blank">ニュース</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activeclassname="selected"
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid white",
                }}
                href="https://standage.co.jp/#top-contact"  rel="noreferrer" target="_blank"
              >
                お問い合わせ
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink href="https://standage.co.jp/"  rel="noreferrer" target="_blank">ABOUT</StyledLink>
            </NavItem>
          </StyledNav>
        </LargeNav>
      </StyledNavbar>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  z-index: 12;
  display: flex;
  flex: auto;
  align-items: center;
  position: ${(props) => props.fixed} !important;
  padding-top: 1em;
  padding-bottom: 1em;
  color: #373737;
  background: ${(props) => props.background} !important;
  box-shadow: ${(props) => props.boxshadow} !important;
  transition: 0.5s all;
  width: -webkit-fill-available;
  ${
    "" /* @media (max-width: 767.9px) {
    background-color: rgba(0, 0, 0, 0.8)!important;
  } */
  }
`;
const LogoContainer = styled.div`
  ${"" /* img {
    width: 50px;
    height: 38px;
  } */}
  @media (max-width: 576px) {
    z-index: 2;
  }
`;
const StyledNav = styled(Nav)`
  margin: auto;
  @media (max-width: 767.9px) {
    position: fixed;
    padding-top: 60px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(0, 0, 0, 0.9);
    z-index: 1;
    width: 100%;
    padding-top: 80px;
    li {
      padding: 4px;
      padding-left: 20px;
      a {
        font-size: 14px !important;
      }
    }
  }
`;
const StyledNavbar = styled(Navbar)`
  flex: auto;
  @media (min-width: 1201px) {
    flex: none;
    width: 1000px;
    margin: auto;
    padding-left: 0px;
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (min-width: 768px) and (max-width: 1023.9px) {
    padding-left: 50px;
    padding-right: 30px;
  }
  @media (max-width: 767.9px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
const StyledLink = styled.a`
  color: var(--mainGreen);
  line-height: 24px;
  margin-right: 33px;
  padding-bottom: 8px;
  font-weight: 400;
  font-size: 16px;

  :hover {
    color: var(--mainGreen);
    cursor: pointer;
    text-decoration: none;

    border-bottom: 2px solid var(--mainGreen);
  }
  :active {
    color: var(--mainGreen);
    border-bottom: 2px solid var(--mainGreen);
    transition: border-bottom 0.5s ease-in;
  }

  @media (max-width: 735px) {
    font-size: 12px;
    margin-right: 40px;
  }
  @media (max-width: 767.9px) {
    font-size: 13px;
    line-height: 32px;
    padding-left: 0.5em;
    :hover {
      border-bottom: 0px;
    }
    :active {
      border-bottom-color: transparent !important;
      border-bottom-style: none !important;
      border-bottom-width: 0 !important;
    }
  }
`;

const LargeNav = styled.div`
  @media (max-width: 767.9px) {
    display: none;
  }
`;
const StyledFontAwesome = styled(FontAwesomeIcon)`
  color: black;
  font-size: 20px;

  @media (min-width: 767.9px) {
    display: none;
  }
`;
const StyledFontCancel = styled(FontAwesomeIcon)`
  z-index: 2;
  position: absolute;
  top: 0;
  color: black;
  margin-top: 14px;
  ${"" /* margin-left: -2px; */}
  font-size: 20px;
`;
