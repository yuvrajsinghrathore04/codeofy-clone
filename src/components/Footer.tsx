"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, ArrowUpRight, Linkedin, Instagram, MessageCircle, Mail, Phone, MapPin, ChevronUp, Github, Twitter } from "lucide-react";

const footerLinks = {
  Company: [{ name: "About Us", href: "#home" }, { name: "Our Team", href: "#why-us" }, { name: "Careers", href: "#contact" }, { name: "Blog", href: "#home" }, { name: "Press Kit", href: "#home" }],
  Services: [{ name: "Web Development", href: "#services" }, { name: "Mobile Apps", href: "#services" }, { name: "UI/UX Design", href: "#services" }, { name: "Cloud Solutions", href: "#services" }, { name: "SEO Services", href: "#services" }],
  Resources: [{ name: "Documentation", href: "#home" }, { name: "Case Studies", href: "#portfolio" }, { name: "Testimonials", href: "#testimonials" }, { name: "FAQ", href: "#home" }, { name: "Support", href: "#contact" }],
  Legal: [{ name: "Privacy Policy", href: "#home" }, { name: "Terms of Service", href: "#home" }, { name: "Cookie Policy", href: "#home" }, { name: "Disclaimer", href: "#home" }],
};

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/codeofy-tech/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/codeofy.in?igsh=Y2c5dGEwaHRqY2hm" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/916377385333?text=Hi%20Codeofy%2C%20I%20am%20interested%20in%20your%20services." },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

const glassSt = { background: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)" };
const cardSt = { background: "rgba(255,255,255,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)" };

export default function Footer() {
  const [email, setEmail] = useState("");
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (href: string) => { const el = document.querySelector(href); if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: "smooth" }); } };
  const subscribe = () => { if (email.trim()) { alert(`Thank you for subscribing with: ${email}`); setEmail(""); } };

  return (
    <footer className="relative pt-20 pb-8" style={{ borderTop: "1px solid rgba(0,0,0,0.04)" }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <button onClick={scrollToTop} className="flex items-center gap-2.5 mb-6 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f4a683, #7cc8e8)", boxShadow: "0 4px 15px rgba(244,166,131,0.35)" }}>
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display">
                <span style={{ color: "#1e293b" }}>Code</span>
                <span style={{ background: "linear-gradient(135deg, #e8956e, #5bb8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ofy</span>
              </span>
            </button>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: "#64748b" }}>Transforming ideas into powerful digital solutions. We build scalable, beautiful, and high-performance applications.</p>
            <div className="space-y-3">
              <a href="mailto:info@codeofy.in" className="flex items-center gap-3 text-sm transition-colors group hover:text-slate-800" style={{ color: "#64748b" }}>
                <Mail className="w-4 h-4" style={{ color: "#e8956e" }} />info@codeofy.in<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="tel:+916377385333" className="flex items-center gap-3 text-sm transition-colors group hover:text-slate-800" style={{ color: "#64748b" }}>
                <Phone className="w-4 h-4" style={{ color: "#5bb8e0" }} />+91 6377385333<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://wa.me/916377385333?text=Hi%20Codeofy%2C%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm transition-colors group hover:text-slate-800" style={{ color: "#64748b" }}>
                <MessageCircle className="w-4 h-4" style={{ color: "#22c55e" }} />WhatsApp Us<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3 text-sm" style={{ color: "#64748b" }}>
                <MapPin className="w-4 h-4" style={{ color: "#e8956e" }} />Jaipur, Rajasthan, India
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([cat, items]) => (
              <div key={cat}>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: "#1e293b" }}>{cat}</h4>
                <ul className="space-y-3">
                  {items.map((link) => (
                    <li key={link.name}><button onClick={() => scrollTo(link.href)} className="text-sm transition-colors flex items-center gap-1 group hover:text-slate-800" style={{ color: "#64748b" }}>{link.name}<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></button></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 md:p-8 mb-12" style={cardSt}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold font-display mb-1" style={{ color: "#1e293b" }}>Subscribe to our Newsletter</h3>
              <p className="text-sm" style={{ color: "#64748b" }}>Get the latest updates and insights delivered to your inbox.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 md:w-64 px-4 py-3 rounded-xl text-sm outline-none transition-all border" style={{ background: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.6)", color: "#1e293b" }} onKeyDown={(e) => e.key === "Enter" && subscribe()} />
              <motion.button onClick={subscribe} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-xl text-sm font-semibold text-white shrink-0" style={{ background: "linear-gradient(135deg, #f4a683, #7cc8e8)", boxShadow: "0 4px 15px rgba(244,166,131,0.3)" }}>Subscribe</motion.button>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.04)" }}>
          <div className="flex items-center gap-1 text-sm flex-wrap justify-center" style={{ color: "#94a3b8" }}>
            <span>© 2025 Codeofy. All rights reserved. Built with passion and innovation.</span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={s.label} whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 hover:text-slate-700" style={{ ...glassSt, color: "#64748b", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                <s.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          <motion.button onClick={scrollToTop} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg, #f4a683, #7cc8e8)", boxShadow: "0 4px 15px rgba(244,166,131,0.35)" }}>
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}