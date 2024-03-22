'use client'
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import { Affix, Anchor, Button, ConfigProvider } from "antd";
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

    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
            if (document.documentElement.scrollTop > (vh)) {
                setAtTop(false);
            } else {
                setAtTop(true);
            }
        }
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
                <div>
                    <Button 
                        ghost 
                        style={{border: "none"}}
                        href="https://www.linkedin.com/in/tracy-chow-6bab40189/"
                        target="_blank"
                        icon={<LinkedinFilled style={{fontSize: "25px", paddingRight: "20px"}} />}
                    />
                    <Button 
                        ghost 
                        style={{border: "none"}}
                        href="https://github.com/tc2780"
                        target="_blank"
                        icon={<GithubFilled style={{fontSize: "25px"}} />}
                    />
                </div>
            </StyledNav>
        </ConfigProvider>
    )
}

export default NavBar;