'use client'
import AboutMe from "@/components/aboutMe";
import ContactMe from "@/components/contact";
import CreativeWorks from "@/components/creativeWorks";
import FeaturedProjects from "@/components/featuredProjects";
import NavBar from "@/components/navBar";
import ProjectArchive from "@/components/projectArchive";
import WelcomeBox from "@/components/welcome";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";


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
      <NavBar />

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
        <AboutMe />
    
        <FeaturedProjects />

        <CreativeWorks />

        <ProjectArchive />

        <ContactMe />
      </Reveal>
    </div>
  );
}
