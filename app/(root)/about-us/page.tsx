import App from "./components/hero";
import CoreValuesSection from "./components/Core";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-blue-900 to-blue-800">
      <App />
      <CoreValuesSection />
    </div>
  );
};

export default AboutUsPage;
