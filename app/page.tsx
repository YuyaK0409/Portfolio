// Component
import HomeSection from "./_component/home/HomeSection";
import JourneySection from "./_component/journey/JourneySection";
import About from "./_component/about/About";

export default function Home() {
  return (
    <main className="mt-[65px] flex flex-col overflow-x-hidden">
      <div id="home">
        <HomeSection />
      </div>
      <div id="about" className="flex-1">
        <About />
      </div>
      <div>
        hi
        {/* <JourneySection /> */}
      </div>
    </main>
  );
}
