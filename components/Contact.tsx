"use client";
import { useEffect, useRef, useState } from "react";

const contactItems = [
  { icon: "📍", label: "Location",        value: "Booni, Chitral, Khyber Pakhtunkhwa, Pakistan", href: null },
  { icon: "📞", label: "Phone / WhatsApp", value: "+92 303 8989750",     href: "tel:+923038989750" },
  { icon: "✉️", label: "Email",           value: "eagleflyingclubbooni@gmail.com", href: "mailto:eagleflyingclubbooni@gmail.com" },
  { icon: "🌐", label: "Website",         value: "efcbooni.com",          href: "https://efcbooni.com" },
  { icon: "🕐", label: "Best Season",     value: "Open Year-Round · Best Flying: May – October", href: null },
];

const adventures = [
  "🪂 Tandem Paragliding (Single Flight)",
  "🎓 Paragliding Training Course",
  "🏔️ Mountain Trekking",
  "🏞️ Scenic Chitral Tour",
  "⛺ Wilderness Camping",
  "👨‍👩‍👧 Custom Group Package",
];

export default function Contact() {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", adventure: "", date: "", people: "1 Person", message: "" });

  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("up"); io.unobserve(e.target); } }), { threshold: 0.08 });
    [leftRef, rightRef].forEach(r => r.current && io.observe(r.current));
    return () => io.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.firstName) return;

    const msg = [
      `🦅 *New Booking Request — Eagle Adventure & Tourism*`,
      ``,
      `👤 *Name:* ${form.firstName} ${form.lastName}`,
      `📧 *Email:* ${form.email || "—"}`,
      `📞 *WhatsApp:* ${form.phone || "—"}`,
      `🪂 *Adventure:* ${form.adventure || "—"}`,
      `📅 *Date:* ${form.date || "—"}`,
      `👥 *People:* ${form.people}`,
      `💬 *Message:* ${form.message || "—"}`,
    ].join("\n");

    const url = `https://wa.me/923038989750?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSent(true);
  }

  const inputCls = "w-full rounded-lg px-4 py-3.5 text-[14px] text-white border outline-none transition-all focus:border-[--gold]";
  const inputStyle = { background: "var(--navy2)", borderColor: "rgba(255,255,255,.1)" };

  return (
    <section id="contact" className="grid md:grid-cols-2 gap-[70px] items-start px-[6%] py-[100px]" style={{ background: "var(--navy2)" }}>
      {/* Info */}
      <div ref={leftRef} className="reveal-left">
        <span className="eyebrow mb-4">Get In Touch</span>
        <h2 className="font-[family-name:var(--font-playfair)] leading-[1.1] mb-3" style={{ fontSize: "clamp(32px,4.5vw,54px)" }}>
          Ready to Fly?<br /><span className="italic" style={{ color: "var(--gold)" }}>Let&apos;s Talk.</span>
        </h2>
        <div style={{ width: 40, height: 1, background: "var(--gold)", opacity: .5, marginBottom: 24 }} />
        <p className="text-[15px] leading-[1.85] mb-9" style={{ color: "var(--muted)" }}>
          Book your paragliding session, enquire about a tour, or just say hello. We respond fast on WhatsApp.
        </p>

        <div className="flex flex-col gap-[18px]">
          {contactItems.map((c) => (
            <div key={c.label} className="flex items-start gap-4">
              <div className="w-12 h-12 min-w-[48px] flex items-center justify-center rounded-xl text-[20px] border"
                style={{ background: "rgba(201,162,39,.12)", borderColor: "rgba(201,162,39,.3)" }}>{c.icon}</div>
              <div>
                <strong className="block text-[11.5px] tracking-[.5px] uppercase mb-1" style={{ color: "var(--muted)" }}>{c.label}</strong>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="text-[15px] text-white no-underline hover:text-[--gold] transition-colors">{c.value}</a>
                ) : (
                  <span className="text-[15px]">{c.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-9">
          <a href="https://wa.me/923038989750" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-extrabold text-[14px] no-underline transition-all hover:-translate-y-1 hover:brightness-110"
            style={{ background: "var(--gold)", color: "var(--navy)" }}>💬 WhatsApp Us</a>
          <a href="https://www.facebook.com/eagleadventureandtourism/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-bold text-[14px] text-white no-underline border-2 transition-all hover:-translate-y-1 hover:border-[--gold]"
            style={{ borderColor: "rgba(255,255,255,.35)" }}>Facebook</a>
        </div>
      </div>

      {/* Form */}
      <div ref={rightRef} className="reveal-right rounded-[22px] p-11 border" style={{ background: "var(--navy3)", borderColor: "rgba(255,255,255,.07)" }}>
        {sent ? (
          <div className="text-center py-16">
            <div className="text-[64px] mb-4">🦅</div>
            <h3 className="text-[24px] font-bold mb-3">Booking Sent!</h3>
            <p className="text-[15px] leading-[1.8]" style={{ color: "var(--muted)" }}>
              Thank you, {form.firstName}! Our team will contact you on WhatsApp ({form.phone || "your number"}) very soon. Get ready to fly! 🪂
            </p>
            <button onClick={() => setSent(false)} className="mt-8 px-8 py-3 rounded-lg font-bold text-[14px] cursor-pointer border-none"
              style={{ background: "var(--gold)", color: "var(--navy)" }}>Send Another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="text-[24px] font-bold mb-7">🪂 Book Your Adventure</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "First Name", key: "firstName", type: "text", placeholder: "Ali", full: false },
                { label: "Last Name",  key: "lastName",  type: "text", placeholder: "Khan", full: false },
                { label: "Email",      key: "email",     type: "email", placeholder: "your@email.com", full: false },
                { label: "WhatsApp",   key: "phone",     type: "tel",   placeholder: "+92 xxx xxxxxxx", full: false },
              ].map((f) => (
                <div key={f.key} className={`flex flex-col gap-1.5 mb-3 ${f.full ? "col-span-2" : ""}`}>
                  <label className="text-[11.5px] font-bold tracking-[.5px] uppercase" style={{ color: "var(--muted)" }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} required={f.key === "firstName"}
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    className={inputCls} style={inputStyle} />
                </div>
              ))}
              <div className="col-span-2 flex flex-col gap-1.5 mb-3">
                <label className="text-[11.5px] font-bold tracking-[.5px] uppercase" style={{ color: "var(--muted)" }}>Adventure Type</label>
                <select value={form.adventure} onChange={e => setForm(p => ({ ...p, adventure: e.target.value }))} className={inputCls} style={inputStyle}>
                  <option value="">Choose an experience...</option>
                  {adventures.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5 mb-3">
                <label className="text-[11.5px] font-bold tracking-[.5px] uppercase" style={{ color: "var(--muted)" }}>Preferred Date</label>
                <input type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} className={inputCls} style={inputStyle} />
              </div>
              <div className="flex flex-col gap-1.5 mb-3">
                <label className="text-[11.5px] font-bold tracking-[.5px] uppercase" style={{ color: "var(--muted)" }}>Number of People</label>
                <select value={form.people} onChange={e => setForm(p => ({ ...p, people: e.target.value }))} className={inputCls} style={inputStyle}>
                  {["1 Person","2 People","3–5 People","6–10 People","10+ People"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="col-span-2 flex flex-col gap-1.5 mb-3">
                <label className="text-[11.5px] font-bold tracking-[.5px] uppercase" style={{ color: "var(--muted)" }}>Message</label>
                <textarea rows={4} placeholder="Tell us your dates, questions, or any special requirements..." value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  className={`${inputCls} resize-y`} style={inputStyle} />
              </div>
            </div>
            <button type="submit" className="w-full py-4 rounded-lg font-extrabold text-[15px] cursor-pointer border-none mt-1 transition-all hover:-translate-y-0.5 hover:brightness-110"
              style={{ background: "var(--gold)", color: "var(--navy)" }}>
              🦅 Send Booking Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
