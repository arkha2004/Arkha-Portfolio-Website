import Image from "next/image";
import HeroLinks from "../hero-links";

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-5">
      <circle cx="10" cy="6.5" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 10.5v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function HomeSection() {
  return (
    <section className="home-hero grid min-h-[calc(100svh-9rem)] items-center gap-12 py-12 max-[1023px]:grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-16 max-[500px]:min-w-0 max-[500px]:grid-cols-[minmax(0,1fr)] max-[500px]:gap-8 max-[500px]:py-8 max-[500px]:text-center">
      <div className="@container max-w-[680px] max-[500px]:mx-auto max-[500px]:w-full max-[500px]:min-w-0 max-[500px]:text-center">
        <div className="availability-pill relative isolate inline-flex min-h-[33px] items-center gap-[9px] overflow-hidden rounded-full border border-[#3a4260] bg-[#111521] px-3 font-mono text-[9px] tracking-[.1em] text-[#d7e0ff] max-[500px]:min-h-[30px] max-[500px]:text-[8px]">
          <span className="relative z-[2] size-[7px] shrink-0 rounded-full bg-[var(--blue)]" aria-hidden="true" />
          <span className="relative z-[2]">OPEN TO FULL-TIME ROLES</span>
        </div>

        <h1 className="home-hero-title mt-8 text-[clamp(38px,4vw,62px)] font-[var(--font-display)] font-bold leading-[1.05] tracking-[-0.055em] text-[#85868a] max-[500px]:mt-[22px] max-[500px]:text-[clamp(24px,9vw,32px)] max-[500px]:text-center" aria-label="I’m Arkhaprava Mishra, a Full Stack Developer">
          <span className="home-hero-intro mb-0 block text-[.58em] font-semibold leading-none tracking-[-.03em] text-[#85868a] max-[500px]:text-[.75em]">I’m</span>
          <span className="-mt-[6px] flex w-fit max-w-full flex-nowrap items-center gap-[.16em] whitespace-nowrap max-[500px]:mt-0 max-[500px]:w-full max-[500px]:justify-center max-[500px]:gap-[.3em]">
            <strong className="home-hero-name order-1 text-[clamp(22px,8.4cqw,57px)] leading-none tracking-[-.055em] text-[#f6f6f4] max-[500px]:text-[clamp(22px,8.6cqw,38px)]">Arkhaprava</strong>
            <span className="order-3 relative block h-[clamp(53px,17.6cqw,118px)] w-[clamp(53px,17.6cqw,118px)] shrink-0 overflow-hidden rounded-[42%] border-2 border-[#f5f5f3] bg-[#1996ff] max-[500px]:hidden">
              <Image src="/picofme.png" alt="Portrait of Arkhaprava Mishra" fill sizes="(max-width: 500px) 63px, 118px" className="object-cover object-center" preload />
            </span>
            <strong className="home-hero-name order-2 text-[clamp(22px,8.4cqw,57px)] leading-none tracking-[-.055em] text-[#f6f6f4] max-[500px]:order-3 max-[500px]:text-[clamp(22px,8.6cqw,38px)]">Mishra</strong>
          </span>
          <span className="-mt-[2px] flex w-fit max-w-full flex-nowrap items-center gap-[.16em] whitespace-nowrap max-[500px]:mt-[5px] max-[500px]:w-full max-[500px]:justify-center max-[500px]:gap-[.3em]">
            <strong className="home-hero-role text-[clamp(22px,7.8cqw,53px)] leading-none tracking-[-.055em] text-[#f6f6f4] max-[500px]:text-[clamp(22px,8.6cqw,38px)]">
              <span className="max-[500px]:hidden">Full Stack</span>
              <span className="hidden max-[500px]:inline-flex max-[500px]:gap-[.3em]"><span>Full</span><span>Stack</span></span>
            </strong>
            <span className="relative h-[clamp(35px,10.5cqw,73px)] w-[clamp(50px,16.15cqw,110px)] shrink-0 self-end translate-x-1 translate-y-0 overflow-hidden rounded-[16px] border-[1.5px] border-[#eee] max-[500px]:hidden">
              <Image src="/moodboard-web.jpg" alt="The word WEB on a black background" fill sizes="(max-width: 500px) 52px, 110px" className="translate-y-1 scale-[1.7] object-cover" />
            </span>
            <span className="home-hero-role text-[clamp(22px,7.8cqw,53px)] font-semibold leading-none tracking-[-.055em] text-[#85868a] max-[500px]:text-[clamp(22px,8.6cqw,38px)]">Developer</span>
          </span>
        </h1>

        <p className="mt-[21px] flex items-center gap-[10px] text-[14px] leading-[1.5] text-[#c2c2c5] max-[500px]:mt-[15px] max-[500px]:justify-center max-[500px]:gap-2 max-[500px]:text-[13px]">
          <span className="grid place-items-center text-[#f5f5f3]"><PinIcon /></span>
          <span>Durgapur, West Bengal, India</span>
        </p>
        <p className="mt-[26px] max-w-[490px] text-[14px] leading-[1.9] text-[#85868a] max-[500px]:mx-auto max-[500px]:mt-[18px] max-[500px]:text-[13px] max-[500px]:leading-[1.7]">
          I build useful web experiences, bringing careful interfaces and solid engineering together.
        </p>
        <HeroLinks />
      </div>

      <div className="home-hero-video relative aspect-video w-full overflow-hidden border border-[#292b31] bg-[#070708] max-[1023px]:max-w-[650px] max-[500px]:mx-auto max-[500px]:min-w-0">
        <iframe
          src="https://player.vimeo.com/video/1248752165?transparent=0"
          title="Introduction video"
          className="absolute inset-0 block h-full w-full border-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
