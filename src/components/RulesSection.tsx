import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rulesFrame from "@/assets/rules-frame.png";

const rules = [
  { title: "Mandatory Constraints", content: "All projects must use AI as a core component. No pre-built solutions or plagiarism allowed. Teams of 2-4 members only." },
  { title: "Final Presentation", content: "Each team must present a live demo and a 5-minute pitch. Slides must include architecture diagrams and methodology." },
  { title: "Important Rules", content: "Code must be original. External APIs are allowed but must be documented. Submissions after deadline are disqualified." },
  { title: "Evaluation Criteria", content: "Innovation (30%), Technical Depth (25%), UI/UX (20%), Presentation (15%), Impact (10%)." },
  { title: "Expected Deliverables", content: "Working prototype, source code repository, documentation, presentation slides, and a 2-minute demo video." },
];

const RulesSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-20 px-4">
      <motion.h2
        className="font-display text-3xl sm:text-4xl text-center mb-4 neon-text-purple text-secondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        RULES OF THE GAME
      </motion.h2>
      <p className="text-center text-muted-foreground font-body mb-12 text-sm">
        ⚠️ Participants must carefully read all rules before proceeding.
      </p>

      <motion.div
        className="relative max-w-lg mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Rules frame image */}
        <div className="relative">
          <img
            src={rulesFrame}
            alt=""
            className="w-full opacity-60"
            style={{
              filter: "drop-shadow(0 0 15px hsl(272 87% 37% / 0.4))",
            }}
          />

          {/* Rules overlaid inside the frame */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-[15%] py-[12%] gap-2 sm:gap-3">
            {rules.map((rule, i) => (
              <motion.div
                key={i}
                className="w-full glass-panel rounded-md cursor-pointer animate-energy-border border px-3 py-2 sm:px-4 sm:py-3"
                whileTap={{ scale: 0.98 }}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[10px] sm:text-xs tracking-wider text-primary">{rule.title}</span>
                  <span className="text-primary text-xs">{expanded === i ? "−" : "+"}</span>
                </div>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.p
                      className="text-foreground/80 text-[10px] sm:text-xs font-body mt-2 leading-relaxed"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {rule.content}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RulesSection;
