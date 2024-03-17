'use client'
import AboutMe from "@/components/aboutMe";
import ContactMe from "@/components/contact";
import CreativeWorks from "@/components/creativeWorks";
import FeaturedProjects from "@/components/featuredProjects";
import NavBar from "@/components/navBar";
import ProjectArchive from "@/components/projectArchive";
import WelcomeBox from "@/components/welcome";

export default function Home() {
  return (
    <div style={{
      position: "relative", 
      color: "white", 
      backgroundColor: "black",
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

      <AboutMe />
  
      <FeaturedProjects />

      <CreativeWorks />
      
      <ProjectArchive />

      <ContactMe />
    </div>
  );
}
