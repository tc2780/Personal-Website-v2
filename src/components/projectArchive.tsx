'use client'
import React from "react";
import styled from 'styled-components';


const StyledArchive = styled.div`

    align-items: right;
    flex-direction: column;
    width: inherit;
    margin: 0 8% 0 26%;
    // padding: 4% 4% 4% 4%;
    margin-top: 50px;
    // text-align: right;

    // background-color: #2F1B5B;
    // border-radius: 50px;

    // box-shadow: inset 18px 18px 14px -2px #1C0D44,
    //             12px 8px 0 0px black;



    color: #d3d3d3;

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
    padding: 4% 0% 4% 4%;
`;


const ProjectArchive: React.FC<{}> = () => {
    return (
        <StyledArchive id="archivedSection">
            <ArchiveTitle>past projects</ArchiveTitle>
            
            <ArchiveContent>TESTING</ArchiveContent>
        </StyledArchive>
    )
}

export default ProjectArchive;