import React from 'react';
import styled from 'styled-components';
import DT from '../assets/DT.png'

export default function CrossBorder() {
    return (
        <React.Fragment>
            <DTSection>
            <img src={DT} alt="Icon"/>
            </DTSection>
        </React.Fragment>
    )
}

const DTSection = styled.div `
background-color:var(--mainBlue);
width:100%;
`
