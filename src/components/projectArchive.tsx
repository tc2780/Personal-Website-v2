'use client'
import { GithubFilled, LinkOutlined, YoutubeFilled, YoutubeOutlined } from "@ant-design/icons";
import { ConfigProvider, Image, List } from "antd";
import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from 'styled-components';


const StyledArchive = styled.div`

    align-items: right;
    flex-direction: column;
    width: inherit;
    margin: 125px 8% 0 26%;
    // padding: 4% 4% 4% 4%;
    // margin-top: 50px;
    // text-align: right;

    // background-color: #2F1B5B;
    // border-radius: 50px;

    // box-shadow: inset 18px 18px 14px -2px #1C0D44,
    //             12px 8px 0 0px black;



    color: #d3d3d3;

    .itemContent {
        color: #d3d3d3;
        font-size: 16px;
    }

`;

const ArchiveTitle = styled.div`
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

const ArchiveContent = styled.div`
    width: inherit;
    padding-top: 20px;

    border-radius: 15px;

    background-color: #3e207f;
    box-shadow: 20px 20px 0px 0px #270965;
    text-align: left;
    padding: 4% 4% 4% 4%;
`;

const SubTitle = styled.div`
    font-size: 25px;
    font-style: italic;
    margin-bottom: 10px;
    color: ghostwhite;
`;

const SectionTitle = styled.div`
    font-size: 22px;
    font-style: italic;
    margin-bottom: 10px;
    // color: ghostwhite;
`;

const Paragraph = styled.div`
    font-size: 20px;
    // min-width: 600px;
    // padding: 0 10% 0 10%;

`;

const ArchivedDescription = styled.div`
    padding: 20px 30px 30px 30px;

    font-size: 25px;
    font-style: italic;
    color: ghostwhite;
    // font-size: 20px;
    // // min-width: 600px;
    // // padding: 0 10% 0 10%;
`


const ProjectArchive: React.FC<{}> = () => {
      const data = [
        {
            title: `Personal Website V2 (this site!)`,
            imgSrc: './images/websiteV2.png',
            description: 'March 2024 - Current',
            content: 'The second iteration of my personal site. Created with React, TypeScript and hosted on Netlify.',
            actions: [<a href="https://github.com/tc2780/Personal-Website-v2" target="_blank" key="test">
                        <GithubFilled style={{fontSize: "20px"}}/>
                    </a>]
        },
        {
            title: `Harmonic Hustle`,
            imgSrc: './images/HarmonicHustle.png',
            description: 'Jan 2024 - Current',
            content: 'A rhythm game created for CPSC 427: Video Game Programming',
        },
        {
            title: `Atomic Design Project`,
            imgSrc: "./images/atomicDesignProject.png",
            description: 'Dec 2023',
            content: "A project created to explore components and the atomic design theory. Used Storybook to more easily visualize the components and the atomic design breakdown.",
            actions: [<a href="https://github.com/tc2780/atomic-design-project" target="_blank" key="test">
                        <GithubFilled style={{fontSize: "20px"}}/>
                    </a>]
        },
        {
            title: `Personal Website V1`,
            description: 'Feb - Mar 2023',
            imgSrc: "./images/websiteV1.png",
            content: "The very first iteration of my personal website, created with HTML, CSS and Bootstrap. Hosted on GitHub pages",
            actions: [<a href="https://github.com/tc2780/PersonalSite" target="_blank" key="test">
                        <GithubFilled style={{fontSize: "20px"}}/>
                    </a>,
                    <a href="https://tc2780.github.io" target="_blank" key="test2">
                        <LinkOutlined style={{fontSize: "20px"}}/>
                    </a>,
                    ]
        },
        {
            title: `Insight UBC`,
            description: 'Sep - Dec 2022',
            content: "A full stack application created for CPSC 310: Intro To Software Programming. " +
                    "Lets users query a backend database and access course and room building statistics",
            imgSrc: "./images/InsightUBCSite.png",
            actions: [
                <a href="https://youtu.be/dd42775Kg0E" target="_blank" key="test">
                    <YoutubeFilled style={{fontSize: "20px"}}/>
                </a>
            ]
        }, 
        {
            title: `Art Gallery Manager`,
            description: 'Sep - Dec 2022',
            content: "A full stack application created for CPSC 304: Intro to Databases. " +
                    "Used to explore SQL, allowing users to insert, query and remove data as needed. " +
                    "The frontend was built HTML, CSS, JS and PHP and is still available. " +
                    "Fair warning: it can no longer access the db as my credentials have expired, so it's very likely clicking the buttons *may* break the app.",
            imgSrc: "./images/GallerySite.png",
            actions: [
                <a href="https://github.com/tc2780/GalleryManager" target="_blank" key="test">
                    <GithubFilled style={{fontSize: "20px"}}/>
                </a>,
                <a href="https://www.students.cs.ubc.ca/~tc2780/304GalleryManager/index.php" target="_blank" key="test2">
                    <LinkOutlined style={{fontSize: "20px"}}/>
                </a>
            ]
        },
        {
            title: `SOUUP: A Mental Health Check-In Site`,
            description: 'March 2022',
            content: "Cmd-f 2022 Hackathon Project. Users are able to send simple messages to loved ones by clicking a button. Winner of the Project Incubation Prize",
            imgSrc: "./images/SOUUPSite.png",
            actions: [
                <a href="https://github.com/ariamj/Mental-Health-Check-In" target="_blank" key="test">
                    <GithubFilled style={{fontSize: "20px"}}/>
                </a>,
                <a href="https://devpost.com/software/sooup" target="_blank" key="test2">
                    <LinkOutlined style={{fontSize: "20px"}}/>
                </a>
            ]
        },
        {
            title: `Marble Timeline Site`,
            description: 'July - Sept 2021',
            content: "The very first website I created. Done with HTML and CSS. This was my first venture into web development, and I had decided to document the process "
                    + " of creating my first animation. It's (very) simple, but I think it's cool to look back and see how far I've come!",
            imgSrc: "./images/MarbleSite.png",
            actions: [
                <a href="https://github.com/tc2780/MarbleSite" target="_blank" key="test">
                    <GithubFilled style={{fontSize: "20px"}}/>
                </a>
            ]
        },
        {
            title: `Adventure Game`,
            description: 'Jan - April 2021',
            content: "Created for CPSC 210: Object Orientated Programming. A text adventure game that relies on user choices and implements an item/inventory system. "
                    + " The focus was mostly on the technical implementation, but I also had fun creating the storyline and the images.",
            imgSrc: "./images/AdventureGame.png",
            actions: [
                <a href="https://github.com/tc2780/AdventureGame" target="_blank" key="test">
                    <GithubFilled style={{fontSize: "20px"}}/>
                </a>,
                <a href="https://youtu.be/WKJdoBwSqiQ" target="_blank" key="test2">
                    <YoutubeFilled style={{fontSize: "20px"}}/>
                </a>
            ]
        },
        {
            title: `Blackjack Console Game`,
            description: 'Feb - April 2020',
            content: "Created for AP Computer Science. A simple console version of Blackjack and my first project.",
            imgSrc: "./images/BlackJackConsole.png",
            actions: [
                <a href="https://github.com/tc2780/Blackjack" target="_blank" key="test">
                    <GithubFilled style={{fontSize: "20px"}}/>
                </a>
            ]
        }
    ]
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: "ghostwhite",
                    colorTextDescription: "#d3d3d3",
                    fontSize: 18
                }, 
                components: {
                    List: {
                        descriptionFontSize: 14,
                        
                        
                    },
                    Pagination: {
                        itemActiveBg: "#542a93",
                        colorPrimaryHover: "white",
                        colorPrimary: "#7f7ff2",
                        colorBgTextHover: "#7f7ff2",
                    }
                }
            }}
        >
        <StyledArchive id="archivedSection">
            <Fade damping={0.05}>
                <ArchiveTitle>past projects</ArchiveTitle>
            </Fade>
            <ArchiveContent>
                <Fade cascade damping={0.05}>
                    <ArchivedDescription>this is a list featuring all of my past projects</ArchivedDescription>
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                          onChange: (page) => {
                            console.log(page);
                          },
                          pageSize: 3,
                        }}    
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item
                                key={item.title}
                                actions={item.actions}
                                extra={
                                    <Image
                                    width={200}
                                    alt="logo"
                                    src={item.imgSrc}
                                    />
                                }
                            >
                              <List.Item.Meta
                                // avatar={<Avatar src={item.avatar} />}
                                title={item.title}
                                description={item.description}
                              />
                              <div className="itemContent">
                              {item.content}
                              </div>
                            </List.Item>
                          )}
                    >

                    </List>
                </Fade>
            </ArchiveContent>
        </StyledArchive>
        </ConfigProvider>
    )
}

export default ProjectArchive;