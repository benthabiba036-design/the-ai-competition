import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { hasSupabaseCredentials, supabase } from "@/lib/supabase";

interface SubmitSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    team: string;
    password: string;
  };
  selectedColony: number | null;
}

const SubmitSection = ({ formData, selectedColony }: SubmitSectionProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const webhookUrl = "https://n8n.abdeldjalil.cfd/webhook/ai-competition";

  const isFormComplete = Object.values(formData).every(
    (v) => v.trim() !== ""
  );
  const isEmailValid = emailRegex.test(formData.email.trim());
  const canSubmit = isFormComplete && isEmailValid && selectedColony !== null;

  const handleSubmit = async () => {
    if (!hasSupabaseCredentials || !supabase) {
      toast.error("Missing Supabase configuration. Add VITE_SUPABASE_URL and VITE_SUPABASE_KEY in a .env file.");
      return;
    }

    if (!isFormComplete) {
      toast.error("Please fill in all registration fields above!");
      return;
    }

    if (!isEmailValid) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (selectedColony === null) {
      toast.error("You must select a colony (project) before submitting!");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("users").insert([
      {
        ...formData,
        colony: selectedColony,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      toast.error("Error saving data!");
      return;
    }

    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          colony: selectedColony,
        }),
      });

      if (!webhookResponse.ok) {
        throw new Error(`Webhook request failed with status ${webhookResponse.status}`);
      }
    } catch (webhookError) {
      console.error(webhookError);
      toast.error("Saved to Supabase, but failed to send data to webhook.");
      return;
    }

    setSubmitted(true);
    toast.success("Registration complete! You have entered the Culling Game.");
  };

  if (submitted) {
    return (
      <section className="relative z-10 py-12 px-4">
        <motion.div
          className="max-w-md mx-auto text-center glass-panel rounded-lg p-8 neon-box-cyan"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-green-400 font-display text-lg">✓ REGISTERED</p>
          <p className="text-muted-foreground text-sm font-body mt-2">
            You have entered the Culling Game
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-12 px-4">
      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {(!canSubmit || !hasSupabaseCredentials) && (
          <p className="text-primary font-body mb-4 text-xs">
            {!hasSupabaseCredentials
              ? "⚠️ Supabase env vars are missing. Submission will fail until they are added."
              : isFormComplete && !isEmailValid
                ? "⚠️ Please enter a valid email address"
                : "⚠️ Fill all fields and select a colony to submit"}
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="font-display text-base tracking-widest px-12 py-4 rounded-lg border border-primary/50 text-white hover:bg-primary/10 transition-all duration-300 neon-box-cyan disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "SUBMITTING..." : "SUBMIT REGISTRATION"}
        </button>
      </motion.div>
    </section>
  );
};

export default SubmitSection;