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
    <div style={{position: "relative"}}>
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

      <ProjectArchive />

      <CreativeWorks />

      <ContactMe />
    </div>
  );
}
