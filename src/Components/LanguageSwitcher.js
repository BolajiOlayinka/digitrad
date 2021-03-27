import React from 'react';
import styled from 'styled-components';
// import {LOCALES} from '../Providers/i18n/index';
// import {AppContext} from '../Providers/context/index';
// import { createBrowserHistory } from 'history';



export default function LanguageSwitcher() {
    // const {dispatch}=useContext(AppContext)
    // const setLanguage=siteLang=>dispatch({type:'setLang',siteLang })
    
    return (
        <div>
            {/* {Object.keys(LOCALES).map(locale=>{
        return <ButtonNavlink key={locale} onClick={()=>setLanguage(LOCALES[locale])}>{locale}</ButtonNavlink>
      
       })} */}
       {/* <ButtonNavlink onClick={()=>{setLanguage(LOCALES.JP)}}>JP</ButtonNavlink>
       <span style={{color:"white",fontSize:"12px"}}>|</span>
       <ButtonNavlink onClick={()=>{setLanguage(LOCALES.EN)}}>EN</ButtonNavlink>  */}
       <ButtonNavlink>JP</ButtonNavlink>
       <span style={{color:"#333333",fontSize:"12px"}}>|</span>
       <ButtonNavlink>EN</ButtonNavlink> 
     
       
        </div>
    )
}
const ButtonNavlink =styled.button `
background:transparent;
border:none;
color: #333333
letter-spacing:1px;
font-size:12px;
line-height:20px;
font-weight:bold;
:hover{
  color:#F8951D;
  cursor:pointer;
}
:active{
  border-bottom-width: 2px;
  
}
${'' /* :first-child{
  border-right: 2px solid white;
} */}
`
