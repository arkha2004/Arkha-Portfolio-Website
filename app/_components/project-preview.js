import Image from "next/image";

function HeartPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#fff]">
      <Image
        src="/heart-disease-preview.png"
        alt=""
        fill
        sizes="(max-width: 1024px) 90vw, 40vw"
        className="object-contain object-top"
      />
    </div>
  );
}

function EventPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f8f7f4]">
      <Image
        src="/event-brief-preview.png"
        alt=""
        fill
        sizes="(max-width: 1024px) 90vw, 40vw"
        className="object-cover object-top"
      />
    </div>
  );
}

export default function ProjectPreview({ kind, title }) {
  return (
    <div role="img" aria-label={`${title} interface preview concept`} className="aspect-[1.2] w-full px-3 pt-3 pb-0 sm:px-4 sm:pt-4">
      <div className="h-full overflow-hidden rounded-xl border border-white/20">
        {kind === "health" ? <HeartPreview /> : <EventPreview />}
      </div>
    </div>
  );
}
