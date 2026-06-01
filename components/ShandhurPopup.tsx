"use client";
import { useState, useEffect } from "react";

export default function ShandhurPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={() => setVisible(false)}
    >
      <div
        className="relative w-full max-w-[580px] rounded-[24px] overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0d1533 0%, #192554 50%, #0d1533 100%)",
          border: "1px solid rgba(201,162,39,0.5)",
          boxShadow: "0 32px 100px rgba(0,0,0,0.7), 0 0 60px rgba(201,162,39,0.12)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top bar */}
        <div className="h-[4px] w-full" style={{ background: "linear-gradient(90deg, var(--gold), var(--gold2), var(--gold))" }} />

        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-[18px] font-bold transition-all hover:scale-110 z-[100]"
          style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
          aria-label="Close"
          type="button"
        >
          ✕
        </button>

        {/* Background glow */}
        <div
          className="absolute top-0 right-0 w-[250px] h-[250px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 p-8 md:p-10">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-[6px] mb-5 text-[10px] font-extrabold tracking-[2.5px] uppercase border"
            style={{ background: "rgba(201,162,39,0.15)", borderColor: "rgba(201,162,39,0.45)", color: "var(--gold)" }}
          >
            🏔️ Shandur Festival 2026 · Special Offer
          </div>

          {/* Headline */}
          <h2
            className="font-[family-name:var(--font-playfair)] leading-[1.08] mb-3"
            style={{ fontSize: "clamp(26px,5vw,40px)" }}
          >
            Tandem Paragliding
            <br />
            <span className="italic" style={{ color: "var(--gold)" }}>Above Shandur Pass</span>
          </h2>

          <p className="text-[14px] leading-[1.8] mb-6" style={{ color: "var(--muted)" }}>
            Soar from the <strong className="text-white">world&apos;s highest polo ground</strong> at 3,700m — fly from
            Shandur mountaintop all the way down to the polo ground during Pakistan&apos;s most iconic festival.
          </p>

          {/* Route visual */}
          <div
            className="flex items-center justify-between rounded-[14px] p-4 mb-6"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,162,39,0.2)" }}
          >
            <div className="text-center">
              <div className="text-[22px] mb-1">🏔️</div>
              <div className="text-[11px] font-bold text-white">Shandur</div>
              <div className="text-[10px]" style={{ color: "var(--muted)" }}>Mountaintop</div>
            </div>
            <div className="flex-1 flex items-center justify-center gap-1 px-3">
              <div className="flex-1 h-[1px]" style={{ background: "rgba(201,162,39,0.4)" }} />
              <span className="text-[20px]">🪂</span>
              <div className="flex-1 h-[1px]" style={{ background: "rgba(201,162,39,0.4)" }} />
            </div>
            <div className="text-center">
              <div className="text-[22px] mb-1">🏇</div>
              <div className="text-[11px] font-bold text-white">Polo Ground</div>
              <div className="text-[10px]" style={{ color: "var(--muted)" }}>Landing Zone</div>
            </div>
          </div>

          {/* Price + details */}
          <div className="flex items-center justify-between mb-7 flex-wrap gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[2px] mb-1" style={{ color: "var(--muted)" }}>Flight Price</div>
              <div className="flex items-baseline gap-1">
                <span className="text-[38px] font-black leading-none" style={{ color: "var(--gold)" }}>25K</span>
                <span className="text-[16px] font-bold text-white">PKR</span>
              </div>
              <div className="text-[11px] mt-1" style={{ color: "var(--muted)" }}>per person · GoPro footage included</div>
            </div>
            <div className="flex flex-col gap-2">
              {["📅 9–11 June 2026", "⏱ 15–20 min flight", "📸 Video included", "✅ 100% Safe"].map((item) => (
                <div key={item} className="text-[12px] font-semibold" style={{ color: "var(--muted)" }}>{item}</div>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/923038989750?text=Hi!%20I%20want%20to%20book%20a%20Tandem%20Paragliding%20flight%20at%20Shandur%20Festival%202026%20(25K%20PKR).%20Please%20confirm%20my%20slot."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-[12px] font-extrabold text-[14px] tracking-[.5px] no-underline transition-all hover:-translate-y-1 hover:brightness-110"
              style={{ background: "#25D366", color: "#fff" }}
            >
              <span className="text-[18px]">💬</span> Book on WhatsApp
            </a>
            <button
              onClick={() => setVisible(false)}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-[12px] font-bold text-[14px] tracking-[.5px] border transition-all hover:-translate-y-1"
              style={{ borderColor: "rgba(201,162,39,0.4)", color: "var(--muted)" }}
            >
              Maybe Later
            </button>
          </div>

          {/* Slots indicator */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex-1 rounded-full h-[5px] overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="h-full rounded-full" style={{ width: "68%", background: "var(--gold)" }} />
            </div>
            <span className="text-[11px] font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>
              🔥 Slots filling fast
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
