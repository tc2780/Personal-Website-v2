'use client'
import React from "react";
import styled from 'styled-components';

const StyledBox = styled.div`

    height: 100vh;
    // background-color: white;
    position: relative;
    padding-left: 15%;

`

const StyledTitle = styled.div`
    // height: 25vh;
    padding-top: 25vh;
    font-size: 100px;
    text-shadow: 4px 4px 4px black;
    // text-align: center;
    // padding-left: 15%;
    width: 100%;

`

const StyledIntro = styled.div`
    width: 100%;
    // text-align: center;
    font-size: 30px;
    text-shadow: 4px 4px 4px black;
`;

const StyledDesc = styled.div`

`;

const WelcomeBox: React.FC<{}> = () => {
    return (
        <StyledBox >
            <StyledTitle> hello </StyledTitle>
            <StyledIntro> I'm Tracy </StyledIntro>
            <StyledIntro> and I'm an aspiring software developer </StyledIntro>
            <StyledDesc></StyledDesc>
        </StyledBox>
    )
}

export default WelcomeBox;