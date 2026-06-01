"use client";
import { useEffect, useRef } from "react";

const offers = [
  {
    badge: "🏆 Limited Slots",
    tag: "⭐ Featured Offer",
    title: "Tandem Paragliding",
    highlight: "Shandur Festival 2026",
    desc: "Fly from the world's highest polo ground at 3,700m — soar from Shandur mountaintop all the way down to the polo ground during Pakistan's most iconic festival.",
    price: "25K",
    currency: "PKR",
    priceNote: "per person · GoPro footage included",
    dates: "9–11 June 2026",
    details: [
      { label: "Location", value: "Shandur Pass, Chitral" },
      { label: "Altitude", value: "3,700m+" },
      { label: "Duration", value: "15–20 min" },
      { label: "Min Age", value: "12 Years" },
    ],
    waText: "Hi! I want to book a Tandem Paragliding flight at Shandur Festival 2026 (25K PKR). Please confirm my slot.",
    bg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85&auto=format&fit=crop",
    booked: 70,
  },
];

export default function Offers() {
  const hdrRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    [hdrRef, ...cardRefs].forEach((r) => { if (r.current) io.observe(r.current); });
    return () => io.disconnect();
  }, []);

  return (
    <section id="offers" className="px-[6%] py-[100px]" style={{ background: "var(--navy)" }}>
      {/* Header */}
      <div ref={hdrRef} className="reveal text-center mb-14">
        <span className="block text-[11px] font-bold tracking-[3px] uppercase mb-3" style={{ color: "var(--gold)" }}>
          Special Offers
        </span>
        <h2
          className="font-[family-name:var(--font-playfair)] leading-[1.12] mb-4"
          style={{ fontSize: "clamp(32px,4.5vw,54px)" }}
        >
          Exclusive Deals &<br />
          <span className="italic" style={{ color: "var(--gold)" }}>Limited Events</span>
        </h2>
        <p className="text-[15.5px] leading-[1.8] mx-auto max-w-[520px]" style={{ color: "var(--muted)" }}>
          Book early and secure your slot for our most sought-after paragliding experiences.
        </p>
      </div>

      {/* Offer cards */}
      <div className="max-w-[1100px] mx-auto flex flex-col gap-8">
        {offers.map((offer, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="reveal relative rounded-[24px] overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(13,21,51,0.94) 0%, rgba(25,37,84,0.88) 50%, rgba(13,21,51,0.94) 100%),
                url('${offer.bg}') center/cover no-repeat`,
              border: "1px solid rgba(201,162,39,0.4)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
            }}
          >
            {/* Top accent bar */}
            <div className="h-[4px]" style={{ background: "linear-gradient(90deg, var(--gold), var(--gold2), var(--gold))" }} />

            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-[320px] h-[320px] opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 p-8 md:p-12">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-extrabold tracking-[2px] uppercase border"
                    style={{ background: "rgba(201,162,39,0.15)", borderColor: "rgba(201,162,39,0.45)", color: "var(--gold)" }}
                  >
                    {offer.badge}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-extrabold tracking-[2px] uppercase"
                    style={{ background: "var(--gold)", color: "var(--navy)" }}
                  >
                    {offer.tag}
                  </span>
                </div>

                <h3
                  className="font-[family-name:var(--font-playfair)] leading-[1.1] mb-3"
                  style={{ fontSize: "clamp(26px,3.5vw,44px)" }}
                >
                  {offer.title}
                  <br />
                  <span className="italic" style={{ color: "var(--gold)" }}>{offer.highlight}</span>
                </h3>

                <p className="text-[15px] leading-[1.8] mb-6 max-w-[520px]" style={{ color: "var(--muted)" }}>
                  {offer.desc}
                </p>

                {/* Route visual */}
                <div
                  className="inline-flex items-center gap-4 rounded-[14px] px-6 py-4 mb-7"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,162,39,0.2)" }}
                >
                  <div className="text-center">
                    <div className="text-[20px]">🏔️</div>
                    <div className="text-[11px] font-bold text-white mt-1">Mountaintop</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-10 h-[1px]" style={{ background: "rgba(201,162,39,0.5)" }} />
                    <span className="text-[18px]">🪂</span>
                    <div className="w-10 h-[1px]" style={{ background: "rgba(201,162,39,0.5)" }} />
                  </div>
                  <div className="text-center">
                    <div className="text-[20px]">🏇</div>
                    <div className="text-[11px] font-bold text-white mt-1">Polo Ground</div>
                  </div>
                  <div className="ml-4 pl-4 border-l" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    <div className="text-[10px] uppercase tracking-[1.5px] mb-1" style={{ color: "var(--muted)" }}>Event Dates</div>
                    <div className="text-[13px] font-bold text-white">📅 {offer.dates}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[44px] font-black leading-none" style={{ color: "var(--gold)" }}>{offer.price}</span>
                  <span className="text-[18px] font-bold text-white">{offer.currency}</span>
                </div>
                <p className="text-[12px] mb-7" style={{ color: "var(--muted)" }}>{offer.priceNote}</p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/923038989750?text=${encodeURIComponent(offer.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-[12px] font-extrabold text-[14px] no-underline transition-all hover:-translate-y-1 hover:brightness-110"
                    style={{ background: "#25D366", color: "#fff" }}
                  >
                    💬 Book on WhatsApp
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-[12px] font-bold text-[14px] no-underline border-2 transition-all hover:-translate-y-1 hover:border-[--gold]"
                    style={{ borderColor: "rgba(255,255,255,0.25)", color: "var(--muted)" }}
                  >
                    📞 Call to Book
                  </a>
                </div>
              </div>

              {/* Right — details card */}
              <div
                className="flex-shrink-0 w-full lg:w-[240px] rounded-[18px] p-6 border self-start"
                style={{
                  background: "rgba(13,21,51,0.8)",
                  borderColor: "rgba(201,162,39,0.3)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="text-[12px] font-bold tracking-[2px] uppercase mb-4 text-center" style={{ color: "var(--gold)" }}>
                  Flight Details
                </div>
                {offer.details.map((d) => (
                  <div key={d.label} className="flex justify-between items-center py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                    <span className="text-[12px]" style={{ color: "var(--muted)" }}>{d.label}</span>
                    <span className="text-[13px] font-bold text-white">{d.value}</span>
                  </div>
                ))}
                <div className="mt-5">
                  <div className="flex justify-between text-[11px] mb-2">
                    <span style={{ color: "var(--muted)" }}>Slots Booked</span>
                    <span className="font-bold" style={{ color: "var(--gold)" }}>{offer.booked}%</span>
                  </div>
                  <div className="w-full rounded-full h-[6px] overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <div className="h-full rounded-full transition-all" style={{ width: `${offer.booked}%`, background: "var(--gold)" }} />
                  </div>
                  <div className="text-[11px] mt-2 text-center" style={{ color: "var(--muted)" }}>🔥 Book before slots run out</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
