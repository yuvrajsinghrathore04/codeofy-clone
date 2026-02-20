"use client";

import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Loader2, MessageSquare, User, AtSign, FileText, MessageCircle } from "lucide-react";

interface FormData { name: string; email: string; phone: string; subject: string; message: string; }
interface FormErrors { name?: string; email?: string; phone?: string; subject?: string; message?: string; }

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "info@codeofy.in", sub: "We reply within 24 hours", accent: "#e8956e", href: "mailto:info@codeofy.in" },
  { icon: Phone, label: "Call Us", value: "+91 6377385333", sub: "Mon-Sat, 9AM-7PM IST", accent: "#5bb8e0", href: "tel:+916377385333" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 6377385333", sub: "Chat with us instantly", accent: "#22c55e", href: "https://wa.me/916377385333?text=Hi%20Codeofy%2C%20I%20am%20interested%20in%20your%20services." },
  { icon: MapPin, label: "Visit Us", value: "Jaipur, Rajasthan, India", sub: "Pink City of India", accent: "#f472b6", href: "#" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9AM - 7PM", sub: "Sunday: By Appointment", accent: "#60a5fa", href: "#" },
];

const cardStyle = { background: "rgba(255,255,255,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)" };

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required"; else if (form.name.trim().length < 2) e.name = "Minimum 2 characters";
    if (!form.email.trim()) e.email = "Email is required"; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.phone && !/^[+]?[\d\s-]{10,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required"; else if (form.message.trim().length < 10) e.message = "Minimum 10 characters";
    setErrors(e); return Object.keys(e).length === 0;
  };

  const onChange = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { const { name, value } = ev.target; setForm((p) => ({ ...p, [name]: value })); if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined })); };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault(); if (!validate()) return;
    setSubmitting(true); setStatus("idle");
    try { await new Promise((r) => setTimeout(r, 2000)); setStatus("success"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); setTimeout(() => setStatus("idle"), 5000); }
    catch { setStatus("error"); setTimeout(() => setStatus("idle"), 5000); }
    finally { setSubmitting(false); }
  };

  const inputCls = (field: keyof FormErrors) => `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 border ${errors[field] ? "border-red-300 focus:border-red-400" : "border-white/60 focus:border-orange-300"}`;
  const inputSt = { background: "rgba(255,255,255,0.5)", color: "#1e293b" };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 2px 10px rgba(0,0,0,0.03)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#e8956e" }} />
            <span className="text-sm font-medium" style={{ color: "#475569" }}>Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6" style={{ color: "#1e293b" }}>
            Let&apos;s Build Something <span style={{ background: "linear-gradient(135deg, #e8956e, #5bb8e0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Amazing</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "#64748b" }}>Have a project in mind? Reach out and let&apos;s bring your vision to life.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((c, i) => (
              <motion.a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl group transition-all duration-300" style={cardStyle}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ background: `${c.accent}15`, border: `1px solid ${c.accent}25` }}>
                  <c.icon className="w-5 h-5" style={{ color: c.accent }} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: "#94a3b8" }}>{c.label}</p>
                  <p className="font-semibold text-sm" style={{ color: "#1e293b" }}>{c.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>{c.sub}</p>
                </div>
              </motion.a>
            ))}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="hidden lg:block overflow-hidden p-1 rounded-2xl" style={cardStyle}>
              <div className="w-full h-40 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(244,166,131,0.08), rgba(124,200,232,0.08))" }}>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2" style={{ color: "#e8956e" }} />
                  <p className="text-sm" style={{ color: "#475569" }}>Jaipur, Rajasthan</p>
                  <p className="text-xs" style={{ color: "#94a3b8" }}>India</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <div className="p-6 md:p-8 rounded-2xl" style={cardStyle}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f4a683, #7cc8e8)" }}>
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display" style={{ color: "#1e293b" }}>Send Us a Message</h3>
                  <p className="text-xs" style={{ color: "#94a3b8" }}>We&apos;ll get back to you within 24 hours</p>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "#475569" }}><User className="w-4 h-4" /> Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={onChange} placeholder="John Doe" className={inputCls("name")} style={inputSt} />
                    {errors.name && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</motion.p>}
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "#475569" }}><AtSign className="w-4 h-4" /> Email *</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} placeholder="john@example.com" className={inputCls("email")} style={inputSt} />
                    {errors.email && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</motion.p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "#475569" }}><Phone className="w-4 h-4" /> Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91 6377385333" className={inputCls("phone")} style={inputSt} />
                    {errors.phone && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</motion.p>}
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "#475569" }}><FileText className="w-4 h-4" /> Subject *</label>
                    <input type="text" name="subject" value={form.subject} onChange={onChange} placeholder="Project Inquiry" className={inputCls("subject")} style={inputSt} />
                    {errors.subject && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.subject}</motion.p>}
                  </div>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "#475569" }}><MessageSquare className="w-4 h-4" /> Message *</label>
                  <textarea name="message" value={form.message} onChange={onChange} rows={5} placeholder="Tell us about your project..." className={`${inputCls("message")} resize-none`} style={inputSt} />
                  {errors.message && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</motion.p>}
                </div>

                <motion.button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed" style={{ background: "linear-gradient(135deg, #f4a683, #7cc8e8)", boxShadow: "0 8px 30px rgba(244,166,131,0.3)" }} whileHover={!submitting ? { scale: 1.02, y: -1 } : {}} whileTap={!submitting ? { scale: 0.98 } : {}}>
                  {submitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Sending...</>) : (<><Send className="w-5 h-5" />Send Message</>)}
                </motion.button>

                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div><p className="text-emerald-700 font-medium text-sm">Message sent successfully!</p><p className="text-emerald-600 text-xs mt-0.5 opacity-70">We&apos;ll respond within 24 hours.</p></div>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <div><p className="text-red-700 font-medium text-sm">Failed to send message</p><p className="text-red-600 text-xs mt-0.5 opacity-70">Please try again or email info@codeofy.in</p></div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}