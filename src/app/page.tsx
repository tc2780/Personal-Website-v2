'use client'
import AboutMe from "@/components/aboutMe";
import ContactMe from "@/components/contact";
import CreativeWorks from "@/components/creativeWorks";
import FeaturedProjects from "@/components/featuredProjects";
import NavBar from "@/components/navBar";
import ProjectArchive from "@/components/projectArchive";
import WelcomeBox from "@/components/welcome";
import { keyframes } from "@emotion/react";
import dynamic from "next/dynamic";
import Reveal from "react-awesome-reveal";

// https://stackoverflow.com/questions/68596778/next-js-window-is-not-defined
const DynamicNavBar = dynamic(() => import('@/components/navBar'),   { ssr: false })

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 150px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default function Home() {
  return (
    <div style={{
      position: "relative", 
      color: "white", 
      backgroundColor: "#04030e",
      // fontFamily: "Verdana",
      fontFamily: "Trebuchet MS",
      }}>
      {/* <NavBar /> */}
      <DynamicNavBar />

      <div
        style={{
          backgroundImage: "url(/images/catHeader.png)",
          backgroundSize: "cover",
          height: '100vh',
          width: "100%",
        }}>

        <WelcomeBox />
        
      </div>


      <Reveal keyframes={customAnimation}>
        <div style={{minHeight: "120px"}}/>
        <AboutMe />
    
        <FeaturedProjects />

        <CreativeWorks />

        <ProjectArchive />

        <ContactMe />
      </Reveal>
    </div>
  );
}
