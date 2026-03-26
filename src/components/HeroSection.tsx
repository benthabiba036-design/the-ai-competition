import { motion } from "framer-motion";
import infinityLogo from "@/assets/infinity-logo.jpg";
import competitionLogo from "@/assets/competition-logo.jpg";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 z-10">
      <motion.img
        src={infinityLogo}
        alt="Infinity Club"
        className="absolute top-6 left-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-primary/40"
        style={{ filter: "drop-shadow(0 0 10px hsl(10 90% 52% / 0.5))" }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.img
        src={competitionLogo}
        alt="Competition Logo"
        className="absolute top-6 right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-secondary/40"
        style={{ filter: "drop-shadow(0 0 10px hsl(350 80% 45% / 0.5))" }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.15em] leading-none animate-flicker"
          style={{
            background: "linear-gradient(135deg, hsl(10 90% 52%), hsl(350 80% 45%), hsl(20 100% 56%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px hsl(10 90% 52% / 0.5)) drop-shadow(0 0 60px hsl(350 80% 45% / 0.3))",
          }}
        >
          NEUROPLEX
        </h1>

        <motion.p
          className="font-display text-lg sm:text-xl md:text-2xl tracking-[0.3em] mt-4 text-foreground/80 neon-text-purple"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          ENTER THE CULLING GAME
        </motion.p>

        <motion.p
          className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          An elite AI competition where only the strongest minds survive.
          Build, compete, and prove your dominance in the arena of artificial intelligence.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <CountdownTimer />
          <a
            href="#register"
            className="inline-block font-display text-sm tracking-widest px-8 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 neon-box-cyan"
          >
            JOIN THE GAME ↓
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
