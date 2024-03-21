'use client'
import { GithubOutlined, LinkedinFilled, LinkedinOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from 'styled-components';


const StyledContact = styled.div`
    align-items: left;
    flex-direction: column;
    width: inherit;
    margin: 0 26% 0 6%;
    padding: 4% 4% 4% 4%;
    margin-top: 50px;

    color: #d3d3d3;

    position: relative;

`;

const ContactTitle = styled.div`
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
    // transform: translate(-50px, 30px);
    // transform: translate(-20px, 50px);
`;

const ContactContent = styled.div`
    // width: fit-content;
    padding-top: 20px;

    background-color: #3e207f;
    box-shadow: 0px 0px 0px 30px #3e207f,
                20px 20px 0px 30px #270965;
    border-radius: 3px;
    // transform: translate(0, -30px);
`;

const Link = styled.div`
    font-size: 30px;
`;

const SubTitle = styled.div`
    font-size: 25px;
    font-style: italic;
    margin-bottom: 10px;
    color: ghostwhite;
`;

const ContactMe: React.FC<{}> = () => {
    return (
        <StyledContact id="contactSection">
            <Fade cascade damping={0.05} style={{zIndex:"9999", position: "relative"}}>
                <ContactTitle>contact me</ContactTitle>
            </Fade>
            <br />
            <br />
            <br />
            <ContactContent>
                <Row>
                    <Col>
                        <SubTitle>
                            Please feel free to contact me
                        </SubTitle>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link>
                            <a href="http://github.com/tc2780" target="_blank">
                                <GithubOutlined style={{paddingRight: "10px"}}/>
                                GitHub
                            </a>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link>
                            <a href="https://www.linkedin.com/in/tracy-chow-6bab40189/" target="_blank">
                                <LinkedinFilled style={{paddingRight: "10px"}}/>
                                LinkedIn
                            </a>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <form name="tesitng" method="POST" data-netlify="true">
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                        </form>
                    </Col>
                </Row>
            </ContactContent>
        </StyledContact>
    )
}

export default ContactMe;