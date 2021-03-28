import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LanguageSwitcher() {
  return (
    <div>
      <ButtonNavlink to="/jp">JP</ButtonNavlink>
      <span style={{ color: "#333333", fontSize: "12px" }}>|</span>
      <ButtonNavlink to="/">EN</ButtonNavlink>
    </div>
  );
}
const ButtonNavlink = styled(Link)`
background:transparent;
border:none;
color: #333333;
letter-spacing:1px;
font-size:12px;
line-height:20px;
font-weight:bold;
padding-left:1px;
padding-right:1px;
:hover{
  color:var(--mainGreen);
  cursor:pointer;
}
:active{
  border-bottom-width: 2px;
  
}
${"" /* :first-child{
  border-right: 2px solid white;
} */}
`;
