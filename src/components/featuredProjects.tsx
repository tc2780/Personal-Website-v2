'use client'
import { Card as AntdCard, Col, Row, Tag } from "antd";
import React from "react";
import styled from 'styled-components';


const SyledFeatured = styled.div`
    display: inline-flex;
    align-items: right;
    flex-direction: column;
    // min-width: 600px;
    // padding: 0 10% 0 30%;
    margin-top: 100px;
    margin: 100px 6% 0 20%;
    text-align: right;
    // width: 100%;

    border-radius: 50px;

    box-shadow: inset 18px 18px 14px -2px #1C0D44,
                12px 8px 0 0px black;


    color: #d3d3d3;
    background-color: #2F1B5B;
`;

const FeaturedTitle = styled.div`
    font-size: 40px;
    padding: 50px 10% 0 30%;
    color: ghostwhite;
    
`;

const FeaturedDescription = styled.div`
    font-size: 20px;
    padding: 20px 10% 20px 30%;
`;

const Card = styled(AntdCard)`
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

const FeaturedProjects: React.FC<{}> = () => {
    return (
        <SyledFeatured >
            <FeaturedTitle>featured projects</FeaturedTitle>
            <FeaturedDescription>These are a few of my highlighted projects</FeaturedDescription>
            <Cards>
                <Row gutter={[{ xs: 8, sm: 48, md: 48, lg: 48 }, 16]}>
                    <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Card
                            hoverable
                            cover={<img alt="Insight UBC" src="/images/InsightUBCSite.png" />}
                            actions={[
                                <div key="setting" >test </div>,
                            ]}
                        >
                        <div className="cardTitle">Insight UBC</div>
                        <CardDescription>
                            {`
                                A school project created for CPSC 310: Software Engineering.
                                I worked with a partner to create a full-stack course and room querying application.
                                The purpose of it was to query and display statistics for a course, and general info for room.
                                Our frontend would take users input, and utilize our REST API to interact with the backend and saved data,
                                performing queries as needed before sending a response back to the user.
                            `}
                            <br /> 
                            <StyledTag bordered={false}>TypeScript</StyledTag>
                            <StyledTag bordered={false}>HTML</StyledTag>
                            <StyledTag bordered={false}>CSS</StyledTag>
                            <StyledTag bordered={false}>JavaScript</StyledTag>
                            <StyledTag bordered={false}>Node.js</StyledTag>
                            <StyledTag bordered={false}>Mocha</StyledTag>
                            <StyledTag bordered={false}>Chai</StyledTag>
                        </CardDescription>
                        </Card>
                    </Col>
                    <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Card
                            hoverable
                            cover={<img alt="Harmonic Hustle" src="/images/InsightUBCSite.png" />}
                            
                        >
                        <div className="cardTitle">Harmonic Hustle (ongoing)</div>
                        <CardDescription>
                            {`
                                lsjfljsdf
                                `}
                            <br /> 
                            <StyledTag bordered={false}>TypeScript</StyledTag>
                            <StyledTag bordered={false}>HTML</StyledTag>
                            <StyledTag bordered={false}>CSS</StyledTag>
                            <StyledTag bordered={false}>JavaScript</StyledTag>
                            <StyledTag bordered={false}>Node.js</StyledTag>
                            <StyledTag bordered={false}>Mocha</StyledTag>
                            <StyledTag bordered={false}>Chai</StyledTag>
                        </CardDescription>
                        </Card>
                    </Col>
                </Row>
                
                <Row gutter={24}>
                    <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
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
                    </Col>
                    <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card
                            hoverable
                            cover={<img alt="SOUUP" src="/images/SOUUPSite.png" />}
                            
                        >
                        <div className="cardTitle">SOUUP: A Mental Health Check-In Site</div>
                        <CardDescription>
                            {`
                                Souup was the result of a hackathon project created for cmd-f 2022 and 
                                implemented by a small team of 4 under a time constraint of 24 hrs.
                                The idea behind this site was to provide a quick and simple way for users 
                                to let close ones know that they were ok and safe in the event that they 
                                find it difficult to reach out. This way, instead of initiating a 
                                conversation, the user simply has to open the site, log in, and press 
                                a button to send a pre-typed message. Selected for the UBC Project Incubation program.
                                
                            `}
                            <br /> 
                            <StyledTag bordered={false}>HTML</StyledTag>
                            <StyledTag bordered={false}>CSS</StyledTag>
                            <StyledTag bordered={false}>JavaScript</StyledTag>
                            <StyledTag bordered={false}>Rest API</StyledTag>
                        </CardDescription>
                        </Card>
                    </Col>
                </Row>


            </Cards>
        </SyledFeatured>
    )
}

export default FeaturedProjects;