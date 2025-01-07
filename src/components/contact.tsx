'use client'
import { GithubOutlined, LinkedinFilled, LinkedinOutlined, MailFilled } from "@ant-design/icons";
import { Button, Col, ConfigProvider, Form, Input, Row, Spin, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from 'styled-components';
const {useState} = React;


const StyledContact = styled.div`
    align-items: left;
    flex-direction: column;
    width: inherit;
    margin: 0 26% 0 6%;
    padding: 4% 4% 4% 4%;
    margin-top: 50px;

    // color: #d3d3d3;
    color: #afb2c4;

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
    width: fit-content;
    padding: 20px 15px 15px 15px;

    background-color: #3e207f;
    box-shadow: 0px 0px 0px 30px #3e207f,
                20px 20px 0px 30px #270965;
    border-radius: 3px;
    // transform: translate(0, -30px);
`;

const Link = styled.div`
    font-size: 25px;
`;

const SubTitle = styled.div`
    font-size: 25px;
    font-style: italic;
    margin-bottom: 10px;
    color: ghostwhite;
`;

const StyledForm = styled(Form)`
    margin-top: 20px;
    padding: 20px;
    border-radius: 20px;
    background-color: #673da6;
`;

const StyledSpin = styled(Spin)`
    padding-left: 15px;
    .ant-spin-dot-item {
    background-color: white;
    }
`

const ContactMe: React.FC<{}> = () => {

    const [isLoading, setIsLoading] = useState(false)

    // https://joeczubiak.com/netlify-contact-form-with-react-ant-design/
    function encode(data: { [x: string]: string | number | boolean; }) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
            .join(`&`)
    }
    const showSuccess = () => {
        // TODO: Show a success message or navigate to a success page.
        message.success({
            content: 'Message sent! Thank you :)'
        })
        console.log(`form submitted successfully`);
    }

    const showError = (error: any) => {
        // TODO: Show an error message to the user
        console.log(`There was an error submitting the form`)
        console.log(error)
        message.error({
            content: "Message couldn't send :( Could you please try again?"
        })
    }
    const handleSubmit = async (values: any) => {
        try {
            setIsLoading(true)
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                    'form-name': "contact-form",
                    ...values,
                }),
            })
            if (res.status == 200) {
                showSuccess()
            } else {
                showError("Failed to send: " + res.status + res.statusText)
            }
            setIsLoading(false)
        } catch (error) {
            showError(error)
            setIsLoading(false)
        } 
    };
    
    return (
        <ConfigProvider
        theme={{
            token: {
                colorText: "inherit",
                fontSize: 20,
                colorBgContainer: "#302d32",
                colorBgTextHover: "red",
                colorError: "#ff7a7c"
            },
            components: {
                Input: {
                    activeBg: "#141315",
                    hoverBorderColor: "white",
                    colorBorder: "#673da6",
                },
                Button: {
                    defaultHoverBg: "#542a93",
                    defaultHoverColor: "white",
                    defaultHoverBorderColor: "white",
                    defaultBorderColor: "ghostwhite"
                }
            }
        }}
        >
        <StyledContact>
            <Fade cascade damping={0.05} style={{zIndex:"9999", position: "relative"}}>
                <ContactTitle id="contactSection">contact me</ContactTitle>
            </Fade>
            <br />
            <br />
            <br />
            <ContactContent>
                <Row gutter={[{ xs: 8, sm: 48, md: 48, lg: 48 }, 48]}>
                    <Col>
                        <SubTitle>
                            {'Please feel free to contact me - I’d love to connect!'}
                        </SubTitle>
                        <Link>
                            <a href="https://www.linkedin.com/in/tracy-chow-6bab40189/" target="_blank">
                                <LinkedinFilled style={{paddingRight: "10px"}}/>
                                LinkedIn
                            </a>
                        </Link>
                        <Link>
                            <a href="mailto:Tracyc2780@gmail.com">
                                <MailFilled style={{paddingRight: "10px"}}/>
                                Email
                            </a>
                        </Link>
                        <Link>
                            <a href="http://github.com/tc2780" target="_blank">
                                <GithubOutlined style={{paddingRight: "10px"}}/>
                                GitHub
                            </a>
                        </Link>
                        
                    </Col>
                    <Col>
                        <StyledForm name="contact-form"
                            method="POST" 
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            layout={"vertical"} 
                            onFinish={handleSubmit}
                        >
                            <Form.Item
                                 name="title">
                                    <p>{`
                                        Or, send a message with the form below, and I’ll get back to you as soon as possible!                                        `}
                                    </p>
                            </Form.Item>
                            <Form.Item label="Name: " name="name">
                                <Input />

                            </Form.Item>
                            <Form.Item label="Email: " name="email" rules={[{ type: 'email' }]}>
                                <Input />

                            </Form.Item>
                            <Form.Item label="Message: " name="message">
                                <TextArea />

                            </Form.Item>
                            <Form.Item>
                                <Button type="default" htmlType="submit">
                                    Submit
                                </Button>
                                {isLoading &&
                                    <StyledSpin />
                                }
                            </Form.Item>
                        </StyledForm>
                    </Col>
                </Row>
            </ContactContent>
        </StyledContact>
        </ConfigProvider>
    )
}

export default ContactMe;