"use client";
import { useEffect, useRef } from "react";

const reviews = [
  { initials: "AK", name: "Ahmad Khan",    from: "Islamabad, Pakistan", text: "The tandem paragliding over Booni valley was the most incredible experience of my life. The pilot was calm, professional, and made me feel completely safe. I was screaming with joy the entire flight!" },
  { initials: "SL", name: "Sarah Laurent", from: "Lyon, France",         text: "As a solo traveler visiting Pakistan for the first time, Eagle Adventure gave me confidence and an unforgettable flight. The views of the Hindukush from the air are something I will never forget." },
  { initials: "ZM", name: "Zaid Mahmood",  from: "Karachi, Pakistan",   text: "We booked a group tandem session for 6 people and everyone was blown away. The team handled everything perfectly. Eagle Flying Club is doing something truly special for Pakistan's adventure tourism." },
];

export default function Testimonials() {
  const hdrRef  = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); } }), { threshold: 0.08 });
    [hdrRef, gridRef].forEach(r => r.current && io.observe(r.current));
    return () => io.disconnect();
  }, []);

  return (
    <section id="testimonials" className="px-[6%] py-[100px]" style={{ background: "var(--navy)" }}>
      <div ref={hdrRef} className="reveal text-center mb-14">
        <span className="block text-[11px] font-bold tracking-[3px] uppercase mb-3" style={{ color: "var(--gold)" }}>Reviews</span>
        <h2 className="font-[family-name:var(--font-playfair)] leading-[1.12] mb-4" style={{ fontSize: "clamp(32px,4.5vw,54px)" }}>
          Flyers Who Became Fans
        </h2>
        <p className="text-[15.5px] leading-[1.8] mx-auto max-w-[560px]" style={{ color: "var(--muted)" }}>
          Real stories from real people who dared to soar above the Hindukush.
        </p>
      </div>

      <div ref={gridRef} className="reveal grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-[18px] p-8 border transition-all duration-300 hover:-translate-y-1 hover:border-[--gold]"
            style={{ background: "var(--navy2)", borderColor: "rgba(255,255,255,.06)" }}>
            <div className="flex justify-between items-start mb-5">
              <div className="text-[16px] tracking-[2px]" style={{ color: "var(--gold)" }}>★★★★★</div>
              <div className="text-[36px] leading-none opacity-[.18]">&quot;</div>
            </div>
            <p className="text-[14.5px] leading-[1.85] italic mb-6" style={{ color: "rgba(255,255,255,.83)" }}>&ldquo;{r.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-[46px] h-[46px] rounded-full flex items-center justify-center font-black text-[15px] border-2"
                style={{ background: "var(--gold)", color: "var(--navy)", borderColor: "rgba(201,162,39,.3)" }}>
                {r.initials}
              </div>
              <div>
                <strong className="block text-[14px]">{r.name}</strong>
                <span className="text-[12px]" style={{ color: "var(--muted)" }}>{r.from}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
