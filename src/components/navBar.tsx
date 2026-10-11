'use client'
import { GithubFilled, HighlightFilled, HighlightOutlined, LinkedinFilled } from "@ant-design/icons";
import { Affix, Anchor, Button, ConfigProvider, Tooltip } from "antd";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from 'styled-components';

export interface NavProps {
    $atTop: boolean;
}
const StyledNav = styled.div<NavProps>`

    padding: 15px;
    font-size: 22px;
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;

    background-color: ${({$atTop}) => $atTop ? "none" : "black"};
    transform: background-color 500ms linear;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledAnchor = styled(Anchor)`
    .ant-anchor-link-title .ant-anchor{
        color: white;
    }
    .ant-anchor-link-title:hover {
        color: #a74cf1;
    }
`;

const NavBar: React.FC<{}> = () => {
    const [atTop, setAtTop] = useState(true);
    const vh = window.innerHeight;
    useEffect(() => {
        const listenScrollEvent = (event: any) => {
            if (document.documentElement.scrollTop > (vh)) {
                setAtTop(false);
            } else {
                setAtTop(true);
            }
        }
        window.addEventListener("scroll", listenScrollEvent);
    }, []);

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
            <StyledNav $atTop={atTop}>
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
                <div style={{display: "flex", flexDirection: "row", gap: "14px"}}>
                    <Tooltip title="Creative Portfolio" styles={{body: {fontSize: '16px', opacity: '80%'}}}>
                        <Button 
                            ghost 
                            style={{border: "none"}}
                            href="https://www.linkedin.com/in/tracy-chow-6bab40189/"
                            target="_blank"
                            icon={<HighlightFilled style={{fontSize: "25px",}} />}
                        />
                    </Tooltip>
                    <Tooltip title="LinkedIn" styles={{body: {fontSize: '16px', opacity: '80%'}}}>
                        <Button 
                            ghost 
                            style={{border: "none"}}
                            href="https://www.linkedin.com/in/tracy-chow-6bab40189/"
                            target="_blank"
                            icon={<LinkedinFilled style={{fontSize: "25px"}} />}
                        />
                    </Tooltip>
                    <Tooltip title="GitHub" styles={{body: {fontSize: '16px', opacity: '80%'}}}>
                        <Button 
                            ghost 
                            style={{border: "none"}}
                            href="https://github.com/tc2780"
                            target="_blank"
                            icon={<GithubFilled style={{fontSize: "25px"}} />}
                        />
                    </Tooltip>
                </div>
            </StyledNav>
        </ConfigProvider>
    )
}

export default NavBar;