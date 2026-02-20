"use client";

import { motion } from "framer-motion";
import { Shield, Zap, HeartHandshake, Clock, Headphones, Award, RefreshCcw, Target } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast Delivery", desc: "Agile methodologies for on-time delivery without compromising quality.", accent: "#f59e0b" },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade security with encryption, audits, and OWASP compliance.", accent: "#10b981" },
  { icon: HeartHandshake, title: "Client-First Approach", desc: "Transparent communication, regular updates, and dedicated managers.", accent: "#f472b6" },
  { icon: Award, title: "Award-Winning Quality", desc: "Clean, scalable code following industry best practices with rigorous QA.", accent: "#60a5fa" },
  { icon: Headphones, title: "24/7 Premium Support", desc: "Round-the-clock technical support with dedicated post-delivery teams.", accent: "#c084fc" },
  { icon: RefreshCcw, title: "Continuous Improvement", desc: "Regular updates, performance optimization, and feature enhancements.", accent: "#5bb8e0" },
  { icon: Target, title: "Result-Driven Strategy", desc: "Data-backed decisions and growth-focused development strategies.", accent: "#e8956e" },
  { icon: Clock, title: "Flexible Engagement", desc: "Fixed-price, hourly, or dedicated team models for your needs.", accent: "#34d399" },
];

const cardStyle = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.7)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
};

export default function WhyChooseUs() {
  const scrollTo = (id: string) => { const el = document.querySelector(id); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: "smooth" }); } };

  return (
    <section id="why-us" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#e8956e" }} />
            <span className="text-sm font-medium" style={{ color: "#475569" }}>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6" style={{ color: "#1e293b" }}>
            Why Businesses <span style={{ background: "linear-gradient(135deg, #e8956e, #5bb8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Trust Us</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>Technical excellence combined with business acumen to deliver solutions that drive measurable growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.06 }} whileHover={{ y: -6, scale: 1.02 }} className="group">
              <div className="p-6 h-full text-center rounded-2xl relative overflow-hidden transition-all duration-500" style={cardStyle}>
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500" style={{ background: `${f.accent}12` }} />
                <div className="relative z-10">
                  <div className="flex justify-center mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{ background: `${f.accent}15`, border: `1px solid ${f.accent}25` }}>
                      <f.icon className="w-7 h-7" style={{ color: f.accent }} />
                    </div>
                  </div>
                  <h3 className="text-base font-bold font-display mb-3" style={{ color: "#1e293b" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-16 p-8 md:p-12 text-center rounded-2xl relative overflow-hidden" style={{ ...cardStyle, boxShadow: "0 8px 30px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)" }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(244,166,131,0.06), rgba(124,200,232,0.06), rgba(244,166,131,0.06))" }} />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4" style={{ color: "#1e293b" }}>
              Ready to Start Your <span style={{ background: "linear-gradient(135deg, #e8956e, #5bb8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Project?</span>
            </h3>
            <p className="mb-8 max-w-xl mx-auto" style={{ color: "#64748b" }}>Let&apos;s discuss how we can transform your idea into a successful digital product.</p>
            <motion.button onClick={() => scrollTo("#contact")} className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white" style={{ background: "linear-gradient(135deg, #f4a683, #7cc8e8)", boxShadow: "0 8px 30px rgba(244,166,131,0.3)" }} whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
              Schedule Free Consultation<Zap className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}