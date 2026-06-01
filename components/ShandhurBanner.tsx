"use client";
import { useEffect, useRef } from "react";

export default function ShandhurBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    if (bannerRef.current) io.observe(bannerRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="px-[6%] py-[80px]" style={{ background: "var(--navy)" }}>
      <div ref={bannerRef} className="reveal max-w-[1100px] mx-auto">
        <div
          className="relative rounded-[24px] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, rgba(13,21,51,0.92) 0%, rgba(25,37,84,0.85) 50%, rgba(13,21,51,0.92) 100%),
              url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85&auto=format&fit=crop') center/cover no-repeat`,
            border: "1px solid rgba(201,162,39,0.4)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          }}
        >
          {/* Decorative corner accent */}
          <div
            className="absolute top-0 right-0 w-[300px] h-[300px] opacity-10"
            style={{
              background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 p-10 md:p-14">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-[11px] font-extrabold tracking-[2px] uppercase border"
                style={{
                  background: "rgba(201,162,39,0.18)",
                  borderColor: "rgba(201,162,39,0.5)",
                  color: "var(--gold)",
                }}
              >
                🏆 Limited Slots — Book Early
              </div>

              <h2
                className="font-[family-name:var(--font-playfair)] leading-[1.1] mb-4"
                style={{ fontSize: "clamp(28px,4vw,52px)" }}
              >
                Tandem Paragliding
                <br />
                <span className="italic" style={{ color: "var(--gold)" }}>Shandur Festival 2026</span>
              </h2>

              <p className="text-[15px] leading-[1.8] mb-6 max-w-[520px]" style={{ color: "var(--muted)" }}>
                Fly high above the world&apos;s highest polo ground at <strong className="text-white">3,700m</strong>.
                Experience tandem paragliding over the legendary Shandur Pass during Pakistan&apos;s most iconic festival.
                A once-in-a-lifetime adventure in the Hindukush mountains.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
                {[
                  { icon: "📍", text: "Shandur Pass, Chitral" },
                  { icon: "📅", text: "9–11 June 2026" },
                  { icon: "🪂", text: "Tandem Flights" },
                  { icon: "📸", text: "GoPro Footage Included" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 text-[13px] font-semibold px-4 py-2 rounded-full"
                    style={{ background: "rgba(255,255,255,0.07)", color: "var(--muted)" }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-extrabold text-[14px] tracking-[.5px] no-underline transition-all hover:-translate-y-1 hover:brightness-110"
                  style={{ background: "var(--gold)", color: "var(--navy)" }}
                >
                  🪂 Reserve My Spot
                </a>
                <a
                  href="https://wa.me/923009001888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-[14px] tracking-[.5px] text-white no-underline border-2 transition-all hover:-translate-y-1 hover:border-[--gold]"
                  style={{ borderColor: "rgba(255,255,255,0.3)" }}
                >
                  💬 WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Right — Stats card */}
            <div
              className="flex-shrink-0 w-full md:w-[260px] rounded-[18px] p-7 border text-center"
              style={{
                background: "rgba(13,21,51,0.8)",
                borderColor: "rgba(201,162,39,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="text-[42px] mb-3">🏔️</div>
              <div className="text-[12px] font-bold tracking-[2px] uppercase mb-4" style={{ color: "var(--gold)" }}>
                Flight Details
              </div>
              {[
                { label: "Altitude", value: "3,700m+" },
                { label: "Flight Duration", value: "15–25 min" },
                { label: "Min Age", value: "12 Years" },
                { label: "Max Weight", value: "100 kg" },
              ].map((d) => (
                <div
                  key={d.label}
                  className="flex justify-between items-center py-3 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <span className="text-[13px]" style={{ color: "var(--muted)" }}>{d.label}</span>
                  <span className="text-[14px] font-bold text-white">{d.value}</span>
                </div>
              ))}
              <div className="mt-5 pt-3">
                <div className="text-[11px] uppercase tracking-[2px] mb-1" style={{ color: "var(--muted)" }}>
                  Slots Filling Fast
                </div>
                <div className="w-full rounded-full h-[6px] overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <div className="h-full rounded-full" style={{ width: "70%", background: "var(--gold)" }} />
                </div>
                <div className="text-[12px] mt-1" style={{ color: "var(--gold)" }}>70% Booked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
