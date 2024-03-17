'use client'
import React from "react";
import styled from 'styled-components';


const StyledArchive = styled.div`

    align-items: right;
    flex-direction: column;
    width: inherit;
    margin: 0 6% 0 26%;
    padding: 4% 4% 4% 4%;
    margin-top: 50px;
    text-align: right;

    background-color: #2F1B5B;
    border-radius: 50px;

    box-shadow: inset 18px 18px 14px -2px #1C0D44,
                12px 8px 0 0px black;



    color: #d3d3d3;

`;

const ArchiveTitle = styled.div`
    font-size: 40px;
    color: ghostwhite;
`;


const ProjectArchive: React.FC<{}> = () => {
    return (
        <StyledArchive >
            <ArchiveTitle>past projects</ArchiveTitle>
        </StyledArchive>
    )
}

export default ProjectArchive;