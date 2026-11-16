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
    <section id="home" className="grid min-h-[calc(100svh-9rem)] items-center gap-12 py-12 max-[1023px]:grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-16 max-[500px]:min-w-0 max-[500px]:grid-cols-[minmax(0,1fr)] max-[500px]:gap-8 max-[500px]:py-8 max-[500px]:text-center">
      <div className="@container max-w-[680px] max-[500px]:mx-auto max-[500px]:w-full max-[500px]:min-w-0 max-[500px]:text-center">
        <div className="availability-pill relative isolate inline-flex min-h-[33px] items-center gap-[9px] overflow-hidden rounded-full border border-[#3a4260] bg-[#111521] px-3 font-mono text-[9px] tracking-[.1em] text-[#d7e0ff] max-[500px]:min-h-[30px] max-[500px]:text-[8px]">
          <span className="relative z-[2] size-[7px] shrink-0 rounded-full bg-[#88a6ff]" aria-hidden="true" />
          <span className="relative z-[2]">OPEN TO FULL-TIME ROLES</span>
        </div>

        <h1 className="mt-8 text-[clamp(38px,4vw,62px)] font-[var(--font-display)] font-bold leading-[1.16] tracking-[-0.055em] text-[#85868a] max-[500px]:mt-[22px] max-[500px]:text-[clamp(24px,9vw,32px)] max-[500px]:text-center" aria-label="I’m Arkhaprava Mishra, a Full Stack Developer">
          <span className="mb-[.06em] block text-[.58em] font-semibold leading-none tracking-[-.03em] text-[#85868a]">I’m</span>
          <span className="flex w-fit max-w-full flex-nowrap items-center gap-[.16em] whitespace-nowrap max-[500px]:w-full max-[500px]:justify-center max-[500px]:gap-[.12em]">
            <strong className="order-1 text-[clamp(22px,8.4cqw,57px)] leading-[1.1] tracking-[-.055em] text-[#f6f6f4] max-[500px]:text-[clamp(18px,7.2cqw,31px)]">Arkhaprava</strong>
            <Image src="/arkhaprava-portrait.jpg" alt="Portrait of Arkhaprava Mishra" width={1024} height={1024} sizes="(max-width: 500px) 42px, 88px" className="order-3 h-[clamp(31px,9.5cqw,65px)] w-[clamp(40px,13cqw,88px)] shrink-0 rounded-full border-2 border-[#f5f5f3] object-cover object-center max-[500px]:order-2 max-[500px]:h-[clamp(28px,9.5cqw,42px)] max-[500px]:w-[clamp(36px,12cqw,54px)]" preload />
            <strong className="order-2 text-[clamp(22px,8.4cqw,57px)] leading-[1.1] tracking-[-.055em] text-[#f6f6f4] max-[500px]:order-3 max-[500px]:text-[clamp(18px,7.2cqw,31px)]">Mishra</strong>
          </span>
          <span className="flex w-fit max-w-full flex-nowrap items-center gap-[.16em] whitespace-nowrap max-[500px]:w-full max-[500px]:justify-center max-[500px]:gap-[.12em]">
            <strong className="text-[clamp(22px,7.8cqw,53px)] leading-[1.1] tracking-[-.055em] text-[#f6f6f4] max-[500px]:text-[clamp(18px,7.2cqw,31px)]">Full Stack</strong>
            <Image src="/full-stack-visual.jpg" alt="Abstract black-and-white artwork of two hands reaching toward each other" width={1472} height={1472} sizes="(max-width: 500px) 42px, 88px" className="h-[clamp(31px,9.5cqw,65px)] w-[clamp(40px,13cqw,88px)] shrink-0 rounded-[13px] border-[1.5px] border-[#eee] object-cover max-[500px]:h-[clamp(28px,9.5cqw,42px)] max-[500px]:w-[clamp(36px,12cqw,54px)]" />
            <span className="text-[clamp(22px,7.8cqw,53px)] font-semibold leading-[1.1] tracking-[-.055em] text-[#85868a] max-[500px]:text-[clamp(18px,7.2cqw,31px)]">Developer</span>
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

      <div className="aspect-[16/10] min-h-[240px] w-full border border-[#292b31] bg-[#070708] max-[1023px]:max-w-[650px] max-[500px]:mx-auto max-[500px]:min-w-0 max-[500px]:min-h-0" role="img" aria-label="Reserved space for the introduction video" />
    </section>
  );
}
