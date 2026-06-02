"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const photos = [
  { src: "/booni.webp",                                                                                    alt: "Booni Valley, Chitral",              cls: "col-span-4 row-span-2" },
  { src: "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=900&q=85&auto=format&fit=crop", alt: "Paragliding over Chitral valley",    cls: "col-span-4 row-span-2" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=85&auto=format&fit=crop", alt: "Snow-capped Hindukush peaks",         cls: "col-span-4 row-span-1" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=85&auto=format&fit=crop", alt: "Green mountain valley Chitral",       cls: "col-span-4 row-span-1" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=85&auto=format&fit=crop", alt: "Aerial view of mountain landscape",   cls: "col-span-6 row-span-1" },
  { src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=85&auto=format&fit=crop", alt: "Mountain trekking Chitral",           cls: "col-span-6 row-span-1" },
];

export default function Gallery() {
  const hdrRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); } }), { threshold: 0.08 });
    [hdrRef, gridRef].forEach(r => r.current && io.observe(r.current));
    return () => io.disconnect();
  }, []);

  return (
    <section id="gallery" className="px-[6%] py-[100px]" style={{ background: "var(--navy3)" }}>
      <div ref={hdrRef} className="reveal text-center mb-14">
        <span className="eyebrow mb-4">Gallery</span>
        <h2 className="font-[family-name:var(--font-playfair)] leading-[1.1] mb-4" style={{ fontSize: "clamp(32px,4.5vw,54px)" }}>
          Life Above<br /><span className="italic" style={{ color: "var(--gold)" }}>the Clouds</span>
        </h2>
        <div className="gold-divider mx-auto" style={{ maxWidth: 180 }} />
        <p className="text-[15px] leading-[1.85] mx-auto max-w-[500px] mt-5" style={{ color: "var(--muted)" }}>
          Real moments captured thousands of feet above Chitral&apos;s majestic valleys.
        </p>
      </div>

      <div ref={gridRef} className="reveal grid grid-cols-12 grid-rows-3 gap-3" style={{ height: "680px" }}>
        {photos.map((p) => (
          <div key={p.alt} className={`group relative rounded-[14px] overflow-hidden cursor-pointer ${p.cls}`}>
            <Image src={p.src} alt={p.alt} fill className="object-cover transition-transform duration-400 group-hover:scale-[1.07]" />
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:bg-[rgba(13,21,51,.45)]">
              <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-[20px] opacity-0 scale-[.6] transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                style={{ background: "var(--gold)" }}>🔍</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="https://www.facebook.com/eagleadventureandtourism/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-9 py-4 rounded-lg font-bold text-[14px] text-white no-underline border-2 transition-all hover:-translate-y-1 hover:border-[--gold]"
          style={{ borderColor: "rgba(255,255,255,.35)" }}>
          📷 See More on Facebook
        </a>
      </div>
    </section>
  );
}
