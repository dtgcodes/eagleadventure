"use client";
import { useEffect, useRef } from "react";

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="video" className="px-[6%] py-[100px]" style={{ background: "var(--navy2)" }}>
      <div ref={sectionRef} className="reveal max-w-[900px] mx-auto text-center">
        <span className="block text-[11px] font-bold tracking-[3px] uppercase mb-3" style={{ color: "var(--gold)" }}>
          See Us in Action
        </span>
        <h2
          className="font-[family-name:var(--font-playfair)] leading-[1.12] mb-4"
          style={{ fontSize: "clamp(28px,4vw,48px)" }}
        >
          Watch the Thrill
        </h2>
        <p className="text-[15px] leading-[1.8] mx-auto max-w-[560px] mb-10" style={{ color: "var(--muted)" }}>
          Experience what it feels like to soar above Chitral&apos;s breathtaking Hindukush mountains.
        </p>

        <div
          className="rounded-[20px] overflow-hidden border"
          style={{
            borderColor: "rgba(201,162,39,0.25)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
          }}
        >
          <video
            className="w-full"
            controls
            playsInline
            preload="metadata"
            poster="/video-poster.jpg"
            style={{ display: "block", maxHeight: "560px", objectFit: "cover" }}
          >
            <source src="/paragliding.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-extrabold text-[14px] tracking-[.5px] no-underline transition-all hover:-translate-y-1 hover:brightness-110"
            style={{ background: "var(--gold)", color: "var(--navy)" }}
          >
            🪂 Book Your Flight Now
          </a>
        </div>
      </div>
    </section>
  );
}
