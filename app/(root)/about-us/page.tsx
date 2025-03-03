import App from "./components/hero";
import CoreValuesSection from "./components/Core";
import MissionVision from "./components/mission";
import LeadershipTeamSection from "./components/Leadership";
import TechnologiesSection from "./components/Technologies";
import CTASection from "./components/Cta";

const AboutUsPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-navy-900 via-blue-900 to-blue-800">
        <App />
        <CoreValuesSection />
        <MissionVision />
        <LeadershipTeamSection />
        <TechnologiesSection />
        <CTASection />
      </div>
    </>
  );
};

export default AboutUsPage;
