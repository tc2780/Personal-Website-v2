'use client'
import React from "react";
import styled from 'styled-components';


const StyledContact = styled.div`
    align-items: left;
    flex-direction: column;
    min-width: 600px;
    margin: 0 26% 0 6%;
    padding: 4% 4% 4% 4%;
    margin-top: 50px;

    background-color: #2F1B5B;
    border-radius: 50px;

    // box-shadow: 60px -16px #1C0D44;
    // box-shadow: 0px 0px 10px 20px white;
    box-shadow: inset 18px 18px 14px -2px #1C0D44,
                12px 8px 0 0px black;

    color: #d3d3d3;
`;

const ContactTitle = styled.div`
    font-size: 40px;
    color: ghostwhite;
    height: 200px;
`;

const ContactMe: React.FC<{}> = () => {
    return (
        <StyledContact >
            <ContactTitle>contact me</ContactTitle>
        </StyledContact>
    )
}

export default ContactMe;