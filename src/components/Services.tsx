"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Search,
  ArrowUpRight,
  Layers,
  Database,
  Cloud,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom web applications built with React, Next.js, and modern frameworks for scalable solutions.", techs: ["React", "Next.js", "TypeScript", "Node.js"], accent: "#e8956e" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile apps for iOS and Android with beautiful interfaces and performance.", techs: ["React Native", "Flutter", "iOS", "Android"], accent: "#5bb8e0" },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Full-featured online stores with secure payments, inventory, and analytics dashboards.", techs: ["Shopify", "Stripe", "WooCommerce", "Custom"], accent: "#f4a683" },
  { icon: Search, title: "SEO & Marketing", desc: "Data-driven SEO strategies that boost visibility and drive organic traffic.", techs: ["SEO", "Analytics", "Content", "PPC"], accent: "#34d399" },
  { icon: Database, title: "Backend & APIs", desc: "Robust backend systems, RESTful APIs, and microservices architecture.", techs: ["Node.js", "Python", "PostgreSQL", "Redis"], accent: "#7cc8e8" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Cloud infrastructure, CI/CD pipelines, and DevOps automation.", techs: ["AWS", "Docker", "Kubernetes", "CI/CD"], accent: "#60a5fa" },
  { icon: Layers, title: "UI/UX Design", desc: "User-centered design with intuitive interfaces and design systems.", techs: ["Figma", "Prototyping", "Systems", "Testing"], accent: "#f472b6" },
  { icon: Globe, title: "Custom Software", desc: "Bespoke solutions tailored to your unique business processes.", techs: ["CRM", "ERP", "SaaS", "Automation"], accent: "#c084fc" },
];

const cardStyle = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.7)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#e8956e" }} />
            <span className="text-sm font-medium" style={{ color: "#475569" }}>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6" style={{ color: "#1e293b" }}>
            What We <span style={{ background: "linear-gradient(135deg, #e8956e, #5bb8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Offer</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>Comprehensive digital solutions crafted with cutting-edge technology to accelerate your business growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.07 }} whileHover={{ y: -8 }} className="group">
              <div className="p-6 h-full flex flex-col rounded-2xl transition-all duration-500" style={cardStyle}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: `${s.accent}18`, border: `1px solid ${s.accent}30` }}>
                  <s.icon className="w-6 h-6" style={{ color: s.accent }} />
                </div>
                <h3 className="text-lg font-bold font-display mb-3 flex items-center gap-2" style={{ color: "#1e293b" }}>
                  {s.title}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" style={{ color: "#94a3b8" }} />
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#64748b" }}>{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.techs.map((t, j) => (
                    <span key={j} className="px-2.5 py-1 text-xs font-medium rounded-lg" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.04)", color: "#64748b" }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}