import Image from "next/image";

function TechIcon({ icon }) {
  const logoFiles = {
    next: "nextjs",
    node: "nodejs",
    react: "react",
    express: "express",
    mongodb: "mongodb",
    tailwind: "tailwind",
  };

  if (logoFiles[icon]) {
    return <Image src={`/tech-stack/${logoFiles[icon]}.svg`} alt="" width={24} height={24} className="size-6 object-contain" />;
  }

  if (icon === "python") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="size-6">
        <path d="M15.8 3.5c-6.4 0-6 2.8-6 2.8v3.1h6.1v1H7.4S3 9.9 3 16.3s3.8 6.2 3.8 6.2h2.3v-3.2s-.1-3.8 3.8-3.8h6.2s3.5.1 3.5-3.4V7.1s.5-3.6-6.8-3.6Zm-3.4 2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" fill="#3475a9" />
        <path d="M16.2 28.5c6.4 0 6-2.8 6-2.8v-3.1h-6.1v-1h8.5s4.4.5 4.4-5.9-3.8-6.2-3.8-6.2h-2.3v3.2s.1 3.8-3.8 3.8h-6.2s-3.5-.1-3.5 3.4v5s-.5 3.6 6.8 3.6Zm3.4-2a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z" fill="#f1c83b" />
      </svg>
    );
  }

  if (icon === "machine-learning") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-6">
        <path d="m8 8 8 8-8 8m16-16-8 8 8 8M16 4v24" stroke="#293a46" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="8" r="2.5" fill="#8ab4c8" /><circle cx="8" cy="24" r="2.5" fill="#8ab4c8" />
        <circle cx="24" cy="8" r="2.5" fill="#8ab4c8" /><circle cx="24" cy="24" r="2.5" fill="#8ab4c8" /><circle cx="16" cy="16" r="3" fill="#293a46" />
      </svg>
    );
  }

  if (icon === "render") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-6">
        <path d="M6 8h15a5 5 0 0 1 0 10h-4l9 7h-7l-9-7H6v-5h15a1 1 0 0 0 0-2H6V8Z" fill="#35444b" />
      </svg>
    );
  }

  if (icon === "next") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-6">
        <circle cx="16" cy="16" r="13" stroke="#111" strokeWidth="2" />
        <path d="M9 22V10l14 13V10" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "react") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-6">
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#149eca" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" stroke="#149eca" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" stroke="#149eca" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2.4" fill="#149eca" />
      </svg>
    );
  }

  if (icon === "node") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-6">
        <path d="m16 2.8 12 6.9v13.8l-12 6.9-12-6.9V9.7l12-6.9Z" fill="#559b42" />
        <path d="M12 21.2V11h2l5 6.7V11h2v10.2h-2l-5-6.7v6.7h-2Z" fill="white" />
      </svg>
    );
  }

  if (icon === "express") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-6">
        <path d="M5 9h22M5 16h18M5 23h22" stroke="#303334" strokeWidth="2.3" strokeLinecap="round" />
        <circle cx="25" cy="16" r="2.5" fill="#89a8b8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-7">
      <path d="M16 28V12M16 17C6 17 5 9 5 5c7 0 11 2 11 12ZM16 21c10 0 11-8 11-12-7 0-11 2-11 12Z" stroke="#168c80" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TechStack({ technologies, projectTitle }) {
  return (
    <ul className="flex items-center gap-1.5" aria-label={`${projectTitle} technology stack`}>
      {technologies.map((technology) => (
        <li key={technology.name} className="grid size-9 place-items-center rounded-full border border-[var(--light-line)] bg-[var(--light-paper)]">
          <span className="sr-only">{technology.name}</span>
          <TechIcon icon={technology.icon} />
        </li>
      ))}
    </ul>
  );
}
