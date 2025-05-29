import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import GamesSection from "@/components/GamesSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import JoinSection from "@/components/JoinSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <GamesSection />
      <HowItWorksSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
