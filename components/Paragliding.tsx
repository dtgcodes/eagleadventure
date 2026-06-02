"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const features = [
  { icon: "🪂", title: "Tandem Flights — No Experience Needed", desc: "Fly side-by-side with a certified pilot. Suitable for all ages. Min age 8, max weight 95 kg." },
  { icon: "🎓", title: "Paragliding Training Courses",           desc: "From ground handling to solo flights — beginner, intermediate, and advanced levels." },
  { icon: "📸", title: "GoPro Video & Photography",             desc: "Professional aerial footage of your flight — relive the moment and share it with the world." },
  { icon: "🌤️", title: "Best Flying Season: May – October",    desc: "Chitral's clear summer skies offer ideal thermals. Early mornings and late afternoons are magical." },
];

export default function Paragliding() {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); } }), { threshold: 0.1 });
    [leftRef, rightRef].forEach(r => r.current && io.observe(r.current));
    return () => io.disconnect();
  }, []);

  return (
    <section id="paragliding" className="grid md:grid-cols-2 gap-[70px] items-center px-[6%] py-[100px]" style={{ background: "var(--navy2)" }}>
      {/* Visual */}
      <div ref={leftRef} className="reveal-left relative">
        <div className="relative w-full h-[520px] rounded-[20px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.5)]">
          <Image src="https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=900&q=85&auto=format&fit=crop"
            alt="Tandem paragliding over Chitral valley" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
        </div>

        {/* Badge */}
        <div className="absolute top-6 -right-4 z-10 text-center font-black px-5 py-4 rounded-[14px] shadow-[0_12px_30px_rgba(201,162,39,.4)]"
          style={{ background: "var(--gold)", color: "var(--navy)" }}>
          <span className="block text-[36px] leading-none">🪂</span>
          <small className="text-[10px] tracking-[1.5px] uppercase opacity-85">Tandem<br />Paragliding</small>
        </div>

        {/* Thumb row */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          {[
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=85&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=85&auto=format&fit=crop",
          ].map((src, i) => (
            <div key={i} className="h-[160px] rounded-[14px] overflow-hidden">
              <Image src={src} alt="Paragliding" width={400} height={160} style={{ width:"100%", height:"100%" }} className="object-cover hover:scale-105 transition-transform duration-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={rightRef} className="reveal-right">
        <span className="eyebrow mb-4">Our Speciality</span>
        <h2 className="font-[family-name:var(--font-playfair)] leading-[1.1] mb-3" style={{ fontSize: "clamp(32px,4.5vw,54px)" }}>
          Paragliding Over<br /><span className="italic" style={{ color: "var(--gold)" }}>the Hindukush</span>
        </h2>
        <div style={{ width: 40, height: 1, background: "var(--gold)", opacity: .5, marginBottom: 24 }} />
        <p className="mb-9 leading-[1.85] text-[15px]" style={{ color: "var(--muted)" }}>
          Eagle Flying Club is Chitral&apos;s premier paragliding club — a dedicated group of certified pilots who live, breathe, and fly the skies above Booni valley every single day.
        </p>

        <div className="flex flex-col gap-4">
          {features.map((f) => (
            <div key={f.title} className="luxury-card flex items-start gap-5 p-5 rounded-[16px]"
              style={{ background: "rgba(255,255,255,.03)" }}>
              <div className="w-11 h-11 min-w-[44px] flex items-center justify-center rounded-[10px] text-[20px]"
                style={{ background: "rgba(201,162,39,.1)", border: "1px solid rgba(201,162,39,.2)" }}>{f.icon}</div>
              <div>
                <h4 className="text-[14.5px] font-bold mb-1">{f.title}</h4>
                <p className="text-[13px] leading-[1.65]" style={{ color: "var(--muted)" }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#contact"
            className="btn-vip inline-flex items-center gap-2 px-10 py-4 rounded-lg font-extrabold text-[13.5px] no-underline"
            style={{ background: "linear-gradient(135deg, var(--gold), var(--gold2))", color: "var(--navy)" }}>
            Book a Paragliding Session →
          </a>
        </div>
      </div>
    </section>
  );
}
