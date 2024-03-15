'use client'
import React from "react";
import styled from 'styled-components';

const StyledNav = styled.div`

    padding: 15px;
    background-color: red;
    font-size: 22px;
`

const NavBar: React.FC<{}> = () => {
    return (
        <StyledNav >
            test nav bar
        </StyledNav>
    )
}

export default NavBar;