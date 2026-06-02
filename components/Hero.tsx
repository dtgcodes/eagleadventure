"use client";

const gliders = [
  { top: "20%", duration: "28s", delay: "0s",  size: "44px" },
  { top: "35%", duration: "36s", delay: "9s",  size: "30px" },
  { top: "15%", duration: "42s", delay: "18s", size: "26px" },
  { top: "28%", duration: "32s", delay: "6s",  size: "36px" },
];

const stats = [
  { icon: "🪂", value: "500+",  label: "Flights Completed" },
  { icon: "🛡️", value: "100%", label: "Safety Record" },
  { icon: "🏔️", value: "10+",  label: "Years Experience" },
  { icon: "⭐", value: "1.1K+", label: "Happy Flyers" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="hero-bg absolute inset-0"
        style={{
          background: `linear-gradient(to bottom,
            rgba(8,14,34,.82) 0%,
            rgba(8,14,34,.28) 40%,
            rgba(8,14,34,.72) 100%),
            url('https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=1900&q=90&auto=format&fit=crop') center/cover no-repeat`,
        }}
      />

      {/* Subtle vignette corners */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 50%, rgba(8,14,34,.6) 100%)"
      }} />

      {/* Floating gliders */}
      {gliders.map((g, i) => (
        <span key={i} className="glider" style={{ top: g.top, fontSize: g.size, animationDuration: g.duration, animationDelay: g.delay, left: "-120px" }}>🪂</span>
      ))}

      {/* Content */}
      <div className="relative z-10 px-[6%] max-w-[860px]">
        {/* Eyebrow */}
        <div className="fade-up-1 flex items-center gap-3 mb-7">
          <div style={{ width: 28, height: 1, background: "rgba(201,162,39,.6)" }} />
          <span className="text-[10px] font-extrabold tracking-[4px] uppercase" style={{ color: "var(--gold)" }}>
            Chitral · Booni · Hindukush Mountains
          </span>
          <div style={{ width: 28, height: 1, background: "rgba(201,162,39,.6)" }} />
        </div>

        {/* Headline */}
        <h1
          className="fade-up-2 font-[family-name:var(--font-playfair)] leading-[1.02] mb-6"
          style={{ fontSize: "clamp(52px,9vw,100px)" }}
        >
          Feel the<br />
          <em className="not-italic gold-shimmer">Paragliding</em><br />
          <span style={{ color: "rgba(255,255,255,.9)" }}>Freedom</span>
        </h1>

        {/* Divider */}
        <div className="fade-up-3 flex items-center gap-4 mb-7">
          <div style={{ width: 42, height: 1, background: "rgba(201,162,39,.5)" }} />
          <span className="text-[10px] tracking-[3px] uppercase" style={{ color: "var(--gold)", opacity: .7 }}>Est. 2014</span>
        </div>

        <p
          className="fade-up-3 font-light leading-[1.8] max-w-[580px] mb-10"
          style={{ fontSize: "clamp(15px,1.7vw,17.5px)", color: "rgba(255,255,255,.7)" }}
        >
          Pakistan&apos;s #1 paragliding club in <strong className="font-semibold text-white">Chitral</strong> — soaring above the Hindukush since 2014.
          Tandem flights, training courses &amp; adventure tours crafted for every thrill-seeker.
        </p>

        <div className="fade-up-4 flex gap-4 flex-wrap">
          <a
            href="#contact"
            className="btn-vip inline-flex items-center gap-2 px-11 py-4 rounded-lg font-extrabold text-[13.5px] tracking-[.8px] no-underline"
            style={{ background: "linear-gradient(135deg, var(--gold), var(--gold2))", color: "var(--navy)" }}
          >
            🪂 Book a Flight
          </a>
          <a
            href="#video"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-[13.5px] tracking-[.5px] text-white no-underline border transition-all hover:-translate-y-1"
            style={{ borderColor: "rgba(255,255,255,.2)", background: "rgba(255,255,255,.05)", backdropFilter: "blur(8px)" }}
          >
            ▶ Watch Us Fly
          </a>
        </div>
      </div>

      {/* Trust bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 md:grid-cols-4"
        style={{
          background: "rgba(8,14,34,.9)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(201,162,39,.18)",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-8 py-6"
            style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,.05)" : "none" }}
          >
            <span className="text-[26px]">{s.icon}</span>
            <div>
              <strong
                className="block leading-none mb-1"
                style={{ fontSize: "clamp(20px,2.4vw,28px)", color: "var(--gold)" }}
              >{s.value}</strong>
              <span className="text-[10.5px] uppercase tracking-[1.5px]" style={{ color: "var(--muted)" }}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
