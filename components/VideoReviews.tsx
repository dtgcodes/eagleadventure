"use client";
import { useEffect, useRef } from "react";

const reviews = [
  {
    src: "/review1.mp4",
    name: "James Whitfield",
    from: "United Kingdom",
    flag: "🇬🇧",
    quote: "An absolutely unforgettable experience flying tandem over Chitral — the views and the team's professionalism were world-class.",
  },
];

export default function VideoReviews() {
  const hdrRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    [hdrRef, gridRef].forEach(r => r.current && io.observe(r.current));
    return () => io.disconnect();
  }, []);

  return (
    <section id="video-reviews" className="px-[6%] py-[100px]" style={{ background: "var(--navy3)" }}>
      {/* Header */}
      <div ref={hdrRef} className="reveal text-center mb-14">
        <span className="eyebrow mb-4">Client Reviews</span>
        <h2 className="font-[family-name:var(--font-playfair)] leading-[1.1] mb-4" style={{ fontSize: "clamp(32px,4.5vw,54px)" }}>
          Flights That Speak<br />
          <span className="italic" style={{ color: "var(--gold)" }}>for Themselves</span>
        </h2>
        <div className="gold-divider mx-auto" style={{ maxWidth: 180 }} />
        <p className="text-[15px] leading-[1.85] mx-auto max-w-[520px] mt-5" style={{ color: "var(--muted)" }}>
          Real tandem flights with real clients from around the world — captured live above the Hindukush.
        </p>
      </div>

      {/* Reviews grid */}
      <div ref={gridRef} className="reveal max-w-[1100px] mx-auto flex flex-wrap justify-center gap-8">
        {reviews.map((r) => (
          <div key={r.name} className="luxury-card rounded-[20px] overflow-hidden w-full max-w-[340px]"
            style={{ background: "rgba(255,255,255,.03)" }}>

            {/* Gold top bar */}
            <div className="h-[3px]" style={{ background: "linear-gradient(90deg, var(--gold), var(--gold2), var(--gold))" }} />

            {/* Video */}
            <div className="relative bg-black" style={{ aspectRatio: "9/16" }}>
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                muted
                loop
                preload="metadata"
              >
                <source src={r.src} type="video/mp4" />
              </video>

              {/* Flag badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold"
                style={{ background: "rgba(0,0,0,.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,.15)" }}>
                <span className="text-[16px]">{r.flag}</span> {r.from}
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.435.59 3.43L7 8.91l-3.09 1.59.59-3.43L2 4.635l3.455-.545L7 1z" fill="var(--gold)" />
                  </svg>
                ))}
              </div>
              <p className="text-[13.5px] leading-[1.8] italic mb-4" style={{ color: "rgba(255,255,255,.78)" }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-black text-[14px] flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--gold), var(--gold2))", color: "var(--navy)" }}>
                  {r.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <strong className="block text-[13.5px] font-bold">{r.name}</strong>
                  <span className="text-[11px]" style={{ color: "var(--muted)" }}>Tandem Flight Client</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a href="#contact"
          className="btn-vip inline-flex items-center gap-2 px-10 py-4 rounded-lg font-extrabold text-[13.5px] no-underline"
          style={{ background: "linear-gradient(135deg, var(--gold), var(--gold2))", color: "var(--navy)" }}>
          Be Our Next Story →
        </a>
      </div>
    </section>
  );
}
