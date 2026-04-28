"use client";

const gliders = [
  { top: "20%", duration: "28s", delay: "0s",  size: "46px" },
  { top: "35%", duration: "34s", delay: "8s",  size: "32px" },
  { top: "15%", duration: "40s", delay: "16s", size: "28px" },
  { top: "28%", duration: "30s", delay: "5s",  size: "38px" },
];

const stats = [
  { icon: "🪂", value: "500+",  label: "Paragliding Flights" },
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
          background: `linear-gradient(to bottom, rgba(13,21,51,.75) 0%, rgba(13,21,51,.25) 40%, rgba(13,21,51,.6) 100%),
            url('https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=1900&q=90&auto=format&fit=crop') center/cover no-repeat`,
        }}
      />

      {/* Floating gliders */}
      {gliders.map((g, i) => (
        <span key={i} className="glider" style={{ top: g.top, fontSize: g.size, animationDuration: g.duration, animationDelay: g.delay, left: "-120px" }}>
          🪂
        </span>
      ))}

      {/* Content */}
      <div className="relative z-10 px-[6%] max-w-[820px]">
        <div className="fade-up-1 inline-flex items-center gap-2 rounded-full px-[18px] py-[7px] mb-7 text-[11px] font-bold tracking-[2.5px] uppercase border"
          style={{ background: "rgba(201,162,39,.18)", borderColor: "rgba(201,162,39,.5)", color: "var(--gold)" }}>
          🦅 Chitral · Booni · Hindukush Mountains
        </div>
        <h1 className="fade-up-2 font-[family-name:var(--font-playfair)] leading-[1.04] mb-5"
          style={{ fontSize: "clamp(50px,8.5vw,96px)" }}>
          Feel the<br />
          <span className="italic" style={{ color: "var(--gold)" }}>Paragliding</span><br />
          Freedom
        </h1>
        <p className="fade-up-3 font-light leading-[1.75] max-w-[560px] mb-10 text-white/75"
          style={{ fontSize: "clamp(15px,1.8vw,18px)" }}>
          Pakistan&apos;s #1 paragliding club in <strong className="font-bold" style={{ color: "var(--gold)" }}>Chitral</strong> — soaring above the Hindukush since 2014.
          Tandem flights, training courses &amp; adventure tours crafted for every thrill-seeker.
        </p>
        <div className="fade-up-4 flex gap-4 flex-wrap">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-extrabold text-[14px] tracking-[.5px] no-underline transition-all hover:-translate-y-1 hover:brightness-110"
            style={{ background: "var(--gold)", color: "var(--navy)" }}>
            🪂 Book a Flight
          </a>
          <a href="#paragliding"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-lg font-bold text-[14px] tracking-[.5px] text-white no-underline border-2 transition-all hover:-translate-y-1 hover:border-[--gold]"
            style={{ borderColor: "rgba(255,255,255,.35)" }}>
            ▶ Watch Us Fly
          </a>
        </div>
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 md:grid-cols-4 border-t"
        style={{ background: "rgba(13,21,51,.85)", backdropFilter: "blur(12px)", borderColor: "rgba(201,162,39,.2)" }}>
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-7 py-5 border-r last:border-r-0"
            style={{ borderColor: "rgba(255,255,255,.07)" }}>
            <span className="text-[28px]">{s.icon}</span>
            <div>
              <strong className="block text-[clamp(20px,2.5vw,28px)] font-black leading-none" style={{ color: "var(--gold)" }}>{s.value}</strong>
              <span className="text-[11px] uppercase tracking-[1px]" style={{ color: "var(--muted)" }}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
