'use client'
import { GithubOutlined, InfoCircleOutlined, LinkOutlined, TrophyOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Carousel, Col, Row, Tooltip } from "antd";
import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from 'styled-components';
import Card from "./card";


const SyledFeatured = styled.div`
    display: inline-flex;
    align-items: right;
    flex-direction: column;
    // min-width: 600px;
    // padding: 0 10% 0 30%;
    margin: 100px 8% 0 20%;
    text-align: left;
    // width: 100%;

    // border-radius: 50px;

    // box-shadow: inset 18px 18px 14px -2px #1C0D44,
    //             12px 8px 0 0px black;


    // color: #d3d3d3;
    color: #afb2c4;
    // background-color: #2F1B5B;

    // transform: translate(0, 100px);
`;

const FeaturedTitle = styled.div`
    font-size: 40px;
    // padding: 50px 10% 0 30%;
    color: ghostwhite;

    width: fit-content;
    // padding-left: 10px;
    // padding-right: 10px;
    

    background-color: #673da6;
    box-shadow: 0px 0px 0px 20px #673da6,
                10px 10px 0px 20px #542a93;
    border-radius: 3px;
    transform: translate(-30px, 0px);
    
`;

const FeaturedDescription = styled.div`
    padding: 30px 0px 30px 30px;
    // padding: 20px 10% 20px 30%;

    font-size: 25px;
    font-style: italic;
    color: ghostwhite;
`;

const Cards = styled.div`
    // align-self: flex-end;
    // display: inline-flex;
    padding-left: 4%;
    padding-right: 4%;
`;

const FeaturedContent = styled.div`
    width: fit-content;
    padding-top: 20px;

    border-radius: 15px;

    background-color: #3e207f;
    box-shadow: 20px 20px 0px 0px #270965;
    
`;

const FeaturedProjects: React.FC<{}> = () => {
    return (
        <SyledFeatured id="featuredSection">
            <Fade fraction={0.1}cascade damping={0.05} style={{alignSelf:"flex-start"}}>
                <FeaturedTitle>featured projects</FeaturedTitle>
                
            </Fade>
            <FeaturedContent>
                <Fade fraction={0.1}cascade damping={0.05}>
                    <FeaturedDescription>these are a few of my highlighted projects</FeaturedDescription>
                </Fade>
                <Cards>
                    <Row gutter={[{ xs: 8, sm: 48, md: 48, lg: 48 }, 16]}>
                        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                            <Card 
                                title = {"Analyzing Steam Games"}
                                dates={"Jan - April 2025"}
                                cover={
                                    <img alt="Analyzing Steam Games" src="/images/analyzingSteamGames.png" />
                                }
                                description = {`
                                    A project created for the CPSC 447: Intro to Visualization course at UBC.
                                    We worked as a team of 4 to design and implement a dashboard to allow users to explore
                                    and analyze the top owned games in Steam. Implemented views explore game difficulties, playtimes, release year, game genres,
                                    and available languages. All charts are implemented using D3, and are interactive. Selected as one of the best projects of Spring 2025!
                                `}
                                tags={["D3", "JavaScript", "HTML", "CSS", "Bootstrap"]}
                                actions={[
                                    <Tooltip title="GitHub Repo" key="tooltip">
                                        <a href="https://github.com/tc2780/Analyzing-Steam-Games" target="_blank" key = "link">
                                            <GithubOutlined style={{fontSize: "30px"}}/>
                                        </a>
                                    </Tooltip>,
                                    <Tooltip title="Featured on 447 Hall of Fame" key="tooltip">
                                        <a href="https://www.students.cs.ubc.ca/~cs-447/25Jan/fame/" target="_blank" key = "link">
                                            <TrophyOutlined style={{fontSize: "30px"}}/>
                                        </a>
                                    </Tooltip>,
                                    <Tooltip title="Hosted on Vercel" key="tooltip">
                                        <a href="https://analyzing-steam-games.vercel.app/" target="_blank" key = "link">
                                            <LinkOutlined style={{fontSize: "30px"}}/>
                                        </a>
                                    </Tooltip>
                            
                                ]}
                                />
                        </Col>
                        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                            <Card 
                                title = {"Harmonic Hustle"}
                                dates={"Jan - April 2024"}
                                cover={
                                    <Carousel infinite={false}>
                                        {/* <div> */}
                                        <img alt="Harmonic Hustle" src="/images/HarmonicHustle-updated.png" />
                                        {/* </div>
                                        <div> 
                                        <img alt="Harmonic Hustle" src="/images/HarmonicHustleBattle.png" />
                                        </div> */}
                                    </Carousel>
                                }
                                description = {`
                                    Designed and developed in a small team of 5 for the CPSC 427: Video Game
                                    Programming course at UBC. We created a rhythm game that involved overworld 
                                    mechanics, allowing enemies to explore the map and trigger challenge battles.
                                    We also included different 'modes' for the battle, allowing for a more engaging
                                    rhythm game mechanic. All art and music were created by members of the team.
                                `}
                                tags={["C++", "OpenGL", "C"]}
                                actions={[
                                    <Tooltip title="Featured on CPSC 427 Page" key="tooltip">
                                        <a href="https://www.students.cs.ubc.ca/~cs-427/games" target="_blank" key = "link">
                                            <LinkOutlined style={{fontSize: "30px"}}/>
                                        </a></Tooltip>,
                                    <Tooltip title="Gameplay Trailer" key="tooltip"><a href="https://www.youtube.com/watch?v=lfx6yT8nD4E" target="_blank" key = "link">
                                       <YoutubeOutlined style={{fontSize: "30px"}}/>
                                    </a></Tooltip>
                            
                                ]}
                                />
                        </Col>
                    </Row>
                    <Row gutter={[{ xs: 8, sm: 48, md: 48, lg: 48 }, 16]}>
                        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                            <Card 
                                title={"Atomic Design Project"}
                                dates={"Dec 2023"}
                                cover={<img alt="Atomic Design Project" src="/images/atomicDesignProject.png" />}
                                description={`
                                    This was created as part of a co-op project, and it focused on
                                    exploring atomic design and components. I built this as 
                                    an example of my learnings as well as a small example for others
                                    new to atomic design. I used Storybook to help organize the different 
                                    components and parts more easily.
                                `}
                                tags={["HTML", "CSS", "React", "TypeScript", "AntD", "Storybook", "Chromatic"]}
                                actions={[
                                    <Tooltip title="GitHub Repo" key="tooltip">
                                    <a href="https://github.com/tc2780/atomic-design-project" target="_blank" key = "link">
                                        <GithubOutlined style={{fontSize: "30px"}}/>
                                    </a></Tooltip>,
                                    <Tooltip title="Storybook build" key="tooltip">
                                        <a href="https://66a0b018a87fee9c0eeb6910-zunbxxeink.chromatic.com/" target="_blank" key="link">
                                            <LinkOutlined style={{fontSize: "30px"}}/>
                                        </a>
                                    </Tooltip>
                                        
                                ]}
                            />
                        </Col>
                    
                        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                            <Card 
                                title="Insight UBC"
                                dates={"Sep - Dec 2022"}
                                cover={<img alt="Insight UBC" src="/images/InsightUBCSite.png" />}
                                description={`
                                    A school project created for CPSC 310: Software Engineering.
                                    I worked with a partner to create a full-stack course and room querying application.
                                    The purpose of it was to query and display statistics for a course, and general info for room.
                                    Our frontend would take users input, and utilize our REST API to interact with the backend and saved data,
                                    performing queries as needed before sending a response back to the user.
                                `}
                                tags={["TypeScript", "HTML", "CSS", "JavaScript", "Node.js", "Mocha", "Chai"]}
                                actions={[
                                    <Tooltip title="Demo Video" key = "link">
                                        <a href="https://youtu.be/dd42775Kg0E" target="_blank">
                                            <YoutubeOutlined style={{fontSize: "30px"}}/>
                                        </a>
                                    </Tooltip>
                                        
                                ]}
                            />
                            
                        </Col>
                    </Row>
                        {/* <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                            <Card 
                                title="SOUUP: A Mental Health Check-In Site"
                                dates={"March 2022"}
                                cover={<img alt="SOUUP" src="/images/SOUUPSite.png" />}
                                description={`
                                    Souup was the result of a hackathon project created for cmd-f 2022 and 
                                    implemented by a small team of 4 under a time constraint of 24 hrs.
                                    The idea behind this site was to provide a quick and simple way for users 
                                    to let close ones know that they were ok and safe in the event that they 
                                    find it difficult to reach out. This way, instead of initiating a 
                                    conversation, the user simply has to open the site, log in, and press 
                                    a button to send a pre-typed message. Winner of the Project Incubation Prize.
                                `}
                                tags={["HTML", "CSS", "JavaScript", "Rest API"]}
                                actions={[
                                    <a href="https://github.com/ariamj/Mental-Health-Check-In" target="_blank" key = "link">
                                        <GithubOutlined style={{fontSize: "30px"}}/>
                                    </a>,
                                    <Tooltip title="Devpost Submission" key = "link">
                                        <a href="https://devpost.com/software/sooup" target="_blank" key = "devpost">
                                            <LinkOutlined style={{fontSize: "30px"}}/>
                                        </a>
                                    </Tooltip>
                                        
                                ]}
                            />
                        </Col> */}
                    {/* <Row gutter={[{ xs: 8, sm: 48, md: 48, lg: 48 }, 16]}>
                        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                            <Fade fraction={0.1}cascade damping={0.05}>
                                <Card
                                    hoverable
                                    cover={<img alt="Gallery Manager" src="/images/GallerySite.png" />}
                                    actions={[
                                        <div key="setting" >test </div>,
                                    ]}
                                >
                                <div className="cardTitle">Gallery Manager</div>
                                <CardDescription>
                                    {`
                                        A school project created for CPSC 304: Relational Databases.
                                        Created in a small group of 3, we designed and implemented a database
                                        using SQL and Oracle, designing ER diagrams and schemas. In brief, our 
                                        database was created to allow art and gallery owners to keep track of their art
                                        piece locations, available galleries, and gallery visitors.
                                        We also designed a frontend to allow users to easily interact with the database.
                                    `}
                                    <br />
                                    <StyledTag bordered={false}>HTML</StyledTag>
                                    <StyledTag bordered={false}>CSS</StyledTag>
                                    <StyledTag bordered={false}>PHP</StyledTag>
                                    <StyledTag bordered={false}>SQL</StyledTag>
                                    <StyledTag bordered={false}>Oracle</StyledTag>
                                    <StyledTag bordered={false}>JavaScript</StyledTag>
                                </CardDescription>
                                </Card>
                                
                            </Fade>
                        </Col>
                    </Row> */}


                </Cards>
            </FeaturedContent>
        </SyledFeatured>
    )
}

export default FeaturedProjects;