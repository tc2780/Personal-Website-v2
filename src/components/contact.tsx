'use client'
import React from "react";
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
    // transform: translate(-20px, 50px);
`;

const ContactContent = styled.div`
    width: fit-content;
    padding-top: 20px;

    background-color: #3e207f;
    box-shadow: 0px 0px 0px 30px #3e207f,
                20px 20px 0px 30px #270965;
    border-radius: 3px;
`;

const ContactMe: React.FC<{}> = () => {
    return (
        <StyledContact >
            <ContactTitle>contact me</ContactTitle>
            <ContactContent>TESTING</ContactContent>
        </StyledContact>
    )
}

export default ContactMe;