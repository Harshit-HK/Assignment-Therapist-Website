import Hero from "@/components/Hero";
import ExpSessions from "@/components/ExpSessions";
import Services from "@/components/Services";
import Schedule from "@/components/Schedule";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import MobileSidebar from "@/components/Ms";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExpSessions/>
      <Services />
      <Schedule/>
      <About />
      <Testimonials/>
      <FAQ />
      <Contact /> 
    </main>
  );
}
