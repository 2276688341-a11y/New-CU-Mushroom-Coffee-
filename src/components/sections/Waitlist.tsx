"use client";

import { useState, type FormEvent } from "react";
import { WAITLIST } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { motion, AnimatePresence } from "motion/react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wechat, setWechat] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!wechat.trim()) return;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Waitlist signup:", { email, phone, wechat });
    setStatus("success");
    setEmail("");
    setPhone("");
    setWechat("");
  };

  return (
    <section
      id="waitlist"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background"
    >
      <div className="max-w-md mx-auto text-center">
        <SectionHeading label={WAITLIST.heading} />

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-12 space-y-4"
            >
              <p className="text-lg md:text-xl font-light text-text-primary leading-relaxed">
                {WAITLIST.success}
              </p>
              <p className="text-sm font-light text-text-tertiary tracking-wider">
                {WAITLIST.disclaimer}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mt-10 text-base md:text-lg font-light text-text-primary/80 leading-relaxed max-w-sm mx-auto">
                {WAITLIST.description}
              </p>

              <form className="mt-14" onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* WeChat — primary */}
                  <input
                    type="text"
                    required
                    value={wechat}
                    onChange={(e) => setWechat(e.target.value)}
                    placeholder={WAITLIST.wechatPlaceholder}
                    className="w-full bg-transparent border-0 border-b border-border
                               px-2 py-4 text-base text-text-primary
                               placeholder:text-text-tertiary
                               font-light focus:border-text-secondary focus:outline-none
                               transition-colors duration-700 text-center"
                  />

                  {/* Email — secondary */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={WAITLIST.emailPlaceholder}
                    className="w-full bg-transparent border-0 border-b border-border
                               px-2 py-3 text-sm text-text-primary
                               placeholder:text-text-tertiary
                               font-light focus:border-text-secondary focus:outline-none
                               transition-colors duration-700 text-center"
                  />

                  {/* Phone — secondary */}
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={WAITLIST.phonePlaceholder}
                    className="w-full bg-transparent border-0 border-b border-border
                               px-2 py-3 text-sm text-text-primary
                               placeholder:text-text-tertiary
                               font-light focus:border-text-secondary focus:outline-none
                               transition-colors duration-700 text-center"
                  />
                </div>

                <div className="mt-12">
                  <CTAButton
                    type="submit"
                    label={
                      status === "submitting"
                        ? "Joining..."
                        : WAITLIST.button
                    }
                    disabled={status === "submitting"}
                  />
                </div>
              </form>

              {status === "error" && (
                <p className="mt-4 text-text-tertiary text-sm font-light">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="mt-10 text-text-tertiary text-xs font-light tracking-wider">
                {WAITLIST.disclaimer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
