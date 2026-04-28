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
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80&auto=format&fit=crop",
          ].map((src, i) => (
            <div key={i} className="h-[160px] rounded-[14px] overflow-hidden">
              <Image src={src} alt="Paragliding" width={400} height={160} style={{ width:"100%", height:"100%" }} className="object-cover hover:scale-105 transition-transform duration-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={rightRef} className="reveal-right">
        <span className="block text-[11px] font-bold tracking-[3px] uppercase mb-3" style={{ color: "var(--gold)" }}>Our Speciality</span>
        <h2 className="font-[family-name:var(--font-playfair)] leading-[1.12] mb-4" style={{ fontSize: "clamp(32px,4.5vw,54px)" }}>
          Paragliding Over<br />the Hindukush
        </h2>
        <p className="mb-8 leading-[1.8] text-[15.5px]" style={{ color: "var(--muted)" }}>
          Eagle Flying Club is Chitral&apos;s premier paragliding club — a dedicated group of certified pilots who live, breathe, and fly the skies above Booni valley every single day.
        </p>

        <div className="flex flex-col gap-5">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4 p-5 rounded-xl border transition-all hover:border-[--gold]"
              style={{ background: "rgba(255,255,255,.04)", borderColor: "rgba(201,162,39,.12)" }}>
              <span className="text-[24px] mt-0.5">{f.icon}</span>
              <div>
                <h4 className="text-[15px] font-bold mb-1">{f.title}</h4>
                <p className="text-[13px] leading-[1.6]" style={{ color: "var(--muted)" }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-extrabold text-[14px] no-underline transition-all hover:-translate-y-1 hover:brightness-110"
            style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Book a Paragliding Session →
          </a>
        </div>
      </div>
    </section>
  );
}
