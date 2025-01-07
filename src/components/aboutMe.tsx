'use client'
import { Col, Row, Tag } from "antd";
import React from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import styled from 'styled-components';
import { keyframes } from "@emotion/react";


const StyledAbout = styled.div`
    // text-align: center;
    // // max-width: 75%;
    // // display: inline-flex;
    // align-items: left;
    // flex-direction: column;
    // // padding: 0 10% 0% 10%;


    align-items: left;
    flex-direction: column;
    // min-width: 600px;
    width: inherit;
    // padding: 0 30% 0 10%;
    margin: 0 26% 0 6%;
    padding: 0% 4% 4% 4%;
    // margin-top: 50px;



    // background-color: #2F1B5B;
    // border-radius: 50px;

    // // box-shadow: 60px -16px #1C0D44;
    // // box-shadow: 0px 0px 10px 20px white;
    // box-shadow: inset 18px 18px 14px -2px #1C0D44,
    //             12px 8px 0 0px black;

    // // box-shadow: 14px 10px 0 0px black,
    // //             20px 12px 0 0px #1C0D44,
    // //             20px 16px 0 0px #1C0D44,
    // //             16px 16px 0 0px #1C0D44;

    // // text-shadow: 2px 2px 1px black;

    // color: #d3d3d3;
    color: #afb2c4;

    position: relative;

    
`;

const AboutTitle = styled.div`

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
    transform: translate(-50px, 0px);
    // transform: translate(-50px, 30px);
    // transform: translate(-20px, 50px);
    
    
`;
const Paragraph = styled.div`
    font-size: 19px;
    // min-width: 600px;
    // padding: 0 10% 0 10%;

`;

const SubTitle = styled.div`
    font-size: 25px;
    font-style: italic;
    margin-bottom: 10px;
    color: ghostwhite;
`;

const Skills = styled.div`
    // min-width: 600px;
    // padding: 0 10% 0 10%;
    text-align: left;
`;

const StyledTag = styled(Tag)`
    font-size: 19px;
    color: white;
    background-color: #904e94;
    padding: 5px 10px 5px 10px;
    margin-bottom: 10px;
    font-family: inherit;
`;

const AboutContent = styled.div`
    width: fit-content;
    padding: 20px 15px 15px 15px;

    background-color: #3e207f;
    box-shadow: 0px 0px 0px 30px #3e207f,
                20px 20px 0px 30px #270965;
    border-radius: 3px;

    transform: translate(0, -30px);
`;

const AboutMe: React.FC<{}> = () => {
    const skillsArray = ['React', 'TypeScript', 'Python', 'Java', 'JavaScript',
                        'ThreeJS', 'OpenGL', 'C++', 'C', 'HTML', 'CSS', 'SQL', 'PHP'
    ]
    return (
        <StyledAbout id="aboutSection">
            <Fade fraction={0.1}cascade damping={0.05} style={{zIndex:"9999", position: "relative"}}>
                <AboutTitle>about me</AboutTitle>
            </Fade>
            <br />
            <br />
            <AboutContent>
                <Fade fraction={0.1}cascade damping={0.05}>
                    <br />
                    <SubTitle>a small intro</SubTitle>
                    {/* <br /> */}
                    <Paragraph>
                        {`
                           I’m currently a 4th-year Computer Science student at the University of British Columbia.
                            I enjoy problem solving and creating, and am actively developing my skills in software development and art.
                             This page will feature my technical and creative projects, and highlight the ways in which I’ve brought these interests together.
                        `}
                    </Paragraph>
                    <br /> <br />
                    <SubTitle>a bit of my background</SubTitle>
                    <Paragraph>
                    {/* {` */}
                        As part of UBC’c coop program, I’ve had the opportunity to gain valuable hand-on 
                        experience in two placements. One as a <span style={{  color: 'white' }}>Junior QA Engineer</span> at Trulioo, where I
                        focused on implementing automated end-to-end tests for the full-stack application.
                        The second as a <span style={{  color: 'white' }}>Software Engineer</span> at Routific, where my focus shifted to developing
                        new features and building reusable web components for a full-stack application.
                    {/* `} */}
                    </Paragraph>
                    <br /> <br />
                    <SubTitle>skills</SubTitle>
                    <Skills>
                        {
                            skillsArray.map(skillName => (
                                <StyledTag key={skillName} bordered={false}>{skillName}</StyledTag>
                            ))
                        }
                    </Skills>
                </Fade>
            </AboutContent>
            {/* </Fade> */}
        </StyledAbout>
    )
}

export default AboutMe;