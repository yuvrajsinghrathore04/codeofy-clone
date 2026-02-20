"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

const testimonials = [
  { name: "Rajesh Kumar", role: "CEO & Founder", company: "TechVentures India", text: "Codeofy transformed our entire digital infrastructure. Their team delivered a scalable e-commerce platform that increased our online sales by 300%.", rating: 5, avatar: "RK", accent: "#e8956e" },
  { name: "Priya Sharma", role: "Product Manager", company: "InnovateTech Solutions", text: "Working with Codeofy was a game-changer. They built our SaaS platform from scratch and delivered ahead of schedule.", rating: 5, avatar: "PS", accent: "#5bb8e0" },
  { name: "Amit Patel", role: "CTO", company: "FinServe Global", text: "The mobile app Codeofy built has over 50K+ downloads and a 4.8 rating. Their React Native expertise is truly impressive.", rating: 5, avatar: "AP", accent: "#34d399" },
  { name: "Sneha Reddy", role: "Marketing Director", company: "GrowthPulse Digital", text: "From SEO to website redesign, Codeofy handled everything flawlessly. Our organic traffic increased by 250% in 6 months.", rating: 5, avatar: "SR", accent: "#f472b6" },
  { name: "Vikram Singh", role: "Founder", company: "EduLearn Platform", text: "Codeofy built our EdTech platform with live classes and analytics. The system handles 10K+ concurrent users seamlessly.", rating: 5, avatar: "VS", accent: "#60a5fa" },
  { name: "Meera Joshi", role: "Operations Head", company: "HealthFirst Clinics", text: "The telemedicine platform they developed has revolutionized patient care. Video consultations work flawlessly.", rating: 5, avatar: "MJ", accent: "#c084fc" },
];

const cardStyle = { background: "rgba(255,255,255,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)" };

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((p) => (p + 1) % testimonials.length);
  const prev = () => setIdx((p) => (p - 1 + testimonials.length) % testimonials.length);
  const visible = [0, 1, 2].map((o) => testimonials[(idx + o) % testimonials.length]);

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#5bb8e0" }} />
            <span className="text-sm font-medium" style={{ color: "#475569" }}>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6" style={{ color: "#1e293b" }}>
            What Our Clients <span style={{ background: "linear-gradient(135deg, #e8956e, #5bb8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Say</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>Hear from businesses that transformed their digital presence with us.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {visible.map((t, i) => (
              <motion.div key={`${idx}-${i}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, delay: i * 0.1 }} className={i === 1 ? "hidden md:block" : i === 2 ? "hidden lg:block" : ""}>
                <div className="p-6 md:p-8 h-full flex flex-col rounded-2xl transition-all duration-300" style={cardStyle}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6" style={{ background: `${t.accent}15`, border: `1px solid ${t.accent}25` }}>
                    <Quote className="w-5 h-5" style={{ color: t.accent }} />
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6 flex-1 italic" style={{ color: "#475569" }}>&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0" style={{ background: `${t.accent}15`, color: t.accent, border: `1px solid ${t.accent}25` }}>{t.avatar}</div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm truncate" style={{ color: "#1e293b" }}>{t.name}</h4>
                      <p className="text-xs truncate" style={{ color: "#64748b" }}>{t.role}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Building2 className="w-3 h-3 shrink-0" style={{ color: "#94a3b8" }} />
                        <span className="text-xs truncate" style={{ color: "#94a3b8" }}>{t.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <motion.button onClick={prev} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.7)", color: "#475569", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className="h-2 rounded-full transition-all duration-300" style={{ width: i === idx ? "32px" : "8px", background: i === idx ? "linear-gradient(135deg, #f4a683, #7cc8e8)" : "rgba(0,0,0,0.08)" }} />
            ))}
          </div>
          <motion.button onClick={next} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.7)", color: "#475569", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}