'use client'
import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from 'styled-components';


const StyledCreativeWorks = styled.div`
    align-items: left;
    flex-direction: column;
    width: inherit;
    margin: 0 26% 0 6%;
    padding: 4% 4% 4% 4%;
    margin-top: 50px;

    // background-color: #2F1B5B;
    // border-radius: 50px;

    // box-shadow: 60px -16px #1C0D44;
    // box-shadow: 0px 0px 10px 20px white;
    // box-shadow: inset 18px 18px 14px -2px #1C0D44,
    //             12px 8px 0 0px black;

    color: #d3d3d3;

    position: relative;
`;

const CreativeTitle = styled.div`
    font-size: 40px;
    color: ghostwhite;
    // font-family: inherit;
    width: fit-content;
    padding-left: 10px;
    padding-right: 10px;

    background-color: #673da6;
    box-shadow: 0px 0px 0px 20px #673da6,
                10px 10px 0px 20px #542a93;
    border-radius: 3px;
    transform: translate(-50px, 30px);
`;

const CreativeContent = styled.div`
    width: fit-content;
    padding-top: 20px;

    background-color: #3e207f;
    box-shadow: 0px 0px 0px 30px #3e207f,
                20px 20px 0px 30px #270965;
    border-radius: 3px;

    height: 100px;
`;


const CreativeWorks: React.FC<{}> = () => {
    return (
        <StyledCreativeWorks >
            <Fade fraction={0.1}cascade damping={0.05} style={{zIndex:"9999", position: "relative"}}>
                <CreativeTitle>creative works</CreativeTitle>
            </Fade>
            <br />
            <br />
            <CreativeContent>TESTING</CreativeContent>
        </StyledCreativeWorks>
    )
}

export default CreativeWorks;