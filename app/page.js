import Image from "next/image";
import HeroLinks from "./hero-links";

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-5">
      <circle cx="10" cy="6.5" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 10.5v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="home" className="min-h-svh px-5 pb-7 pt-5 sm:px-8 sm:pt-7 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100svh-3rem)] w-full max-w-6xl flex-col">
        <header className="site-header grid h-[58px] shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b pb-4">
          <a href="#home" className="brand-mark w-fit justify-self-start rounded-lg px-2.5 py-1" aria-label="Arkhaprava Mishra, home">
            a<span>.</span>
          </a>

          <nav aria-label="Page navigation" className="fixed left-1/2 top-6 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-2xl border border-white/10 bg-[#252528] p-1.5 shadow-lg max-[500px]:top-[15px]">
            <a className="flex min-h-10 items-center justify-center rounded-xl bg-[#3c3c42] px-[18px] text-[15px] text-white transition-colors hover:bg-[#3c3c42] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#88a6ff] max-[500px]:min-h-[35px] max-[500px]:px-[14px] max-[500px]:text-xs" href="#home" aria-current="page">Home</a>
            <a className="flex min-h-10 items-center justify-center rounded-xl px-[18px] text-[15px] text-[#b6b6bd] transition-colors hover:bg-[#3c3c42] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#88a6ff] max-[500px]:min-h-[35px] max-[500px]:px-[14px] max-[500px]:text-xs" href="https://github.com/arkha2004" target="_blank" rel="noreferrer">Projects</a>
            <a className="flex min-h-10 items-center justify-center rounded-xl px-[18px] text-[15px] text-[#b6b6bd] transition-colors hover:bg-[#3c3c42] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#88a6ff] max-[500px]:min-h-[35px] max-[500px]:px-[14px] max-[500px]:text-xs" href="#links">Contact</a>
          </nav>

          <span className="header-note">PORTFOLIO <span className="text-blue">/</span> 2026</span>
        </header>

        <section className="hero-layout grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-16">
          <div className="hero-copy max-w-[680px]">
            <div className="availability-pill">
              <span className="availability-dot" aria-hidden="true" />
              <span className="availability-copy">OPEN TO FULL-TIME ROLES</span>
            </div>

            <h1 className="hero-title mt-8" aria-label="I’m Arkhaprava Mishra, a Full Stack Developer">
              <span className="hero-intro-word">I’m</span>
              <span className="hero-line hero-name-line"><strong className="hero-name-text">Arkhaprava Mishra</strong><Image src="/arkhaprava-portrait.jpg" alt="Portrait of Arkhaprava Mishra" width={1024} height={1024} sizes="(max-width: 500px) 65px, 88px" className="statement-image-portrait" preload /></span>
              <span className="hero-line hero-role-line"><strong className="hero-role-text">Full Stack</strong><Image src="/full-stack-visual.jpg" alt="Abstract black-and-white artwork of two hands reaching toward each other" width={1472} height={1472} sizes="(max-width: 500px) 65px, 88px" className="statement-image-square" /><span className="quiet-word hero-role-text">Developer</span></span>
            </h1>

            <p className="location-line"><span className="location-icon"><PinIcon /></span><span>Durgapur, West Bengal, India</span></p>
            <p className="hero-intro">
              I build useful web experiences, bringing careful interfaces and solid engineering together.
            </p>
            <HeroLinks />
          </div>

          <div className="video-space" role="img" aria-label="Reserved space for the introduction video" />
        </section>

        <footer className="page-footer">
          <span>MADE WITH INTENTION</span>
          <span>© 2026 ARKHAPRAVA MISHRA</span>
        </footer>
      </div>
    </main>
  );
}
