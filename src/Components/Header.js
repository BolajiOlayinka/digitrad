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
  const [fixed, setFixed] = useState("initial");
  const [showIcon, setShowIcon] = useState(true);
  const [showItem, setShowItem] = useState(false);
  // const [SmallBackground, setSmallBackground]=useState("black")

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setBackground("rgba(0, 0, 0, 0.8)");
    } else {
      setBackground("white");
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
    <NavWrapper background={background} fixed={fixed}>
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
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid white",
                }}
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
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid white",
                }}
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
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid white",
                }}
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
              <StyledLink to="/">ニュース</StyledLink>
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
                to="/"
              >
                お問い合わせ
              </StyledLink>
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
                to="/"
              >
                ABOUT
              </StyledLink>
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
  transition: 0.4s all;
  width: -webkit-fill-available;
  @media (max-width: 767.9px) {
    background-color: rgba(0, 0, 0, 0.8)!important;
  }
`;
const LogoContainer = styled.div`
  img {
    width: 50px;
    height: 38px;
  }
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
const StyledLink = styled(Link)`
  color: var(--mainGreen);
  line-height: 24px;
  margin-right: 33px;
  padding-bottom: 8px;
  font-weight: 300;
  font-size: 16px;

  :hover {
    color: var(--mainWhite);
    cursor: pointer;
    text-decoration: none;

    border-bottom: 7px solid var(--mainWhite);
  }
  :active {
    color: var(--mainGreen);
    border-bottom: 7px solid var(--mainiGreen);
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
  color: white;
  font-size: 20px;

  @media (min-width: 767.9px) {
    display: none;
  }
`;
const StyledFontCancel = styled(FontAwesomeIcon)`
  z-index: 2;
  position: absolute;
  top: 0;
  color: white;
  margin-top: 14px;
  ${"" /* margin-left: -2px; */}
  font-size: 20px;
`;
