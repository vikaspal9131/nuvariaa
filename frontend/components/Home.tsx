import CardSection from "./comman/CardSection";
import Footer from "./comman/Footer";
import { Hero } from "./comman/Hero";
import Navbar from "./comman/Navbar";
import ServicesSection from "./comman/ServicesSection";
import VideoHeroCTA from "./comman/VideoHeroCTA";


export default function Home() {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
     <CardSection />
     <ServicesSection />
     <VideoHeroCTA />
     <Footer/>
    </div>
    </>
  );
}
