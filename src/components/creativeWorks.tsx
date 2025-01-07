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

    // color: #d3d3d3;
    color: #afb2c4;

    position: relative;
    // height: fit-content;

    .MuiImageListItemBar-title {
        font-size: 19px;
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
    padding: 20px 15px 15px 15px;

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
    color: ghostwhite;
`;

const Paragraph = styled.div`
    font-size: 19px;
    // min-width: 600px;
    // padding: 0 10% 0 10%;

`;

const CreativeWorks: React.FC<{}> = () => {
    return (
        <StyledCreativeWorks >
            <Fade cascade damping={0.05} style={{zIndex:"9999", position: "relative"}}>
                <CreativeTitle id="creativeSection">creative works</CreativeTitle>
            </Fade>
            <br /> <br />
            <Fade cascade damping={0.05} >
                <CreativeContent>
                    <Fade fraction={0.1} cascade damping={0.05} >
                        <br />
                        <SubTitle>{`artwork`}</SubTitle>
                        <Paragraph>{`
                            A few of the artworks I've created. I've experimented with a variety of mediums,
                            including  pencils, paint, ink, and digital art. I'm still working on my art skills, 
                            but I enjoyed creating these!
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
                            variant="masonry" 
                            cols={3} gap={12}>
                                <Fade cascade damping={0.05} >

                                    <ImageListItem key={"catHeader"}>
                                        <Image src="./images/catHeader.png" alt="catHeader"/>
                                        <ImageListItemBar position="below" 
                                            title={"just a cat"} 
                                            subtitle={"used as the header for this site!"} />
                                    </ImageListItem>

                                    <ImageListItem key={"caveGirl"}>
                                        <Image src="./images/caveGirl.jpeg" alt="caveGirl"/>
                                        <ImageListItemBar position="below" title={"girl in a cave"}/>
                                    </ImageListItem>

                                    <ImageListItem key={"sleepyCat"}>
                                        <Image src="./images/sleepyCat.jpg" alt="sleepyCat"/>
                                        <ImageListItemBar position="below" title={"sleepy cat"}/>
                                    </ImageListItem>

                                    <ImageListItem key={"hawaii"}>
                                        <Image src="./images/hawaii.jpg" alt="hawaii"/>
                                        <ImageListItemBar position="below" title={"trees"}/>
                                    </ImageListItem>

                                    <ImageListItem key={"aLight"}>
                                        <Image src="./images/justALight.JPG" alt="light"/>
                                        <ImageListItemBar position="below" title={"just a light"} />
                                    </ImageListItem>

                                </Fade>
                        </ImageList>
                    </Image.PreviewGroup>

                    <br />
                    
                    <Fade cascade fraction={0.1} damping={0.05} >
                        <SubTitle>{`animations`}</SubTitle>
                        <Paragraph>{`
                            I'm also interested in animation, and have experimented with creating a few short animations.
                            One below I created for a high school capstone project, and includes some of the concept art I had.
                            More recently as I've pursued my degree, I started learning ThreeJS and OpenGL, and have
                            included below a short demo video of an assignment I had for CPSC 314: Computer Graphics. Where
                            I focused on creating fluid and realistic movements through code.
                        `}</Paragraph>
                        <br />
                    </Fade>
                            
                    <Fade cascade fraction={0.1} damping={0.05} >
                        <SectionTitle>marble animation</SectionTitle>
                    </Fade>

                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                            }}
                        >
                        <ImageList variant="masonry" cols={3} gap={12}>
                            <Fade cascade fraction={0.1} damping={0.05} >
                                <ImageListItem key={"blueConcept"}>
                                    <Image src="./images/blueConcept.JPG" alt="blueConcept"/>
                                    <ImageListItemBar position="below" title={"blue marble concept art"} />
                                </ImageListItem>
                                <ImageListItem key={"purpleConcept"}>
                                    <Image src="./images/purpleConcept.JPG" alt="purpleConcept"/>
                                    <ImageListItemBar position="below" title={"purple marble concept art"} />
                                </ImageListItem>
                                <ImageListItem key={"blueMarble"}>
                                    <Image src="./images/blueStyled.JPG" alt="blueMarble"/>
                                    <ImageListItemBar position="below" title={"blue in chosen art style"} />
                                </ImageListItem>
                                <ImageListItem key={"purpleMarble"}>
                                    <Image src="./images/purpleStyled.JPG" alt="purpleMarble"/>
                                    <ImageListItemBar position="below" title={"purple in chosen art style"} />
                                </ImageListItem>
                            </Fade>
                        </ImageList>
                    </Image.PreviewGroup>

                    <ImageList style={{paddingTop: "30px"}}>
                        <Fade damping={0.05} >
                        <ImageListItem key={'marble-animation-full-video'}>
                            <YouTube videoId="500GanMZ2O0" />
                            <ImageListItemBar position="below"
                                title={"full video"} 
                            />
                        </ImageListItem>
                        </Fade>
                    </ImageList>

                    <br />

                    <Fade>
                        <SectionTitle>cat animation</SectionTitle>
                    </Fade>

                    <ImageList cols={3} gap={12}>
                        <Fade cascade fraction={0.1} damping={0.05} >       
                            <ImageListItem key={"cat-demo"}>
                                <YouTube videoId="kov8PXBQOxk"/>
                                <ImageListItemBar position="below"
                                title={"implemented with OpenGL and JavaScript"} 
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