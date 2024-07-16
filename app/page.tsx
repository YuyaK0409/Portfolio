// Component
import AboutSection from "./_section/about/AboutSection";
import HomeSection from "./_section/home/HomeSection";
import JourneySection from "./_section/journey/JourneySection";
import ContactSection from "./_section/contact/ContactSection";

export default function Home() {
  return (
    <main className="mt-[65px] flex flex-col overflow-x-hidden">
      <div id="home" className="pb-10">
        <HomeSection />
      </div>
      <div id="about" className="flex-1 py-10">
        <AboutSection />
      </div>
      <div>
        <JourneySection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
