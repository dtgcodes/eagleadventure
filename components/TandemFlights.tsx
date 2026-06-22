"use client";
import { useState, useRef, useEffect } from "react";

const videos = [
  { src: "/Video1.mp4", label: "Flight 01" },
  { src: "/Video2.mp4", label: "Flight 02" },
];

export default function TandemFlights() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hdrRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    [hdrRef, cardRef].forEach(r => r.current && io.observe(r.current));
    return () => io.disconnect();
  }, []);

  // When active video changes, reload and play
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [active]);

  const prev = () => setActive(i => (i - 1 + videos.length) % videos.length);
  const next = () => setActive(i => (i + 1) % videos.length);

  return (
    <section id="tandem" className="px-[6%] py-[100px]" style={{ background: "var(--navy2)" }}>
      {/* Header */}
      <div ref={hdrRef} className="reveal text-center mb-14">
        <span className="eyebrow mb-4">Live Flights</span>
        <h2 className="font-[family-name:var(--font-playfair)] leading-[1.1] mb-4" style={{ fontSize: "clamp(32px,4.5vw,54px)" }}>
          Real Tandem Flights<br />
          <span className="italic" style={{ color: "var(--gold)" }}>Qaqlasht to Booni</span>
        </h2>
        <div className="gold-divider mx-auto" style={{ maxWidth: 180 }} />
        <p className="text-[15px] leading-[1.85] mx-auto max-w-[540px] mt-5" style={{ color: "var(--muted)" }}>
          Watch our actual tandem flights soaring from <strong className="text-white">Qaqlasht Meadow</strong> all the way down to <strong className="text-white">Booni</strong> — pure, unedited adventure.
        </p>
      </div>

      <div ref={cardRef} className="reveal max-w-[1100px] mx-auto grid lg:grid-cols-[1fr_380px] gap-8 items-start">

        {/* ── Video Player ── */}
        <div className="relative rounded-[20px] overflow-hidden"
          style={{ border: "1px solid rgba(201,162,39,.25)", boxShadow: "0 32px 80px rgba(0,0,0,.5)" }}>

          {/* Gold top bar */}
          <div className="h-[3px]" style={{ background: "linear-gradient(90deg, var(--gold), var(--gold2), var(--gold))" }} />

          {/* Video */}
          <div className="relative bg-black" style={{ aspectRatio: "9/16" }}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videos[active].src} type="video/mp4" />
            </video>

            {/* Prev / Next arrows */}
            <button onClick={prev} type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all hover:scale-110 z-10"
              style={{ background: "rgba(0,0,0,.5)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,.15)" }}>
              ‹
            </button>
            <button onClick={next} type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all hover:scale-110 z-10"
              style={{ background: "rgba(0,0,0,.5)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,.15)" }}>
              ›
            </button>

            {/* Video label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[2px] uppercase"
              style={{ background: "rgba(0,0,0,.6)", backdropFilter: "blur(8px)", color: "var(--gold)", border: "1px solid rgba(201,162,39,.3)" }}>
              {videos[active].label}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 p-3" style={{ background: "rgba(8,14,34,.95)" }}>
            {videos.map((v, i) => (
              <button key={i} onClick={() => setActive(i)} type="button"
                className="flex-1 py-2.5 rounded-[10px] text-[11px] font-bold tracking-[1.5px] uppercase transition-all"
                style={{
                  background: active === i ? "linear-gradient(135deg, var(--gold), var(--gold2))" : "rgba(255,255,255,.06)",
                  color: active === i ? "var(--navy)" : "var(--muted)",
                  border: active === i ? "none" : "1px solid rgba(255,255,255,.08)",
                }}>
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Offer Card ── */}
        <div className="flex flex-col gap-5">

          {/* Highlight banner */}
          <div className="rounded-[18px] p-6 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(201,162,39,.18) 0%, rgba(232,186,48,.08) 100%)",
              border: "1px solid rgba(201,162,39,.45)",
            }}>
            <div className="absolute top-0 right-0 w-[140px] h-[140px] pointer-events-none opacity-10"
              style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }} />
            <div className="text-[10px] font-extrabold tracking-[3px] uppercase mb-2" style={{ color: "var(--gold)" }}>
              🪂 Tandem Flight
            </div>
            <div className="text-[22px] font-bold text-white mb-1">Qaqlasht → Booni</div>
            <div className="text-[12px]" style={{ color: "var(--muted)" }}>Contact us for pricing &amp; availability</div>
          </div>

          {/* Flight details */}
          <div className="rounded-[18px] p-6" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(201,162,39,.12)" }}>
            <div className="text-[11px] font-extrabold tracking-[2.5px] uppercase mb-4" style={{ color: "var(--gold)" }}>Flight Details</div>
            {[
              { icon: "📍", label: "Route",        value: "Qaqlasht Meadow → Booni" },
              { icon: "⏱",  label: "Duration",     value: "4 – 10 minutes" },
              { icon: "🪂",  label: "Type",         value: "Tandem Paragliding" },
              { icon: "📸",  label: "Footage",      value: "GoPro Video Included" },
              { icon: "✅",  label: "Safety",       value: "100% Certified Pilots" },
              { icon: "👤",  label: "Min Age",      value: "8 Years" },
              { icon: "⚖️",  label: "Max Weight",   value: "95 kg" },
            ].map(d => (
              <div key={d.label} className="flex items-center gap-3 py-3 border-b" style={{ borderColor: "rgba(255,255,255,.06)" }}>
                <span className="text-[18px] w-7 text-center">{d.icon}</span>
                <span className="text-[12px] w-[90px] flex-shrink-0" style={{ color: "var(--muted)" }}>{d.label}</span>
                <span className="text-[13px] font-semibold text-white">{d.value}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <a href={`https://wa.me/923078570384?text=${encodeURIComponent("Hi! I want to book a Tandem Paragliding flight from Qaqlasht to Booni. Please share details and confirm my slot.")}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-vip flex items-center justify-center gap-3 py-4 rounded-[14px] font-extrabold text-[15px] no-underline"
            style={{ background: "#25D366", color: "#fff" }}>
            <span className="text-[20px]">💬</span> Book on WhatsApp
          </a>
          <a href="#contact"
            className="flex items-center justify-center gap-2 py-4 rounded-[14px] font-bold text-[14px] no-underline border transition-all hover:-translate-y-1"
            style={{ borderColor: "rgba(201,162,39,.3)", color: "var(--muted)" }}>
            📞 Enquire via Contact Form
          </a>
        </div>
      </div>
    </section>
  );
}
