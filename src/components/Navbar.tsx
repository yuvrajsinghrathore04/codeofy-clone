"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, ChevronRight, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const scrollTo = useCallback((href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.65)"
            : "rgba(255,255,255,0.3)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.06)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2.5 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #f4a683, #7cc8e8)",
                  boxShadow: "0 4px 15px rgba(244,166,131,0.35)",
                }}
              >
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display">
                <span style={{ color: "#1e293b" }}>Code</span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #e8956e, #5bb8e0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ofy
                </span>
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:text-slate-900"
                  style={{
                    color:
                      active === link.href.slice(1) ? "#0f172a" : "#64748b",
                    background:
                      active === link.href.slice(1)
                        ? "rgba(255,255,255,0.6)"
                        : "transparent",
                    border:
                      active === link.href.slice(1)
                        ? "1px solid rgba(0,0,0,0.06)"
                        : "1px solid transparent",
                    boxShadow:
                      active === link.href.slice(1)
                        ? "0 2px 8px rgba(0,0,0,0.04)"
                        : "none",
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <motion.button
              onClick={() => scrollTo("#contact")}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-2xl text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #f4a683, #7cc8e8)",
                boxShadow:
                  "0 4px 20px rgba(244,166,131,0.3), 0 2px 8px rgba(124,200,232,0.2)",
              }}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles className="w-4 h-4" />
              Get Started
              <ChevronRight className="w-4 h-4" />
            </motion.button>

            <button
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(0,0,0,0.06)",
                color: "#475569",
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{
                background: "rgba(0,0,0,0.15)",
                backdropFilter: "blur(4px)",
              }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden"
              style={{
                background: "rgba(255,248,244,0.97)",
                backdropFilter: "blur(40px)",
                borderLeft: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "-10px 0 40px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex flex-col h-full">
                <div
                  className="flex items-center justify-between p-6"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, #f4a683, #7cc8e8)",
                      }}
                    >
                      <Code2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold font-display">
                      <span style={{ color: "#1e293b" }}>Code</span>
                      <span
                        style={{
                          background:
                            "linear-gradient(135deg, #e8956e, #5bb8e0)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        ofy
                      </span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      color: "#475569",
                    }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => scrollTo(link.href)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-medium transition-all"
                      style={{
                        color:
                          active === link.href.slice(1)
                            ? "#0f172a"
                            : "#64748b",
                        background:
                          active === link.href.slice(1)
                            ? "rgba(255,255,255,0.7)"
                            : "transparent",
                      }}
                    >
                      <ChevronRight className="w-4 h-4" />
                      {link.name}
                    </motion.button>
                  ))}
                </div>

                <div
                  className="p-6"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #f4a683, #7cc8e8)",
                      boxShadow: "0 4px 20px rgba(244,166,131,0.3)",
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}