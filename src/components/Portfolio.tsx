"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowRight } from "lucide-react";

const projects = [
  { title: "FinTech Dashboard", cat: "Web Application", desc: "A comprehensive financial dashboard with real-time analytics, portfolio tracking, and automated reporting.", bg: "linear-gradient(135deg, #f4a683, #e8956e)", techs: ["Next.js", "TypeScript", "Tailwind", "Prisma"], users: "10K+", rating: "4.9" },
  { title: "E-Commerce Platform", cat: "Full Stack", desc: "Multi-vendor marketplace with AI recommendations, inventory management, and payment integration.", bg: "linear-gradient(135deg, #7cc8e8, #5bb8e0)", techs: ["React", "Node.js", "MongoDB", "Stripe"], users: "50K+", rating: "4.8" },
  { title: "HealthCare App", cat: "Mobile App", desc: "Telemedicine platform with video consultations, appointment scheduling, and health tracking.", bg: "linear-gradient(135deg, #34d399, #10b981)", techs: ["React Native", "Firebase", "WebRTC"], users: "25K+", rating: "4.7" },
  { title: "EdTech Platform", cat: "SaaS", desc: "Interactive LMS with live classes, progress tracking, AI assessments, and gamified learning.", bg: "linear-gradient(135deg, #60a5fa, #3b82f6)", techs: ["Next.js", "Python", "AWS", "GraphQL"], users: "30K+", rating: "4.9" },
  { title: "Real Estate Portal", cat: "Web Application", desc: "Property listing platform with virtual tours, AI price estimation, and mortgage calculator.", bg: "linear-gradient(135deg, #f472b6, #ec4899)", techs: ["Vue.js", "Django", "PostgreSQL", "MapBox"], users: "15K+", rating: "4.6" },
  { title: "Social Analytics", cat: "Dashboard", desc: "Unified social media management with sentiment analysis, competitor tracking, and reporting.", bg: "linear-gradient(135deg, #c084fc, #a855f7)", techs: ["React", "Python", "TensorFlow", "D3.js"], users: "8K+", rating: "4.8" },
];

const cardStyle = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.7)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#5bb8e0" }} />
            <span className="text-sm font-medium" style={{ color: "#475569" }}>Our Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6" style={{ color: "#1e293b" }}>
            Featured <span style={{ background: "linear-gradient(135deg, #e8956e, #5bb8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>Explore our diverse portfolio of successful projects delivered across industries.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6 }} className="group">
              <div className="overflow-hidden h-full flex flex-col rounded-2xl transition-all duration-500" style={cardStyle}>
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ background: p.bg }} />
                  <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.1)" }} />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-xl flex items-center justify-center text-white" style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.4)" }}><ExternalLink className="w-5 h-5" /></motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-11 h-11 rounded-xl flex items-center justify-center text-white" style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.4)" }}><Github className="w-5 h-5" /></motion.button>
                  </div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 text-xs font-semibold rounded-full text-white" style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}>{p.cat}</span></div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.15)", backdropFilter: "blur(12px)" }}><Star className="w-3 h-3 text-yellow-300 fill-yellow-300" /><span className="text-xs font-medium text-white">{p.rating}</span></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold font-display mb-2" style={{ color: "#1e293b" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#64748b" }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.techs.map((t, j) => (<span key={j} className="px-2.5 py-1 text-xs font-medium rounded-lg" style={{ background: "rgba(244,166,131,0.1)", border: "1px solid rgba(244,166,131,0.2)", color: "#c2713e" }}>{t}</span>))}
                  </div>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                    <span className="text-xs" style={{ color: "#94a3b8" }}>{p.users} Active Users</span>
                    <button className="flex items-center gap-1 text-sm font-medium transition-colors group/btn" style={{ color: "#e8956e" }}>View Details<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}