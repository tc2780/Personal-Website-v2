'use client'
import { Affix, Anchor, ConfigProvider } from "antd";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from 'styled-components';

// export interface NavProps {
//     atTop: Boolean
//     setAtTop: function() = {};
    
// };

export interface NavProps {
    atTop: boolean;
}
const StyledNav = styled.div<NavProps>`

    padding: 15px;
    font-size: 22px;
    // background-color: red;
    // opacity: 50%;
    // position: relative;
    // top: 0;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;

    background-color: ${({atTop}) => atTop ? "none" : "black"};
    transform: background-color 500ms linear;
`

const StyledAnchor = styled(Anchor)`
    .ant-anchor-link-title .ant-anchor{
        color: white;
    }
`;


const NavBar: React.FC<{}> = () => {
    const [atTop, setAtTop] = useState(true);
    const vh = window.innerHeight;
    // useEffect(() => {
        const listenScrollEvent = (event: any) => {
            console.log("scroll: " + document.documentElement.scrollTop + "\n");
            console.log("vh: " + vh + "\n");
            if (document.documentElement.scrollTop > (vh - 100)) {
                setAtTop(false);
                console.log("SET FALSE");
            } else {
                setAtTop(true);
                console.log("SET TRUE");
            }
            console.log(atTop);
        }

        // useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: "ghostwhite",
                    fontFamily: "inherit",
                    fontSize: 20,
                    
                    colorPrimary: "#a74cf1",
                    // colorPrimary: `${atTop ? "#3E28A6" :  "white"}`, // selected colour
                    colorSplit: "none", // underline
                },
            }}
        >
            <StyledNav atTop={atTop}>
                <StyledAnchor
                        direction="horizontal"
                        items={[
                        {
                            key: 'part-0',
                            href: '#homeSection',
                            title: 'Tracy Chow',
                        },
                        {
                            key: 'part-1',
                            href: '#aboutSection',
                            title: 'about',
                        },
                        {
                            key: 'part-2',
                            href: '#featuredSection',
                            title: 'featured',
                        },
                        {
                            key: 'part-3',
                            href: '#creativeSection',
                            title: 'creative',
                        },
                        {
                            key: 'part-4',
                            href: '#archivedSection',
                            title: 'archive',
                        },
                        {
                            key: 'part-5',
                            href: '#contactSection',
                            title: 'contact',
                        },
                        ]}
                        // offsetTop={100}
                        targetOffset={100}
                />
            </StyledNav>
        </ConfigProvider>
    )
}

export default NavBar;