"use client";

import { useEffect, useState } from "react";

const navLinkBase = "flex min-h-10 items-center justify-center rounded-xl px-[18px] text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)] max-[500px]:min-h-[35px] max-[500px]:px-[14px] max-[500px]:text-xs";

export default function SiteNav() {
  const [overProjects, setOverProjects] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const projects = document.getElementById("projects");
    if (!projects) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOverProjects(entry.isIntersecting),
      { rootMargin: "-24px 0px -75% 0px" },
    );

    observer.observe(projects);
    return () => observer.disconnect();
  }, []);

  const navSurface = overProjects
    ? "border-white/20 bg-black/55 shadow-[0_8px_32px_rgb(0_0_0_/_24%),inset_0_1px_0_rgb(255_255_255_/_12%)]"
    : "border-white/20 bg-white/[0.08] shadow-[0_8px_32px_rgb(0_0_0_/_28%),inset_0_1px_0_rgb(255_255_255_/_12%)]";
  const activeLink = overProjects
    ? "bg-white/[0.16] text-white hover:bg-white/[0.16]"
    : "bg-white/[0.16] text-white shadow-[inset_0_1px_0_rgb(255_255_255_/_12%)] hover:bg-white/[0.16]";
  const inactiveLink = overProjects
    ? "text-white/65 hover:bg-white/[0.12] hover:text-white"
    : "text-[#b6b6bd] hover:bg-[#3c3c42] hover:text-white";

  return (
    <header className="mx-auto grid h-[58px] w-full max-w-6xl shrink-0 grid-cols-[1fr_auto_1fr] items-center px-5 pb-4 sm:px-8 lg:px-12 max-[500px]:h-12 max-[500px]:grid-cols-1 max-[500px]:pb-0">
      <a href="#home" className="mt-4 w-fit justify-self-start rounded-lg border border-[#3a3b40] bg-transparent px-3 py-1.5 text-lg font-[var(--font-display)] text-[#f5f5f3] max-[500px]:mt-0 max-[500px]:-translate-y-2" aria-label="Arkhaprava Mishra, home">
        a<span className="text-blue">.</span>
      </a>

      <nav aria-label="Page navigation" className={`fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-2xl border p-1.5 backdrop-blur-xl transition-colors duration-300 max-[500px]:hidden ${navSurface}`}>
        <a className={`${navLinkBase} ${activeSection === "home" ? activeLink : inactiveLink}`} href="#home" aria-current={activeSection === "home" ? "page" : undefined} onClick={() => setActiveSection("home")}>Home</a>
        <a className={`${navLinkBase} ${activeSection === "projects" ? activeLink : inactiveLink}`} href="#projects" aria-current={activeSection === "projects" ? "page" : undefined} onClick={() => setActiveSection("projects")}>Projects</a>
        <a className={`${navLinkBase} ${activeSection === "contact" ? activeLink : inactiveLink}`} href="#contact" aria-current={activeSection === "contact" ? "page" : undefined} onClick={() => setActiveSection("contact")}>Contact</a>
      </nav>

      <button
        type="button"
        className="fixed right-4 top-[15px] z-[51] flex size-11 items-center justify-center transition-opacity duration-300 min-[501px]:hidden"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <span className="flex w-[22px] flex-col gap-[6px]" aria-hidden="true">
            <span className={`h-0.5 w-full translate-y-2 rotate-45 rounded ${overProjects ? "bg-black" : "bg-white"}`} />
            <span className={`h-0.5 w-full -translate-y-2 -rotate-45 rounded ${overProjects ? "bg-black" : "bg-white"}`} />
          </span>
        ) : (
          <img src="/burger-menu.svg" alt="" aria-hidden="true" className={`size-7 ${overProjects ? "invert" : ""}`} />
        )}
      </button>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/45 min-[501px]:hidden"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav id="mobile-navigation" aria-label="Mobile page navigation" className={`fixed inset-y-0 right-0 z-50 flex w-[78vw] max-w-sm flex-col gap-3 border-l p-6 pt-24 shadow-2xl backdrop-blur-xl min-[501px]:hidden ${navSurface}`}>
            <a className={`${navLinkBase} !min-h-12 !justify-start !text-lg ${activeSection === "home" ? activeLink : inactiveLink}`} href="#home" aria-current={activeSection === "home" ? "page" : undefined} onClick={() => { setActiveSection("home"); setMenuOpen(false); }}>Home</a>
            <a className={`${navLinkBase} !min-h-12 !justify-start !text-lg ${activeSection === "projects" ? activeLink : inactiveLink}`} href="#projects" aria-current={activeSection === "projects" ? "page" : undefined} onClick={() => { setActiveSection("projects"); setMenuOpen(false); }}>Projects</a>
            <a className={`${navLinkBase} !min-h-12 !justify-start !text-lg ${activeSection === "contact" ? activeLink : inactiveLink}`} href="#contact" aria-current={activeSection === "contact" ? "page" : undefined} onClick={() => { setActiveSection("contact"); setMenuOpen(false); }}>Contact</a>
          </nav>
        </>
      )}

      <span className="justify-self-end font-mono text-[9px] tracking-[.12em] text-[#717277] max-[500px]:hidden">PORTFOLIO <span className="text-blue">/</span> 2026</span>
    </header>
  );
}
