import NavBar from "@/components/navBar";
import WelcomeBox from "@/components/welcome";
import Image from "next/image";

export default function Home() {
  return (
      <div
        style={{
          backgroundImage: "url(/images/catHeader.png)",
          backgroundSize: "cover",
          height: '100vh',
          // width: '100vh',
          position: 'relative',
        }}>

        <NavBar></NavBar>
        <WelcomeBox></WelcomeBox>

        <div
        style={{
          height: '1000px'
        }}>
          PLACEHOLDER for content
        </div>
        
      </div>
  );
}
