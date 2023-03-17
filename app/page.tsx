import CoreTracks from "./components/widgets/CoreTracks";
import SpecializedTracks from "./components/widgets/SpecializedTracks"
import Hero from "./components/widgets/Hero";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CoreTracks/>
        <SpecializedTracks/>
      </main>
    </>
  );
}
