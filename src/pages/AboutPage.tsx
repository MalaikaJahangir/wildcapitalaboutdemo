import HeroSection from '../components/HeroSection';
import FounderStory from '../components/FounderStory';
import Timeline from '../components/Timeline';
import MissionVision from '../components/MissionVision';
import GlobalImpact from '../components/GlobalImpact';
import ClosingCTA from '../components/ClosingCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FounderStory />
      <Timeline />
      <MissionVision />
      <GlobalImpact />
      <ClosingCTA />
    </div>
  );
}
