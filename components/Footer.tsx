import Image from "next/image";
import Link from "next/link";

const nav = {
  Paragliding: ["Tandem Flights", "Training Course", "Beginner Lessons", "GoPro Footage", "Group Bookings"],
  Adventures:  ["Mountain Trekking", "Chitral Tours", "Camping", "Kalash Valley", "Shandur Pass"],
  Company:     ["About EFC", "Why Choose Us", "Gallery", "Reviews", "Book Now"],
};

export default function Footer() {
  return (
    <footer className="border-t px-[6%] pt-16 pb-8" style={{ background: "var(--navy)", borderColor: "rgba(255,255,255,.07)" }}>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
        {/* Brand */}
        <div>
          <Link href="#hero" className="inline-flex items-center gap-3 no-underline mb-1">
            <Image src="/logo.jpg" alt="Eagle Adventure" width={56} height={56} className="object-contain" />
            <div className="leading-tight">
              <strong className="block text-[15px] font-black text-white tracking-[.5px]">Eagle Adventure</strong>
              <span className="text-[9.5px] tracking-[2.5px] uppercase" style={{ color: "var(--gold)" }}>& Tourism · SMC-Pvt Ltd</span>
            </div>
          </Link>
          <p className="text-[13.5px] leading-[1.8] my-4" style={{ color: "var(--muted)" }}>
            Eagle Flying Club — Chitral&apos;s premier paragliding team since 2014. Promoting adventure tourism in the heart of the Hindukush, Booni, Pakistan.
          </p>
          <div className="flex gap-2.5">
            {[
              { href: "https://www.facebook.com/eagleadventureandtourism/", label: "f" },
              { href: "https://wa.me/923038989750",                         label: "💬" },
              { href: "mailto:eagleflyingclubbooni@gmail.com",              label: "@" },
            ].map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-[9px] flex items-center justify-center text-[15px] no-underline border transition-all hover:bg-[--gold] hover:border-[--gold]"
                style={{ background: "var(--navy2)", borderColor: "rgba(255,255,255,.08)" }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(nav).map(([title, items]) => (
          <div key={title}>
            <h5 className="text-[12px] font-bold tracking-[1.5px] uppercase mb-5">{title}</h5>
            <ul className="list-none flex flex-col gap-3">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13.5px] no-underline transition-colors hover:text-[--gold]" style={{ color: "var(--muted)" }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-[12.5px]"
        style={{ borderColor: "rgba(255,255,255,.07)", color: "var(--muted)" }}>
        <span>© 2025 Eagle Adventure and Tourism (SMC-Private) Limited · Booni, Chitral, Pakistan</span>
        <span>Built with ❤️ for <a href="#hero" className="no-underline hover:underline" style={{ color: "var(--gold)" }}>the love of flying</a></span>
      </div>
    </footer>
  );
}
