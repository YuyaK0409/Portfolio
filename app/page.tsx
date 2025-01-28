// Component
import AboutSection from "./_section/about/AboutSection";
import HomeSection from "./_section/home/HomeSection";
import EducationSection from "./_section/education/EducationSection";
import ExperienceSection from "./_section/experience/ExperienceSection";
import ContactSection from "./_section/contact/ContactSection";

export default function Home() {
  return (
    <main className="mt-[65px] flex flex-col overflow-x-hidden">
      <div id="home" className="pb-10">
        <HomeSection />
      </div>
      <div id="about" className="flex-1 pt-20 pb-10">
        <AboutSection />
      </div>
      <div id="education" className="pt-20 pb-10">
        <EducationSection />
      </div>
      <div id="experience" className="pt-20 pb-10">
        <ExperienceSection />
      </div>
      {/* <div id="contact" className="pt-20 pb-10">
        <ContactSection />
      </div> */}
    </main>
  );
}
