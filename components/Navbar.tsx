"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#hero",        label: "Home" },
  { href: "#paragliding", label: "Paragliding" },
  { href: "#services",    label: "Services" },
  { href: "#offers",      label: "Offers" },
  { href: "#gallery",     label: "Gallery" },
  { href: "#testimonials",label: "Reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[6%] transition-all duration-400"
      style={{
        padding: scrolled ? "10px 6%" : "18px 6%",
        background: scrolled ? "rgba(8,14,34,0.97)" : "transparent",
        boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,.5)" : "none",
      }}
    >
      {/* Logo */}
      <Link href="#hero" className="flex items-center gap-3 no-underline">
        <Image src="/logo.png" alt="Eagle Adventure and Tourism" width={90} height={90} loading="eager" className="object-contain drop-shadow-[0_2px_8px_rgba(201,162,39,.3)]" />
        <div className="leading-tight">
          <strong className="block text-[15px] font-black text-white tracking-[.5px]">Eagle Adventure</strong>
          <span className="text-[9.5px] tracking-[2.5px] uppercase" style={{ color: "var(--gold)" }}>& Tourism</span>
        </div>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none items-center">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-white/80 no-underline text-[12.5px] font-bold tracking-[1px] uppercase hover:text-[--gold] transition-colors">
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="no-underline px-5 py-2.5 rounded-md text-[12.5px] font-extrabold tracking-[.5px] uppercase transition-all hover:brightness-110"
            style={{ background: "linear-gradient(135deg, var(--gold), var(--gold2))", color: "var(--navy)", boxShadow: "0 4px 18px rgba(201,162,39,.3)" }}
          >
            🪂 Book Now
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1" onClick={() => setOpen(!open)} aria-label="Menu">
        {[0,1,2].map((i) => (
          <span key={i} className="block w-6 h-[2px] bg-white rounded transition-all" />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[998] flex flex-col gap-7 pt-28 px-[6%]" style={{ background: "var(--navy)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white no-underline text-[22px] font-bold tracking-wide hover:text-[--gold] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="no-underline px-6 py-4 rounded-lg text-[16px] font-extrabold text-center mt-4 w-fit"
            style={{ background: "var(--gold)", color: "var(--navy)" }}>
            🪂 Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
