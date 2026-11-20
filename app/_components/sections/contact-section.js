"use client";

import { useState } from "react";

const email = "arkha.the.coder@gmail.com";
const card = "rounded-[24px] border border-white/10 bg-white/[0.025] p-6 sm:p-8";
const field = "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-[#f5f5f3] outline-none transition focus:border-[var(--blue)] placeholder:text-[#777980]";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(email);
      else {
        const input = document.createElement("textarea");
        input.value = email;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        const success = document.execCommand("copy");
        input.remove();
        if (!success) throw new Error("Copy failed");
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch { setCopied(false); }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <h2 id="contact-title" className="mb-7 text-center font-[var(--font-display)] text-4xl font-bold tracking-[-0.055em] text-[#f5f5f3] sm:text-left sm:text-5xl">Let’s talk</h2>
      <p className="mx-auto mb-7 max-w-lg text-center text-sm leading-7 text-[#a4a5ab] sm:hidden">I’m excited to apply my skills to your projects. Contact me to learn more about how I can contribute.</p>
      <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr]">
        <form className={`${card} flex flex-col`} action={`mailto:${email}`} method="post" encType="text/plain">
          <p className="hidden max-w-lg text-sm leading-7 text-[#a4a5ab] sm:block">I’m excited to apply my skills to your projects. Contact me to learn more about how I can contribute.</p>
          <label className="mt-7 text-sm" htmlFor="contact-email">Your email</label>
          <input className={field} id="contact-email" name="email" type="email" placeholder="you@example.com" required />
          <label className="mt-5 text-sm" htmlFor="contact-message">Your message</label>
          <textarea className={`${field} min-h-36 resize-y`} id="contact-message" name="message" placeholder="Tell me a little about it…" required />
          <button className="mt-6 self-center rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-[var(--blue)] hover:bg-[var(--blue)] hover:text-[#07111a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--blue)]" type="submit">Send message <span aria-hidden="true">↗</span></button>
        </form>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className={`${card} flex flex-col max-sm:rounded-full`}>
            <h3 className="hidden font-[var(--font-display)] text-2xl sm:block">Reach me</h3>
            <div className="mt-0 flex flex-1 flex-row items-center justify-around gap-2 sm:mt-6 sm:flex-col sm:items-stretch sm:justify-between sm:gap-4">
              <div aria-label="Phone" className="flex items-center gap-4"><span className="grid size-14 shrink-0 place-items-center rounded-full border-[3px] border-[#a855f7] text-[#c084fc]"><svg aria-hidden="true" viewBox="0 0 48 48" className="size-9 -translate-x-0.5 translate-y-0.5" fill="none"><path d="M14 9c-2 1-4 4-3 7 3 11 10 18 21 21 3 1 6-1 7-4l1-4-9-5-4 5c-4-2-7-5-9-9l5-4-5-9-4 2Z" fill="currentColor"/><path d="M29 11c4 1 7 4 8 8m-9-14c7 1 13 7 14 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg></span><div className="hidden flex-1 text-left sm:block"><p className="text-xs uppercase tracking-[.16em] text-[#85868a]">Phone</p></div></div>
              <a aria-label="WhatsApp" className="flex items-center gap-4 text-[#a4a5ab] transition hover:text-white" href={`https://wa.me/?text=${encodeURIComponent('Hi Arkha, I saw your portfolio.')}`} target="_blank" rel="noreferrer"><span className="grid size-[52px] shrink-0 place-items-center"><img src="/whatsapp-color.svg" alt="" className="size-[52px] object-contain" /></span><span className="hidden flex-1 text-left sm:block"><span className="block text-xs uppercase tracking-[.16em] text-[#85868a]">WhatsApp</span></span></a>
              <button aria-label={copied ? "Email copied" : "Copy email address"} className="flex items-center gap-4 text-left text-[#a4a5ab] transition hover:text-white" onClick={copyEmail} type="button"><span className="grid size-14 shrink-0 place-items-center rounded-full border-[3px] border-[#008cff] text-[#008cff]"><svg aria-hidden="true" viewBox="0 0 48 48" className="size-8" fill="none"><rect x="5" y="9" width="38" height="30" rx="8" stroke="currentColor" strokeWidth="4"/><path d="m8 13 16 13 16-13" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="hidden flex-1 text-left sm:block"><span className="block text-xs uppercase tracking-[.16em] text-[#85868a]">Email</span></span></button>
            </div>
          </div>
          <div className={`${card} hidden flex-col sm:flex`}>
            <h3 className="font-[var(--font-display)] text-2xl">Find me at</h3>
            <div className="mt-6 flex flex-1 flex-col gap-3">
              <a className="flex flex-1 items-center justify-between rounded-2xl border border-white/10 bg-[#0a66c2]/20 px-5 text-lg transition hover:border-white/30" href="https://www.linkedin.com/in/arkhaprava-mishra-1183a1321/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a className="flex flex-1 items-center justify-between rounded-2xl border border-white/10 bg-white/[.035] px-5 text-lg transition hover:border-white/30" href="https://github.com/arkha2004" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className={`${card} relative min-h-36 overflow-hidden rounded-full p-0 sm:col-span-2`}>
            <img className="absolute inset-0 size-full scale-100 object-cover object-[center_55%] brightness-75 sm:scale-110 sm:object-[center_80%]" src="/handshake.jpg" alt="Two people shaking hands" />
          </div>
        </div>
      </div>
      {copied && <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-[#f5f5f3] px-5 py-3 text-sm font-semibold text-[#141519] shadow-xl" role="status" aria-live="polite">Email copied</div>}
    </section>
  );
}
