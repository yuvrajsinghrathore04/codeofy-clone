"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Zap,
  Globe,
  Star,
  TrendingUp,
  Users,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "Projects Delivered", value: "200+" },
  { icon: Users, label: "Happy Clients", value: "150+" },
  { icon: Star, label: "Client Rating", value: "4.9/5" },
  { icon: Globe, label: "Countries Served", value: "15+" },
];

const floatingIcons = [
  { Icon: Code2, x: "8%", y: "22%", delay: 0 },
  { Icon: Zap, x: "87%", y: "18%", delay: 1 },
  { Icon: Globe, x: "78%", y: "68%", delay: 2 },
  { Icon: Star, x: "12%", y: "72%", delay: 0.5 },
  { Icon: Sparkles, x: "92%", y: "48%", delay: 1.5 },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/916377385333?text=Hi%20Codeofy%2C%20I%20am%20interested%20in%20your%20services.",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]">
        <div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(172,224,249,0.2) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center justify-center w-12 h-12 rounded-2xl"
          style={{
            left: item.x,
            top: item.y,
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.6)",
            color: "rgba(244,166,131,0.5)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5 + item.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon size={20} />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
          style={{
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 2px 15px rgba(0,0,0,0.04)",
          }}
        >
          <Sparkles className="w-4 h-4" style={{ color: "#e8956e" }} />
          <span className="text-sm font-medium" style={{ color: "#475569" }}>
            Transforming Ideas Into Digital Reality
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-display leading-tight mb-8"
        >
          <span className="block" style={{ color: "#1e293b" }}>
            We Build
          </span>
          <span
            className="block mt-2"
            style={{
              background: "linear-gradient(135deg, #e8956e, #5bb8e0, #f4a683)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Premium Software
          </span>
          <span className="block mt-2" style={{ color: "#1e293b" }}>
            Solutions
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ color: "#64748b" }}
        >
          From stunning web applications to powerful mobile solutions, we craft
          digital experiences that drive growth, engage users, and transform
          businesses worldwide.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => scrollTo("#contact")}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white w-full sm:w-auto"
            style={{
              background: "linear-gradient(135deg, #f4a683, #7cc8e8)",
              boxShadow:
                "0 8px 30px rgba(244,166,131,0.3), 0 4px 12px rgba(124,200,232,0.2)",
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <Sparkles className="w-5 h-5" />
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            onClick={openWhatsApp}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold w-full sm:w-auto"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.8)",
              backdropFilter: "blur(12px)",
              color: "#475569",
              boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <MessageCircle className="w-5 h-5" style={{ color: "#22c55e" }} />
            WhatsApp Us
          </motion.button>

          <motion.button
            onClick={() => scrollTo("#portfolio")}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold w-full sm:w-auto"
            style={{
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.7)",
              backdropFilter: "blur(12px)",
              color: "#475569",
              boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            View Portfolio
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          {[
            "React & Next.js Experts",
            "24/7 Support",
            "Agile Development",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm"
              style={{ color: "#64748b" }}
            >
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 rounded-2xl cursor-default group"
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <div className="flex items-center justify-center mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(244,166,131,0.15), rgba(124,200,232,0.15))",
                  }}
                >
                  <stat.icon
                    className="w-5 h-5"
                    style={{ color: "#e8956e" }}
                  />
                </div>
              </div>
              <div
                className="text-2xl md:text-3xl font-bold font-display mb-1"
                style={{
                  background:
                    "linear-gradient(135deg, #e8956e, #5bb8e0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs md:text-sm font-medium"
                style={{ color: "#94a3b8" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(255,241,235,0.8), transparent)",
        }}
      />
    </section>
  );
}