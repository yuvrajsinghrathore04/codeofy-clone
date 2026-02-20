import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Base gradient background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
        }}
      />

      {/* Soft dot pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating orbs */}
      <div
        className="fixed top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none animate-float z-0"
        style={{ background: "rgba(172,224,249,0.3)" }}
      />
      <div
        className="fixed top-3/4 -right-40 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none animate-floatslow z-0"
        style={{ background: "rgba(255,241,235,0.5)" }}
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none animate-floatslower z-0"
        style={{ background: "rgba(244,166,131,0.12)" }}
      />

      {/* Extra warm glow bottom */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[400px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(255,241,235,0.8) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}