import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BrowserMockup from "@/components/BrowserMockup";
import TechStackSection from "@/components/TechStackSection";
import PrivacySection from "@/components/PrivacySection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BrowserMockup />
      <TechStackSection />
      <PrivacySection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
