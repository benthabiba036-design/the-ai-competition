import { motion } from "framer-motion";
import koganeImg from "@/assets/kogane.jpg";

interface KoganeSectionProps {
  formData: { name: string; email: string; phone: string; team: string; password: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; email: string; phone: string; team: string; password: string }>>;
}

const KoganeSection = ({ formData, setFormData }: KoganeSectionProps) => {
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const fields = [
    { key: "name", label: "Full Name", type: "text" },
    { key: "email", label: "Email", type: "email" },
    { key: "phone", label: "Phone Number", type: "tel" },
    { key: "team", label: "Team Name", type: "text" },
    { key: "password", label: "team code", type: "password" },
  ] as const;

  return (
    <section id="register" className="relative z-10 py-20 px-4">
      <motion.h2
        className="font-display text-3xl sm:text-4xl text-center mb-4 neon-text-red text-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        KOGANE REGISTRATION
      </motion.h2>
      <p className="text-center text-muted-foreground font-body mb-12 text-sm">
        Register through the Kogane to enter the Culling Game
      </p>

      <motion.div
        className="relative max-w-md mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative animate-float" style={{ filter: "drop-shadow(0 0 30px hsl(350 80% 45% / 0.6))" }}>
          <img
            src={koganeImg}
            alt="Kogane"
            className="w-full max-w-[420px] mx-auto"
            style={{
              filter: "blur(3px) drop-shadow(0 0 20px hsl(350 80% 45% / 0.5)) brightness(0.5)",
              maskImage: "radial-gradient(ellipse 90% 90% at center, black 60%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 90% 90% at center, black 60%, transparent 100%)",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[55%] mt-[15%]">
              <div className="flex flex-col gap-2">
                {fields.map((f) => (
                  <input
                    key={f.key}
                    type={f.type}
                    placeholder={f.label}
                    value={formData[f.key as keyof typeof formData]}
                    onChange={(e) => handleChange(f.key, e.target.value)}
                    required
                    className="w-full bg-card/80 border-b-2 border-primary/40 focus:border-primary text-foreground text-xs sm:text-sm px-2 py-2 outline-none transition-colors placeholder:text-foreground/50 font-body rounded-sm"
                    inputMode={f.type === "tel" ? "numeric" : undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default KoganeSection;
