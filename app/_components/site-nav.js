const navLinkBase = "flex min-h-10 items-center justify-center rounded-xl px-[18px] text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)] max-[500px]:min-h-[35px] max-[500px]:px-[14px] max-[500px]:text-xs";

export default function SiteNav() {
  return (
    <header className="mx-auto grid h-[58px] w-full max-w-6xl shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b border-[#242529] px-5 pb-4 sm:px-8 lg:px-12 max-[500px]:h-12 max-[500px]:grid-cols-1 max-[500px]:border-b-0 max-[500px]:pb-0">
      <a href="#home" className="w-fit justify-self-start rounded-lg border border-[#3a3b40] bg-transparent px-2.5 py-1 font-[var(--font-display)] text-[#f5f5f3] max-[500px]:hidden" aria-label="Arkhaprava Mishra, home">
        a<span className="text-blue">.</span>
      </a>

      <nav aria-label="Page navigation" className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-2xl border border-white/20 bg-white/[0.08] p-1.5 shadow-[0_8px_32px_rgb(0_0_0_/_28%),inset_0_1px_0_rgb(255_255_255_/_12%)] backdrop-blur-xl max-[500px]:top-[15px]">
        <a className={`${navLinkBase} bg-white/[0.16] text-white shadow-[inset_0_1px_0_rgb(255_255_255_/_12%)] hover:bg-white/[0.16]`} href="#home" aria-current="page">Home</a>
        <a className={`${navLinkBase} text-[#b6b6bd] hover:bg-[#3c3c42] hover:text-white`} href="#projects">Projects</a>
        <a className={`${navLinkBase} text-[#b6b6bd] hover:bg-[#3c3c42] hover:text-white`} href="#contact">Contact</a>
      </nav>

      <span className="justify-self-end font-mono text-[9px] tracking-[.12em] text-[#717277] max-[500px]:hidden">PORTFOLIO <span className="text-blue">/</span> 2026</span>
    </header>
  );
}
