import { motion } from "framer-motion";
import infinityLogo from "@/assets/infinity-logo.jpg";

const FooterSection = () => (
  <footer className="relative z-10 py-16 px-4 border-t border-border">
    <motion.div
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <img
        src={infinityLogo}
        alt="Infinity Club"
        className="w-16 h-16 rounded-full mx-auto mb-4 ring-2 ring-primary/30 object-cover"
        style={{ filter: "drop-shadow(0 0 10px hsl(180 100% 50% / 0.4))" }}
      />
      <p className="font-display text-xs tracking-widest text-muted-foreground mb-6">INFINITY CLUB</p>

      <a
        href="https://www.instagram.com/club_.infinity?igsh=aDNpbWVtNjB1bGhu"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-primary font-body text-sm hover:underline transition-colors mb-10"
      >
        📸 Follow us on Instagram
      </a>

      <div className="glass-panel rounded-lg p-6 sm:p-8 mt-6 neon-box-purple">
        <p className="font-display text-xs tracking-widest text-secondary mb-3">🔥 FINAL MESSAGE</p>
        <blockquote className="font-body text-sm sm:text-base text-foreground/90 leading-relaxed italic">
          "AI can generate code.<br />
          But it cannot replace a strong idea, a solid architecture, and critical thinking."
        </blockquote>
        <p className="font-body text-sm text-muted-foreground mt-4">Good luck to all participants 🚀</p>
      </div>

      <p className="text-muted-foreground/50 text-xs font-body mt-8">
        © 2026 Infinity Club — NEUROPLEX
      </p>
    </motion.div>
  </footer>
);

export default FooterSection;
