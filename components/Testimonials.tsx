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
      <div ref={hdrRef} className="reveal text-center mb-[72px]">
        <span className="eyebrow mb-4">Client Stories</span>
        <h2 className="font-[family-name:var(--font-playfair)] leading-[1.1] mb-5" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
          Flyers Who<br /><span className="italic" style={{ color: "var(--gold)" }}>Became Fans</span>
        </h2>
        <div className="gold-divider mx-auto" style={{ maxWidth: 180 }} />
        <p className="text-[15px] leading-[1.85] mx-auto max-w-[500px] mt-5" style={{ color: "var(--muted)" }}>
          Real stories from real people who dared to soar above the Hindukush.
        </p>
      </div>

      <div ref={gridRef} className="reveal grid md:grid-cols-3 gap-7 max-w-[1100px] mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="luxury-card rounded-[20px] p-9 relative overflow-hidden flex flex-col"
            style={{ background: "linear-gradient(160deg, rgba(17,29,66,.95) 0%, rgba(12,20,48,.95) 100%)" }}>
            {/* Large decorative quote */}
            <div className="absolute top-4 right-6 font-[family-name:var(--font-playfair)] leading-none select-none pointer-events-none"
              style={{ fontSize: 90, color: "rgba(201,162,39,.07)" }}>&ldquo;</div>
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, si) => (
                <svg key={si} width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.435.59 3.43L7 8.91l-3.09 1.59.59-3.43L2 4.635l3.455-.545L7 1z" fill="var(--gold)" />
                </svg>
              ))}
            </div>
            <p className="text-[14.5px] leading-[1.9] mb-7 flex-1 italic" style={{ color: "rgba(255,255,255,.78)" }}>&ldquo;{r.text}&rdquo;</p>
            <div style={{ height: 1, background: "linear-gradient(90deg, rgba(201,162,39,.3), transparent)", marginBottom: 20 }} />
            <div className="flex items-center gap-4">
              <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center font-black text-[15px] flex-shrink-0"
                style={{ background: "linear-gradient(135deg, var(--gold), var(--gold2))", color: "var(--navy)", boxShadow: "0 4px 16px rgba(201,162,39,.3)" }}>
                {r.initials}
              </div>
              <div>
                <strong className="block text-[14px] font-bold">{r.name}</strong>
                <span className="text-[11.5px]" style={{ color: "var(--muted)" }}>{r.from}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
