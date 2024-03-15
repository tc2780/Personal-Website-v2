'use client'
import { Affix } from "antd";
import React from "react";
import styled from 'styled-components';

const StyledNav = styled.div`

    padding: 15px;
    font-size: 22px;
    background-color: red;
    opacity: 50%;
    // position: relative;
    // top: 0;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
`

const StyledAffix = styled(Affix)`
    .ant-affix {
        font-size: 22px;
        background-color: red;
        // opacity: 50%;
    }
`

const NavBar: React.FC<{}> = () => {
    return (
        // <StyledAffix offsetTop={0} >
            <StyledNav >
                test nav bar
            </StyledNav>
        // </StyledAffix>
    )
}

export default NavBar;