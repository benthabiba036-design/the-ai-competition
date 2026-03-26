import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { name: "Autonomous Agent", desc: "Build an AI agent that can independently perform complex tasks, make decisions, and adapt to changing environments without human intervention.", icon: "🤖" },
  { name: "Task Automation", desc: "Create an intelligent system that automates repetitive workflows using AI, reducing human effort while maintaining accuracy and reliability.", icon: "⚡" },
  { name: "User App", desc: "Design and develop a user-facing application powered by AI that solves a real-world problem with an intuitive and elegant interface.", icon: "📱" },
  { name: "AI Reliability", desc: "Engineer a solution focused on making AI systems more reliable, interpretable, and safe for critical applications.", icon: "🛡️" },
  { name: "Innovative Product", desc: "Push the boundaries of what's possible — create something entirely new that leverages AI in an unexpected and groundbreaking way.", icon: "🔮" },
];

interface ColonySectionProps {
  selected: number | null;
  setSelected: (i: number) => void;
}

const ColonySection = ({ selected, setSelected }: ColonySectionProps) => {
  return (
    <section className="relative z-10 py-20 px-4">
      <motion.h2
        className="font-display text-3xl sm:text-4xl text-center mb-4 neon-text-red text-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        SELECT YOUR COLONY
      </motion.h2>
      <p className="text-center text-muted-foreground font-body mb-12 text-sm">
        Choose your domain. Only one colony can be claimed.
      </p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => {
          const isSelected = selected === i;
          return (
            <motion.div
              key={i}
              className="relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onClick={() => setSelected(i)}
            >
              <div
                className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center transition-all duration-500"
                style={{
                  background: `radial-gradient(circle, ${isSelected ? "hsl(142 71% 45% / 0.15)" : "hsl(0 15% 8% / 0.7)"} 0%, transparent 70%)`,
                  boxShadow: isSelected
                    ? "0 0 30px hsl(142 71% 45% / 0.5), 0 0 60px hsl(142 71% 45% / 0.2), inset 0 0 30px hsl(142 71% 45% / 0.1)"
                    : "0 0 20px hsl(10 90% 52% / 0.2), 0 0 40px hsl(350 80% 45% / 0.1), inset 0 0 20px hsl(10 90% 52% / 0.05)",
                  border: `2px solid ${isSelected ? "hsl(142 71% 45% / 0.6)" : "hsl(10 90% 52% / 0.2)"}`,
                }}
              >
                <div
                  className="absolute inset-[-6px] rounded-full opacity-40"
                  style={{
                    background: isSelected
                      ? "conic-gradient(from 0deg, transparent 0%, hsl(142 71% 45% / 0.6) 25%, transparent 50%, hsl(142 71% 45% / 0.4) 75%, transparent 100%)"
                      : "conic-gradient(from 0deg, transparent 0%, hsl(10 90% 52% / 0.4) 25%, transparent 50%, hsl(350 80% 45% / 0.4) 75%, transparent 100%)",
                    animation: "energy-wave 8s linear infinite",
                  }}
                />

                <span className="text-3xl sm:text-4xl mb-1">{p.icon}</span>
                <span className="font-display text-[10px] sm:text-xs text-center px-2 tracking-wider text-foreground/90">
                  {p.name}
                </span>
                {isSelected && (
                  <motion.span
                    className="text-success text-lg mt-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    ☑️
                  </motion.span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="max-w-xl mx-auto mt-10 glass-panel rounded-lg p-6 neon-box-purple"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h3 className="font-display text-sm tracking-wider text-secondary mb-2">{projects[selected].name}</h3>
            <p className="font-body text-sm text-foreground/80 leading-relaxed">{projects[selected].desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ColonySection;
