"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const steps = [
  { n: "01", title: "Born in Chitral, Trained Internationally", desc: "Our pilots grew up in these mountains and trained to international paragliding certification standards — nobody knows these skies better." },
  { n: "02", title: "EN-Certified Equipment",                   desc: "We fly with European-standard certified paragliders, harnesses, and helmets — inspected and maintained every season." },
  { n: "03", title: "Real-Time Weather Monitoring",             desc: "We never fly in unsafe conditions. Every session is weather-checked and your safety is always our first priority." },
  { n: "04", title: "Community-Rooted Tourism",                 desc: "Every booking supports local Chitrali families and helps preserve the unique culture of this incredible region." },
];

export default function WhyUs() {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); } }), { threshold: 0.1 });
    [leftRef, rightRef].forEach(r => r.current && io.observe(r.current));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className="grid md:grid-cols-2 gap-[70px] items-center px-[6%] py-[100px]" style={{ background: "var(--navy2)" }}>
      {/* Image */}
      <div ref={leftRef} className="reveal-left relative rounded-[20px] overflow-hidden h-[580px]">
        <Image src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=85&auto=format&fit=crop"
          alt="Paragliding over mountains" fill className="object-cover" />
        <div className="absolute bottom-7 left-7 rounded-[14px] p-5 border" style={{ background: "rgba(13,21,51,.92)", backdropFilter: "blur(16px)", borderColor: "rgba(201,162,39,.3)" }}>
          <div className="text-[20px] tracking-[3px] mb-1" style={{ color: "var(--gold)" }}>★★★★★</div>
          <strong className="block text-[14px]">Chitral&apos;s #1 Paragliding Club</strong>
          <span className="text-[12px]" style={{ color: "var(--muted)" }}>Rated by 1,100+ adventurers</span>
        </div>
      </div>

      {/* Content */}
      <div ref={rightRef} className="reveal-right">
        <span className="block text-[11px] font-bold tracking-[3px] uppercase mb-3" style={{ color: "var(--gold)" }}>Why Choose Eagle</span>
        <h2 className="font-[family-name:var(--font-playfair)] leading-[1.12] mb-4" style={{ fontSize: "clamp(32px,4.5vw,54px)" }}>
          Every Flight is a<br />Lifetime Memory
        </h2>
        <p className="text-[15.5px] leading-[1.8] mb-10" style={{ color: "var(--muted)" }}>
          We combine deep mountain knowledge with international safety standards and a genuine passion for the skies.
        </p>

        <div className="flex flex-col">
          {steps.map((s, i) => (
            <div key={s.n} className={`flex gap-5 items-start py-7 ${i < steps.length - 1 ? "border-b" : ""}`}
              style={{ borderColor: "rgba(255,255,255,.06)" }}>
              <div className="w-12 h-12 min-w-[48px] flex items-center justify-center rounded-xl font-black text-[16px] shadow-[0_6px_20px_rgba(201,162,39,.3)]"
                style={{ background: "var(--gold)", color: "var(--navy)" }}>{s.n}</div>
              <div>
                <h4 className="text-[16px] font-bold mb-1.5">{s.title}</h4>
                <p className="text-[13.5px] leading-[1.7]" style={{ color: "var(--muted)" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-extrabold text-[14px] no-underline transition-all hover:-translate-y-1 hover:brightness-110"
            style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Start Your Adventure →
          </a>
        </div>
      </div>
    </section>
  );
}
