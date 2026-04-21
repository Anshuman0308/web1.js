import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import img1 from "./Images/photo_2026-04-20_23-57-49.jpg";
import img2 from "./Images/photo_2026-04-20_23-57-51.jpg";
import img3 from "./Images/photo_2026-04-20_23-57-52.jpg";
import img4 from "./Images/photo_2026-04-20_23-57-54.jpg";
import img5 from "./Images/photo_2026-04-20_23-57-55.jpg";
import img6 from "./Images/photo_2026-04-20_23-57-56.jpg";
import img7 from "./Images/photo_2026-04-20_23-57-57.jpg";
import img8 from "./Images/photo_2026-04-20_23-57-59.jpg";
import img9 from "./Images/photo_2026-04-20_23-58-00.jpg";
import img10 from "./Images/photo_2026-04-20_23-58-01.jpg";
import img11 from "./Images/photo_2026-04-20_23-58-02.jpg";
import img12 from "./Images/photo_2026-04-20_23-58-03.jpg";

const CONTACT_INFO = {
  phones: ["+91 89558 80878"],
  email: "contact@backtotradition.com",
  address: "Pearl Academy, Rajouri Garden\nNew Delhi, India",
};

        const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Contact"];

        const SERVICES = [
        {
num: "01",
title: "Consultation",
desc: "We visit your space, understand your vision, and craft a personalized plan to infuse traditional charm into your modern home — all at an honest, transparent cost.",
icon: "🏛",
        },
        {
num: "02",
title: "Design Phase",
desc: "We design homes that reflect a person’s culture, lifestyle, and memories—so instead of following trends, every space feels deeply personal, intentional, and truly their own",
icon: "✏️",
        },
        {
num: "03",
title: "Implementation",
desc: "Skilled artisans execute each detail — from carved pillars and brass fittings to hand-laid tile and traditional frescoes — with zero compromise on craftsmanship.",
icon: "🔨",
        },
        {
num: "04",
title: "Custom Woodwork",
desc: "Sheesham, teak, and mango wood carved into jharokha windows, chowki tables, and ornate door frames that carry the soul of Indian tradition.",
icon: "🪵",
        },
        {
num: "05",
title: "Interior Design",
desc: "Curating spaces with handwoven textiles, antique brass lamps, block-printed drapes, and artisan furniture that tell a story in every corner.",
icon: "🪔",


        },

        ];

        const TEAM = [
        { name: "Nikunj Agarwal", initials: "NA", color: "#7C5C3E", img: img9 },
        { name: "Harsha Panjwani", initials: "HP", color: "#4A6741", img: img10 },
        { name: "Vishwani Bhutani", initials: "VB", color: "#5A4E7A", img: img11 },
        { name: "Jigyasa Kapoor", initials: "JK", color: "#7A4A4A", img: img12 },
        { name: "Khushi Aggarwal", initials: "KA", color: "#6A4A5A" },
        ];

        const STATS = [
        { value: "500+", label: "Homes Transformed" },
        { value: "9+", label: "Years in Business" },
        { value: "4.8★", label: "Google Rating" },
        { value: "8", label: "Expert Members" },
        ];

        const PORTFOLIO_ITEMS = [
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 },
        ];

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
    useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
    return [ref, visible];
}

function RevealSection({ children, delay = 0, style = {} }) {
        const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`, ...style }}>
        {children}
    </div>
        );
        }

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id) => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id.charAt(0).toUpperCase() + id.slice(1));
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
            e.preventDefault();
    emailjs.send(
      'service_vqi5atq',
      'template_iwkdu8h',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      'YOruZJnwHwJ7XubmY'
    ).then(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }).catch((err) => {
      console.error('EmailJS error:', err);
      alert('Failed to send message. Please try again.');
    });
  };

    return (
            <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#FDFAF6", color: "#2C2018", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Crimson+Pro:wght@300;400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-thumb { background: #C4956A; border-radius: 3px; }
        .nav-link { cursor: pointer; transition: color 0.2s; font-family: 'Crimson Pro', serif; font-size: 15px; letter-spacing: 0.5px; }
        .nav-link:hover { color: #B07340; }
        .btn-primary { background: #8B5E3C; color: #FDFAF6; border: none; border-radius: 2px; padding: 14px 32px; font-family: 'Crimson Pro', serif; font-size: 15px; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: background 0.2s, transform 0.15s; }
        .btn-primary:hover { background: #7A4E2E; transform: translateY(-1px); }
        .btn-outline { background: transparent; color: #8B5E3C; border: 1.5px solid #8B5E3C; border-radius: 2px; padding: 12px 28px; font-family: 'Crimson Pro', serif; font-size: 14px; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }
        .btn-outline:hover { background: #8B5E3C; color: #FDFAF6; }
        .service-card { background: #fff; border: 1px solid #E8DDD0; border-radius: 4px; padding: 32px 28px; transition: box-shadow 0.2s, transform 0.2s; cursor: default; }
        .service-card:hover { box-shadow: 0 8px 32px rgba(139,94,60,0.12); transform: translateY(-4px); }
        .portfolio-card { border-radius: 4px; overflow: hidden; cursor: pointer; transition: transform 0.2s; position: relative; height: 220px; }
        .portfolio-card:hover { transform: scale(1.02); }
        .portfolio-card .overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 16px 20px; background: linear-gradient(to top, rgba(30,16,6,0.85), transparent); color: white; }
        .team-card { background: #fff; border: 1px solid #E8DDD0; border-radius: 4px; padding: 28px 20px; text-align: center; transition: box-shadow 0.2s; }
        .team-card:hover { box-shadow: 0 6px 24px rgba(139,94,60,0.1); }
        .form-input { width: 100%; padding: 13px 16px; border: 1.5px solid #D4C5B0; border-radius: 2px; background: #fff; font-family: 'Crimson Pro', serif; font-size: 15px; color: #2C2018; outline: none; transition: border-color 0.2s; }
        .form-input:focus { border-color: #8B5E3C; }
        .ornament { color: #C4956A; font-size: 24px; letter-spacing: 8px; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-crimson { font-family: 'Crimson Pro', serif; }
        .text-dark { color: #2C2018; }
        .text-brown { color: #5C4033; }
        .text-gold { color: #C4956A; }
        .text-accent { color: #8B5E3C; }
        .text-light { color: #FDFAF6; }
        .text-muted { color: #D4B99A; }
        .label-caps { font-family: 'Crimson Pro', serif; font-size: 13px; letter-spacing: 4px; color: #8B5E3C; text-transform: uppercase; }
        .section-title { font-family: 'Playfair Display', serif; font-size: 44px; font-weight: 700; color: #2C2018; }
      `}</style>

            {/* NAVBAR */}
            <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(253,250,246,0.96)", backdropFilter: "blur(8px)", borderBottom: "1px solid #E8DDD0", padding: "0 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div onClick={() => scrollTo("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "#8B5E3C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#FDFAF6", fontSize: 16 }}>⌂</span>
            </div>
            <span className="font-playfair text-dark" style={{ fontSize: 18, fontWeight: 700, letterSpacing: 0.5 }}>Back to Tradition</span>
            </div>
            <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
    {NAV_LINKS.map(link => (
            <span key={link} className="nav-link" onClick={() => scrollTo(link.toLowerCase())} style={{ color: activeNav === link ? "#8B5E3C" : "#5C4033", fontWeight: activeNav === link ? 600 : 400, borderBottom: activeNav === link ? "2px solid #C4956A" : "none", paddingBottom: 2 }}>
        {link}
              </span>
            ))}
            <button className="btn-primary" style={{ padding: "10px 24px", fontSize: 13 }} onClick={() => scrollTo("contact")}>Get Started</button>
            </div>
            </div>
            </nav>

            {/* HERO */}
            <section id="home" style={{ minHeight: "92vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #2C1810 0%, #5C3A22 45%, #8B6B4A 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18 }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(45deg, rgba(196,149,106,0.04) 0px, rgba(196,149,106,0.04) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(-45deg, rgba(196,149,106,0.04) 0px, rgba(196,149,106,0.04) 1px, transparent 1px, transparent 40px)` }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <RevealSection>
            <p className="label-caps" style={{ color: "#C4956A", marginBottom: 20 }}>Tradition Awaits</p>
            <h1 className="font-playfair text-light" style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.12, marginBottom: 24 }}>
    Revitalize Your<br />
            <span style={{ color: "#C4956A" }}>Modern Home's</span><br />
    Aesthetic
            </h1>
            <p className="font-crimson text-muted" style={{ fontSize: 19, lineHeight: 1.7, marginBottom: 40, maxWidth: 460 }}>
    Add a touch of tradition to your modern home with our affordable solutions and expert craftsmanship. Where classic beauty meets contemporary living.
              </p>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <button className="btn-primary" onClick={() => scrollTo("contact")}>Get Started</button>
            <span className="font-crimson text-gold" style={{ fontSize: 15 }}>Call: {CONTACT_INFO.phones[0]}</span>
            </div>
            </RevealSection>
            </div>
            <RevealSection delay={200}>
            <div style={{ background: "rgba(196,149,106,0.08)", border: "1px solid rgba(196,149,106,0.2)", borderRadius: 4, padding: 32 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(196,149,106,0.15)" }}>
    {STATS.map((s, i) => (
            <div key={i} style={{ background: "rgba(44,24,16,0.7)", padding: "32px 24px", textAlign: "center" }}>
                    <div className="font-playfair text-gold" style={{ fontSize: 36, fontWeight: 700, marginBottom: 6 }}>{s.value}</div>
            <div className="font-crimson text-muted" style={{ fontSize: 14, letterSpacing: 0.5 }}>{s.label}</div>
            </div>
                ))}
              </div>
            </div>
            </RevealSection>
            </div>
            <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom, transparent, #C4956A)", margin: "0 auto 8px" }} />
          <div className="font-crimson text-gold" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>Scroll</div>
            </div>
            </section>

            {/* ABOUT */}
            <section id="about" style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p className="ornament">— ✦ —</p>
            <p className="label-caps" style={{ margin: "16px 0 12px" }}>About Us</p>
            <h2 className="section-title" style={{ marginBottom: 20 }}>Crafting Tradition in<br />Modern Spaces</h2>
            </div>
            </RevealSection>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start", marginBottom: 80 }}>
          <RevealSection>
            <div>
            <img src={img2} alt="Our Journey" style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 4, marginBottom: 24 }} />
            <p className="label-caps" style={{ marginBottom: 16 }}>Our Journey</p>
            <h3 className="font-playfair text-dark" style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>Bringing Traditional Charm to Modern Homes</h3>
            <p className="font-crimson text-brown" style={{ fontSize: 17, lineHeight: 1.8, marginBottom: 16 }}>
    At Backtotradition, we specialize in infusing modern houses with timeless traditional elements. Our approach has transformed countless homes, proving that classic beauty can harmonize with contemporary design — all at minimal rates.
              </p>
            <p className="font-crimson text-brown" style={{ fontSize: 17, lineHeight: 1.8 }}>
    Founded by a passionate team of designers, Backtotradition was born from a desire to revive the art of traditional architecture in modern living spaces. Through dedication and creativity, we reconnect homeowners with the charm of tradition without breaking the bank.
            </p>
            </div>
            </RevealSection>
            <RevealSection delay={150}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
    {[
        { title: "Core Values", desc: "We believe in integrity, creativity, and affordability. Our commitment to traditional craftsmanship drives our mission to deliver exquisite, timeless designs that resonate with every homeowner's heart.", color: "#F5EDE4" },
        { title: "Our Mission", desc: "To enrich modern homes with the timeless beauty of tradition while ensuring exceptional quality and value, ultimately creating unique living spaces that stand the test of time.", color: "#EBF0E8" },
        { title: "Our Methodology", desc: "We analyze each space meticulously, ensuring our traditional enhancements harmonize seamlessly with modern aesthetics. Our process values clients' visions while respecting craftsmanship.", color: "#E8EAF0" },
        { title: "Affordability", desc: "We believe luxury of tradition shouldn't come with a luxury price tag. Our streamlined process and artisan partnerships keep costs low without ever compromising quality.", color: "#F0EBE8" },
              ].map((item, i) => (
            <div key={i} style={{ background: item.color, border: "1px solid #E8DDD0", borderRadius: 4, padding: 24 }}>
                  <div className="font-playfair text-dark" style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{item.title}</div>
            <p className="font-crimson text-brown" style={{ fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
              ))}
            </div>
            </RevealSection>
            </div>

            <RevealSection>
            <div style={{ background: "#2C1810", borderRadius: 4, padding: "48px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
            <div>
            <p className="label-caps" style={{ color: "#C4956A", marginBottom: 12 }}>Embrace Traditional Charm</p>
            <h3 className="font-playfair text-light" style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.3 }}>Join Us in Reviving Traditional<br />Elegance Today</h3>
            </div>
            <button className="btn-primary" style={{ whiteSpace: "nowrap", background: "#C4956A" }} onClick={() => scrollTo("contact")}>Start Consultation</button>
            </div>
            </RevealSection>
            </section>

            {/* SERVICES */}
            <section id="services" style={{ background: "#F5EDE4", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <p className="ornament">— ✦ —</p>
            <p className="label-caps" style={{ margin: "16px 0 12px" }}>Our Services</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Enhancing Modern Homes with<br />Timeless Traditions</h2>
            <p className="font-crimson text-brown" style={{ fontSize: 18, maxWidth: 560, margin: "0 auto" }}>Every service is designed to add authentic character to your space, backed by skilled artisans and transparent pricing.</p>
            </div>
            </RevealSection>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
    {SERVICES.map((s, i) => (
            <RevealSection key={i} delay={i * 80}>
            <div className="service-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#E8DDD0" }}>{s.num}</span>
            <span style={{ fontSize: 28 }}>{s.icon}</span>
            </div>
            <h3 className="font-playfair text-dark" style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
            <p className="font-crimson text-brown" style={{ fontSize: 15, lineHeight: 1.7 }}>{s.desc}</p>
            </div>
            </RevealSection>
            ))}
          </div>

            <RevealSection delay={200}>
            <div style={{ marginTop: 56, background: "#fff", border: "1px solid #E8DDD0", borderRadius: 4, padding: "40px 48px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 32 }}>
    {[
        { icon: "✓", title: "Affordable Solutions", desc: "High-quality traditional designs at minimalistic rates, making elegance accessible for everyone." },
        { icon: "⚒", title: "Expert Craftsmanship", desc: "Our skilled artisans ensure every detail reflects quality and dedication in preserving tradition." },
        { icon: "◎", title: "Customized Designs", desc: "We tailor our services to meet your unique needs, creating spaces that truly feel like home." },
        { icon: "♻", title: "Sustainability Focus", desc: "We incorporate sustainable practices into our services, ensuring a positive impact on the environment." },
              ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ width: 44, height: 44, background: "#F5EDE4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 18, color: "#8B5E3C" }}>{item.icon}</div>
            <div className="font-playfair text-dark" style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{item.title}</div>
            <p className="font-crimson text-brown" style={{ fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
              ))}
            </div>
            </RevealSection>
            </div>
            </section>

            {/* PORTFOLIO */}
            <section id="portfolio" style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p className="ornament">— ✦ —</p>
            <p className="label-caps" style={{ margin: "16px 0 12px" }}>Our Work</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Showcasing Our Unique Projects</h2>
            <p className="font-crimson text-brown" style={{ fontSize: 18, maxWidth: 500, margin: "0 auto" }}>Each project is a testament to our commitment to blending tradition with modern living spaces.</p>
            </div>
            </RevealSection>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 72 }}>
    {PORTFOLIO_ITEMS.map((item, i) => (
            <RevealSection key={i} delay={i * 80}>
            <div className="portfolio-card" style={{ backgroundImage: `url(${item.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            </div>
            </RevealSection>
          ))}
        </div>

            {/* TEAM */}
            <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="label-caps" style={{ marginBottom: 12 }}>Get to Know Us</p>
            <h3 className="font-playfair text-dark" style={{ fontSize: 36, fontWeight: 700 }}>Meet Our Passionate Team</h3>
            </div>
            </RevealSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
    {TEAM.map((m, i) => (
            <RevealSection key={i} delay={i * 80}>
            <div className="team-card">
            <div className="font-playfair text-dark" style={{ fontSize: 16, fontWeight: 700 }}>{m.name}</div>
            </div>
            </RevealSection>
          ))}
        </div>
            </section>

            {/* TESTIMONIAL BAND */}
            <section style={{ background: "#2C1810", padding: "72px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <RevealSection>
            <div className="text-gold" style={{ fontSize: 48, marginBottom: 20, fontFamily: "Georgia, serif" }}>"</div>
            <p className="font-playfair text-light" style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>
    Backtotradition transformed my home beautifully. Their attention to detail exceeded my expectations and brought my vision to life. I highly recommend their services to anyone wanting a traditional touch in their modern home.
            </p>
            <div className="font-crimson text-gold" style={{ fontSize: 14, letterSpacing: 2, textTransform: "uppercase" }}>— Emma Foster, Designer</div>
            </RevealSection>
            </div>
            </section>

            {/* CONTACT */}
            <section id="contact" style={{ padding: "100px 40px", background: "#FDFAF6" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <RevealSection>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <p className="ornament">— ✦ —</p>
            <p className="label-caps" style={{ margin: "16px 0 12px" }}>Contact</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>We'd Love to Hear from You</h2>
            <p className="font-crimson text-brown" style={{ fontSize: 18, maxWidth: 500, margin: "0 auto" }}>Reach out for inquiries, quotes, or to learn more about how we can add a traditional touch to your home.</p>
            </div>
            </RevealSection>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
            <RevealSection>
            <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <input className="form-input" placeholder="Your Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
            <input className="form-input" type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
            <input className="form-input" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  <textarea className="form-input" placeholder="Tell us about your renovation vision..." rows={5} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{ resize: "vertical" }} required />
            <button type="submit" className="btn-primary" style={{ width: "100%", fontSize: 14 }}>
    {submitted ? "✓ Message Sent!" : "Send Message"}
                  </button>
            </form>
            </div>
            </RevealSection>

            <RevealSection delay={150}>
            <div>
            <div style={{ background: "#F5EDE4", border: "1px solid #E8DDD0", borderRadius: 4, padding: "40px 36px" }}>
                  <p className="label-caps" style={{ marginBottom: 24 }}>Connect With Us</p>
            {[
                    { icon: "📞", label: "Phone", value: CONTACT_INFO.phones.join("\n") },
    { icon: "✉", label: "Email", value: CONTACT_INFO.email },
    { icon: "📍", label: "Office Address", value: CONTACT_INFO.address },
                  ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 16, marginBottom: 28 }}>
                      <div style={{ width: 40, height: 40, background: "#8B5E3C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{item.icon}</div>
            <div>
            <div className="font-crimson text-accent" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
            <div className="font-playfair text-dark" style={{ fontSize: 15, whiteSpace: "pre-line" }}>{item.value}</div>
            </div>
            </div>
                  ))}
                  <div style={{ borderTop: "1px solid #E8DDD0", paddingTop: 24, marginTop: 8 }}>
                    <div className="font-crimson text-accent" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Social Media</div>
            <div style={{ display: "flex", gap: 12 }}>
    {["f", "𝕏", "in", "▶"].map((s, i) => (
            <div key={i} style={{ width: 36, height: 36, background: "#2C1810", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#C4956A", cursor: "pointer" }}>{s}</div>
                      ))}
                    </div>
            </div>
            </div>
            </div>
            </RevealSection>
            </div>
            </div>
            </section>

            {/* FOOTER */}
            <footer style={{ background: "#1A0E08", padding: "48px 40px 32px", color: "#D4B99A" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
            <div className="font-playfair text-light" style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Back to Tradition</div>
            <p className="font-crimson" style={{ fontSize: 14, lineHeight: 1.8, color: "#A08060" }}>Specializing in blending modern architecture with timeless design, offering affordable services to enhance your home's uniqueness.</p>
            </div>
            {[
                    { title: "Pages", links: ["Home", "About", "Services", "Portfolio", "Contact"] },
    { title: "Services", links: ["Consultation", "Design Phase", "Implementation", "Custom Woodwork"] },
    { title: "Connect", links: [CONTACT_INFO.phones[0], CONTACT_INFO.email, "Pearl Academy, Rajouri Garden", "New Delhi, India"] },
            ].map((col, i) => (
            <div key={i}>
            <div className="font-crimson text-gold" style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>{col.title}</div>
            {col.links.map((l, j) => (
                    <div key={j} className="font-crimson" style={{ fontSize: 14, color: "#A08060", marginBottom: 8, cursor: i === 0 ? "pointer" : "default" }}
    onClick={i === 0 ? () => scrollTo(l.toLowerCase()) : undefined}>{l}</div>
                ))}
              </div>
            ))}
          </div>
            <div style={{ borderTop: "1px solid rgba(196,149,106,0.15)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="font-crimson" style={{ fontSize: 13, color: "#6B5040" }}>Copyright © 2026 Back to Tradition. All rights reserved.</span>
            <span className="ornament" style={{ fontSize: 16, letterSpacing: 6 }}>✦ ✦ ✦</span>
            </div>
            </div>
            </footer>
            </div>
  );
}