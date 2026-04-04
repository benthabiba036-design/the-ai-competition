import { motion } from "framer-motion";
import bgImage from "@/assets/bg-image.jpg";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import RulesSection from "@/components/RulesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
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
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-md mx-auto text-center glass-panel rounded-lg p-8 neon-box-cyan">
            <p className="text-green-400 font-display text-lg">REGISTRATION ENDED</p>
            <p className="text-muted-foreground text-sm font-body mt-2">
              Registration is closed. New submissions are no longer available.
            </p>
          </div>
        </section>
        <RulesSection />
        <FooterSection />
      </div>
    </motion.div>
  );
};

export default Index;
