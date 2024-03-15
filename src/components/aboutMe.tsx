'use client'
import React from "react";
import styled from 'styled-components';


const StyledAbout = styled.div`
`;

const StyledIntro = styled.div`
    font-size: 40px;
    text-align: center;
`;
const SmallIntro = styled.div`
    font-size: 20px;
    padding-left: 20%;
    padding-right: 20%;
`;
const EndIntro = styled.div`
    font-size: 20px;
    padding-right: 20%;
    text-align: right;
`;


const AboutMe: React.FC<{}> = () => {
    return (
        <StyledAbout >
            <StyledIntro>About me</StyledIntro>
            <SmallIntro>
                <p>My name is Tracy and I'm a 4th year Computer Science student at the University of British Columbia.
                </p>
            </SmallIntro>
            <EndIntro>About me</EndIntro>
        </StyledAbout>
    )
}

export default AboutMe;