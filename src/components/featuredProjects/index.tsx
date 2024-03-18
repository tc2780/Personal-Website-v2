'use client'
import { GithubOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Card as AntdCard, Button, Carousel, Col, Row, Tag, Tooltip } from "antd";
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
    margin: 150px 8% 0 20%;
    text-align: left;
    // width: 100%;

    // border-radius: 50px;

    // box-shadow: inset 18px 18px 14px -2px #1C0D44,
    //             12px 8px 0 0px black;


    color: #d3d3d3;
    // background-color: #2F1B5B;
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

const CardTemp = styled(AntdCard)`
    // background: darkgray;
    font-family: inherit;

    
    
    border-width: 5px;
    border-color: #2F1B5B;
    border-radius: 50px;

    
    .cardTitle {
        text-align: left;
        font-size: 25px;
        font-weight: bold;
    }
    margin-bottom: 20px;
    // margin: 20px;
    overflow: hidden;


`;


const CardDescription = styled.div`
    font-size: 16px;
    text-align: left;
`;

const StyledTag = styled(Tag)`
    font-size: 16px;
    color: white;
    text-shadow: 0px 0px 3px black;
    background-color: #c1bfdf;
    padding: 5px 10px 5px 10px;
    font-family: inherit;
    border-shadow: 0px 0px 2px black;
    margin-top: 10px
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
        <SyledFeatured >
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
                                title = {"Hrmonic Hustle (ongoing)"}
                                cover={
                                    <Carousel infinite={false}>
                                        <div>
                                        <img alt="Harmonic Hustle" src="/images/HarmonicHustle.png" />
                                        </div>
                                        <div>
                                        <img alt="Harmonic Hustle" src="/images/HarmonicHustleBattle.png" />
                                        </div>
                                    </Carousel>
                                }
                                description = {`
                                    This is an ongoing project for the CPSC 427: Video Game Programming course at UBC. 
                                    Working on a small team of 6, we're creating a rhythm game while learning about 
                                    game development. Players are able to wander in the overworld and collide with
                                    enemies to trigger different rhythm battles and advance levels.
                                `}
                                tags={["C++", "OpenGL", "C"]}
                                />
                        </Col>
                        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                            <Card 
                                title={"Atomic Design Project"}
                                cover={<img alt="Atomic Design Project" src="/images/atomicDesignProject.png" />}
                                description={`
                                    This was created as part of a co-op project, and it focused on
                                    exploring atomic design and components. I built this as 
                                    an example of my learnings as well as a small example for others
                                    new to atomic design. I used Storybook to help organize the different 
                                    components and parts more easily.
                                `}
                                tags={["HTML", "CSS", "React", "TypeScript"]}
                                actions={[
                                    // <div key="setting" >test </div>,
                                    <a href="https://github.com/tc2780/atomic-design-project" target="_blank" key = "link">
                                        <GithubOutlined style={{fontSize: "30px"}}/>
                                    </a>
                                        
                                ]}
                            />
                        </Col>
                    </Row>
                    
                    <Row gutter={[{ xs: 8, sm: 48, md: 48, lg: 48 }, 16]}>
                        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                            <Card 
                                title="Insight UBC"
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
                                    <Tooltip title="Video Demo" key = "link">
                                        <a href="https://youtu.be/dd42775Kg0E" target="_blank">
                                            <YoutubeOutlined style={{fontSize: "30px"}}/>
                                        </a>
                                    </Tooltip>
                                        
                                ]}
                            />
                            
                        </Col>
                        <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                            <Card 
                                title="SOUUP: A Mental Health Check-In Site"
                                cover={<img alt="SOUUP" src="/images/SOUUPSite.png" />}
                                description={`
                                    Souup was the result of a hackathon project created for cmd-f 2022 and 
                                    implemented by a small team of 4 under a time constraint of 24 hrs.
                                    The idea behind this site was to provide a quick and simple way for users 
                                    to let close ones know that they were ok and safe in the event that they 
                                    find it difficult to reach out. This way, instead of initiating a 
                                    conversation, the user simply has to open the site, log in, and press 
                                    a button to send a pre-typed message. Selected for the UBC Project Incubation program.
                                `}
                                tags={["HTML", "CSS", "JavaScript", "Rest API"]}
                                actions={[
                                    <a href="https://github.com/getbreadd/sooup" target="_blank" key = "link">
                                        <GithubOutlined style={{fontSize: "30px"}}/>
                                    </a>
                                        
                                ]}
                            />
                        </Col>
                    </Row>
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