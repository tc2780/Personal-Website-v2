'use client'
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Card, Carousel, Col, Image, Row } from "antd";
import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from 'styled-components';
import YouTube from 'react-youtube';


const StyledCreativeWorks = styled.div`
    align-items: left;
    flex-direction: column;
    width: inherit;
    margin: 80px 26% 0 6%;
    padding: 4% 4% 4% 4%;

    // background-color: #2F1B5B;
    // border-radius: 50px;

    // box-shadow: 60px -16px #1C0D44;
    // box-shadow: 0px 0px 10px 20px white;
    // box-shadow: inset 18px 18px 14px -2px #1C0D44,
    //             12px 8px 0 0px black;

    color: #d3d3d3;

    position: relative;
    // height: fit-content;

    .MuiImageListItemBar-title {
        font-size: 20px;
    }
    .MuiImageListItemBar-subtitle {
        font-size: 15px;
    }
    .ant-image-img {
        border-radius: 10px
    }
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

    // height: 100px;
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

const CreativeWorks: React.FC<{}> = () => {
    return (
        <StyledCreativeWorks id="creativeSection">
            <Fade cascade damping={0.05} style={{zIndex:"9999", position: "relative"}}>
                <CreativeTitle>creative works</CreativeTitle>
            </Fade>
            <br />
            <br />
            <Fade cascade damping={0.05} >
            <CreativeContent>
                <Fade fraction={0.1} cascade damping={0.05} >
                    <SubTitle>{`artwork`}</SubTitle>
                    <Paragraph>{`
                        These are some artworks I've created. When I was younger, I was mostly a traditional artist, using pencils and markers.
                        I started to pick up digital drawing more once I found that I had easier access to it most of the time.
                        Below are some of the digital drawings I've done in the past few years.
                    `}
                    </Paragraph>
                </Fade>
                <br />
                <Image.PreviewGroup
                    preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}
                >
                
                    <ImageList 
                        // variant="quilted" 
                        cols={3} gap={12}>
                        <Fade cascade damping={0.05} >
                            <ImageListItem key={"tst"}>
                                <Image src="./images/catHeader.png" alt="catHeader"/>
                                <ImageListItemBar position="below" 
                                    title={"tranquil cat"} 
                                    subtitle={"used as the header for this site!"} />
                            </ImageListItem>
                            <ImageListItem key={"tst"}>
                                <Image src="./images/caveGirl.jpeg" alt="caveGirl"/>
                                <ImageListItemBar position="below"
                                title={"girl in a cave"} 
                                //  subtitle={"used as the header for this site!"} 
                            />
                            </ImageListItem>
                            <ImageListItem key={"tst"}>
                                <Image src="./images/sleepyCat.jpg" alt="sleepyCat"/>
                                    <ImageListItemBar position="below"
                                    title={"sleepy cat"} 
                                    //  subtitle={"used as the header for this site!"} 
                                />
                            </ImageListItem>
                            <ImageListItem key={"tst"}>
                                <Image src="./images/hawaii.jpg" alt="hawaii"/>
                                <ImageListItemBar position="below"
                                title={"hawaii"} 
                                //  subtitle={"used as the header for this site!"} 
                                />
                            </ImageListItem>
                            
                            {/*<ImageListItem key={"tst"}>
                                <img src="./images/AdventureGame.png"/>
                            </ImageListItem>
                            <ImageListItem key={"tst"}>
                                <img src="./images/AdventureGame.png"/>
                            </ImageListItem>
                            <ImageListItem key={"tst"}>
                                <img src="./images/AdventureGame.png"/>
                            </ImageListItem> */}
                        </Fade>
                    </ImageList>
                    </Image.PreviewGroup>
                <br />
                <Fade cascade fraction={0.1} damping={0.05} >
                <SubTitle>{`animations`}</SubTitle>
                <Paragraph>{`
                    I have some (very) short animations I've done in the past few years. One I did as a capstone project in my last year of high school, 
                    and also includes some of the concept art I had drawn up for it. The other is technically also considered a technical project
                    as I implemented it with Three.js and OpenGL for an assignment. But I wanted to bring focus to the animations I 
                    did for it and decided to put it in this section as well.
                `}</Paragraph>
                <br /><br />
                <SectionTitle>cat animation</SectionTitle>
                </Fade>
                <ImageList 
                    // variant="masonry" 
                    cols={3} gap={12}>
                    <Fade cascade fraction={0.1} damping={0.05} >       
                        <ImageListItem key={"tst"}>
                        
                            {/* <Image src="./images/catAnimation.jpg"
                                alt="catAnimation"
                                preview={{
                                    imageRender: () => (
                                      <YouTube 
                                        videoId="kov8PXBQOxk"
                                        style={{height:"1000"}}
                                      />
                                    ),
                                    toolbarRender: () => null,
                                }}
                            /> */}
                            <YouTube videoId="kov8PXBQOxk"/>
                            <ImageListItemBar position="below"
                            //  title={"watch video"} 
                            //  subtitle={"used as the header for this site!"} 
                        />
                        </ImageListItem>
                    </Fade>
                </ImageList>
                <br />
                <Fade cascade fraction={0.1} damping={0.05} >
                    <SectionTitle>marble animation</SectionTitle>
                </Fade>
                <ImageList 
                    // variant="masonry" 
                    cols={3} gap={12}>
                <Fade cascade fraction={0.1} damping={0.05} >
                        <ImageListItem key={"tst"}>
                                <Image src="./images/caveGirl.jpeg" alt="test"/>
                                <ImageListItemBar position="below"
                                title={"blue marble concept art"} 
                                //  subtitle={"used as the header for this site!"} 
                                />
                        </ImageListItem>
                        <ImageListItem key={"tst"}>
                                <Image src="./images/caveGirl.jpeg" alt="test"/>
                                <ImageListItemBar position="below"
                                title={"purple marble concept art"} 
                                //  subtitle={"used as the header for this site!"} 
                                />
                        </ImageListItem>
                        <ImageListItem key={"tst"}>
                            <Image src="./images/caveGirl.jpeg" alt="test"/>
                            <ImageListItemBar position="below"
                             title={"blue in chosen art style"} 
                            //  subtitle={"used as the header for this site!"} 
                            />
                        </ImageListItem>
                        <ImageListItem key={"tst"}>
                            <Image src="./images/caveGirl.jpeg" alt="test"/>
                            <ImageListItemBar position="below"
                             title={"purple in chosen art style"} 
                            //  subtitle={"used as the header for this site!"} 
                            />
                        </ImageListItem>
                        {/* <ImageListItem key={"tst"}>
                        <YouTube 
                                        videoId="500GanMZ2O0"
                                        style={{height:"1000"}}
                                      />
                            <ImageListItemBar position="below"
                             title={"watch video"} 
                            //  subtitle={"used as the header for this site!"} 
                        />
                        </ImageListItem> */}
                        {/* <ImageListItem key={"tst"}>
                            <Image src="./images/catAnimation.jpg"
                                alt="marbleAnimation"
                                preview={{
                                    imageRender: () => (
                                      <YouTube 
                                        videoId="500GanMZ2O0"
                                        style={{height:"1000"}}
                                      />
                                    ),
                                    toolbarRender: () => null,
                                }}
                            />
                            <ImageListItemBar position="below"
                             title={"watch video"} 
                            //  subtitle={"used as the header for this site!"} 
                        />
                        </ImageListItem> */}
                        </Fade>
                    </ImageList>
                    <ImageList>
                        <Fade damping={0.05} >
                        <ImageListItem>
                            <YouTube videoId="500GanMZ2O0" />
                            <ImageListItemBar position="below"
                                title={"full video"} 
                            />
                        </ImageListItem>
                        </Fade>
                    </ImageList>
            </CreativeContent>
            </Fade>
        </StyledCreativeWorks>
    )
}

export default CreativeWorks;