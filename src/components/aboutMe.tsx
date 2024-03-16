'use client'
import { Tag } from "antd";
import React from "react";
import styled from 'styled-components';


const StyledAbout = styled.div`
    // text-align: center;
    // // max-width: 75%;
    // // display: inline-flex;
    // align-items: left;
    // flex-direction: column;
    // // padding: 0 10% 0% 10%;


    align-items: left;
    flex-direction: column;
    min-width: 600px;
    padding: 0 30% 0 10%;
    margin-top: 50px;

    
`;

const AboutTitle = styled.div`
    font-size: 40px;
    // border-bottom-width: thick;
    // border-bottom-color: darkgrey;
    // border-bottom-style: ridge;
    // border-bottom-left-radius: 5%;
    // border-bottom-right-radius: 5%;
`;
const Paragraph = styled.div`
    font-size: 20px;
    min-width: 600px;
    // padding: 0 10% 0 10%;

`;

const SubTitle = styled.div`
    font-size: 25px;
    font-style: italic;
    margin-bottom: 10px;
`;

const Skills = styled.div`
    min-width: 600px;
    // padding: 0 10% 0 10%;
    text-align: left;
`;

const StyledTag = styled(Tag)`
    font-size: 20px;
    color: white;
    background-color: #421d64;
    padding: 5px 10px 5px 10px;
    margin-bottom: 10px;
    font-family: inherit;
`;


const AboutMe: React.FC<{}> = () => {
    return (
        <StyledAbout >
            <AboutTitle>about me</AboutTitle>
            <Paragraph>
                {`
                    My name is Tracy and I'm a 4th year Computer Science student at the University of British Columbia.
                    I enjoy solving and creating, and while exploring my career paths during the beginning of
                    univeristy, I found that developing was a way for me to pursue both of those interests!
                    With that, this page will hold a bit of info on both my technical and creative projects, as well as
                    a short summary of my skills and how to contact me.
                `}
            </Paragraph>
            <br /> <br />
            <SubTitle>a bit of my background</SubTitle>
            <Paragraph>
            {`
                I've previously worked as a Junior Quality Assurance Engineer and a Software Engineer Co-op, 
                and I expect to graduate May 2026. 
            `}
            </Paragraph>
            <br /> <br />
            <SubTitle>skills</SubTitle>
            <Skills>
                <StyledTag bordered={false}>React</StyledTag>
                <StyledTag bordered={false}>TypeScript</StyledTag>
                <StyledTag bordered={false}>Java</StyledTag>
                <StyledTag bordered={false}>JavaScript</StyledTag>
                <StyledTag bordered={false}>C++</StyledTag>
                <StyledTag bordered={false}>HTML</StyledTag>
                <StyledTag bordered={false}>CSS</StyledTag>
                <StyledTag bordered={false}>SQL</StyledTag>
            </Skills>
        </StyledAbout>
    )
}

export default AboutMe;