"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const cards = [
  { tag: "🏔️ Trekking", title: "Mountain Trekking",      desc: "Guided treks to glaciers, shepherd villages, and hidden mountain lakes in Chitral.", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&q=80&auto=format&fit=crop" },
  { tag: "🏞️ Tours",    title: "Chitral Cultural Tours", desc: "Kalash valley, Shandur polo festival, Mastuj fort — authentic Chitral experiences.",  img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&q=80&auto=format&fit=crop" },
  { tag: "⛺ Camping",  title: "High-Altitude Camping",  desc: "Stargazing, glacier views, and campfire nights at altitude — Chitral at its most raw.", img: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=700&q=80&auto=format&fit=crop" },
];

function CardOverlay({ tag, title, desc }: { tag: string; title: string; desc: string }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end p-7 transition-all duration-300 group-hover:pb-8"
      style={{ background: "linear-gradient(to top,rgba(13,21,51,.95) 0%,rgba(13,21,51,.3) 55%,transparent 100%)" }}>
      <span className="inline-block text-[10px] font-extrabold tracking-[2px] uppercase px-3 py-1 rounded-full mb-3 w-fit"
        style={{ background: "var(--gold)", color: "var(--navy)" }}>{tag}</span>
      <h3 className="text-[20px] font-bold mb-2">{title}</h3>
      <p className="text-[13px] leading-[1.65] mb-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
        style={{ color: "var(--muted)" }}>{desc}</p>
      <a href="#contact" className="text-[13px] font-bold no-underline opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 flex items-center gap-2"
        style={{ color: "var(--gold)" }}>Enquire →</a>
    </div>
  );
}

export default function Services() {
  const hdrRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); } }), { threshold: 0.08 });
    [hdrRef, heroRef, gridRef].forEach(r => r.current && io.observe(r.current));
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" className="px-[6%] py-[100px]" style={{ background: "var(--navy)" }}>
      <div ref={hdrRef} className="reveal text-center mb-12">
        <span className="block text-[11px] font-bold tracking-[3px] uppercase mb-3" style={{ color: "var(--gold)" }}>All Adventures</span>
        <h2 className="font-[family-name:var(--font-playfair)] leading-[1.12] mb-4" style={{ fontSize: "clamp(32px,4.5vw,54px)" }}>
          More Than Just<br />Paragliding
        </h2>
        <p className="text-[15.5px] leading-[1.8] mx-auto max-w-[560px]" style={{ color: "var(--muted)" }}>
          Explore the full width of Chitral — on the ground, on the trails, or in the air.
        </p>
      </div>

      {/* Hero card */}
      <div ref={heroRef} className="reveal group relative rounded-[20px] overflow-hidden h-[500px] cursor-pointer mb-5">
        <Image src="https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=1400&q=85&auto=format&fit=crop"
          alt="Paragliding experience" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 flex flex-col justify-end p-10 transition-all"
          style={{ background: "linear-gradient(to top,rgba(13,21,51,.95) 0%,rgba(13,21,51,.3) 55%,transparent 100%)" }}>
          <span className="inline-block text-[10px] font-extrabold tracking-[2px] uppercase px-3 py-1 rounded-full mb-3 w-fit"
            style={{ background: "var(--gold)", color: "var(--navy)" }}>⭐ Most Popular</span>
          <h3 className="text-[clamp(22px,3vw,32px)] font-bold mb-3">Tandem Paragliding Experience</h3>
          <p className="text-[14px] leading-[1.65] max-w-[600px] mb-5 opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
            style={{ color: "var(--muted)" }}>
            Our signature offering — fly with Pakistan&apos;s top-rated paragliding pilots above the breathtaking Booni valley. Safe, thrilling, and completely unforgettable. No prior experience required.
          </p>
          <a href="#contact" className="text-[13px] font-bold no-underline flex items-center gap-2 opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
            style={{ color: "var(--gold)" }}>Book Your Flight →</a>
        </div>
      </div>

      {/* 3-col grid */}
      <div ref={gridRef} className="reveal grid md:grid-cols-3 gap-5">
        {cards.map((c) => (
          <div key={c.title} className="group relative rounded-[16px] overflow-hidden h-[300px] cursor-pointer transition-transform duration-300 hover:-translate-y-2">
            <Image src={c.img} alt={c.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
            <CardOverlay {...c} />
          </div>
        ))}
      </div>
    </section>
  );
}
