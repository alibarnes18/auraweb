import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import OwnerBio from "@/components/OwnerBio";
import Sectors from "@/components/Sectors";
import { WorldMap } from "@/components/WorldMap";
import NumberedTabs from "@/components/NumberedTabs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <OwnerBio />
        <Sectors />
        <div className="py-20 w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Küresel Varlığımız</h2>
            <p className="text-brand-gray max-w-2xl mx-auto text-lg">İstanbul merkezli olarak dünyanın dört bir yanına teknoloji ve inovasyon ulaştırıyoruz.</p>
          </div>
          <WorldMap
            lineColor="#FF6B1A"
            dots={[
              {
                start: { lat: 41.0082, lng: 28.9784, label: "İstanbul" },
                end: { lat: 51.5074, lng: -0.1278, label: "Londra" },
              },
              {
                start: { lat: 41.0082, lng: 28.9784, label: "İstanbul" },
                end: { lat: 40.7128, lng: -74.0060, label: "New York" },
              },
              {
                start: { lat: 41.0082, lng: 28.9784, label: "İstanbul" },
                end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
              },
              {
                start: { lat: 41.0082, lng: 28.9784, label: "İstanbul" },
                end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
              },
              {
                start: { lat: 41.0082, lng: 28.9784, label: "İstanbul" },
                end: { lat: 52.5200, lng: 13.4050, label: "Berlin" },
              },
            ]}
          />
        </div>
        <NumberedTabs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
