import { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "@/assets/bg-image.jpg";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import KoganeSection from "@/components/KoganeSection";
import RulesSection from "@/components/RulesSection";
import ColonySection from "@/components/ColonySection";
import SubmitSection from "@/components/SubmitSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [selectedColony, setSelectedColony] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", team: "", password: "" });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative min-h-screen overflow-x-hidden bg-background"
    >
      <div className="fixed inset-0 z-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover will-change-transform"
          style={{ filter: "blur(20px) brightness(0.25)", transform: "scale(1.15)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsl(0 0% 4% / 0.7) 0%, hsl(0 0% 4% / 0.85) 100%)" }}
        />
      </div>

      <ParticleBackground />

      <div className="relative z-10">
        <HeroSection />
        <ColonySection selected={selectedColony} setSelected={setSelectedColony} />
        <KoganeSection formData={formData} setFormData={setFormData} />
        <SubmitSection formData={formData} selectedColony={selectedColony} />
        <RulesSection />
        <FooterSection />
      </div>
    </motion.div>
  );
};

export default Index;
