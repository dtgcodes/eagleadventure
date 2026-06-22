import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Paragliding from "@/components/Paragliding";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import TandemFlights from "@/components/TandemFlights";
import VideoSection from "@/components/VideoSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Paragliding />
        <Services />
        <WhyUs />
        <TandemFlights />
        <VideoSection />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
