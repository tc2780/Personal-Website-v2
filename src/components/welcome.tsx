'use client'
import React from "react";
import styled from 'styled-components';

const StyledBox = styled.div`

    height: 100vh;
    // background-color: white;
    position: relative;

`

const StyledTitle = styled.div`
    // height: 25vh;
    padding-top: 25vh;
    font-size: 100px;
    text-shadow: 4px 4px 4px black;
    text-align: center;
    width: 100%;

`

const StyledIntro = styled.div`
    width: 100%;
    text-align: center;
    font-size: 30px;
`;

const WelcomeBox: React.FC<{}> = () => {
    return (
        <StyledBox >
            <StyledTitle> hello </StyledTitle>
            <StyledIntro> and welcome to my personal site!</StyledIntro>
        </StyledBox>
    )
}

export default WelcomeBox;