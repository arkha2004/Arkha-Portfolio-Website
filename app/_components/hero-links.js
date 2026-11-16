"use client";

import { useEffect, useRef, useState } from "react";

const emailAddress = "arkha.the.coder@gmail.com";
const iconLinkClass = "grid h-9 w-[26px] shrink-0 place-items-center border-0 bg-transparent p-0 text-[#a4a5ab] transition-[color,transform] duration-200 hover:-translate-y-px hover:text-[#f5f5f3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#88a6ff] max-[500px]:w-[22px]";

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
      <path d="M5 2.5h6l4 4v11H5v-15Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M11 2.8v4h3.7M10 9.5v5m0 0-2-2m2 2 2-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V8.99h3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.4-1.22.72-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.43.1-2.98 0 0 .95-.3 3.05 1.15a10.62 10.62 0 0 1 5.56 0c2.1-1.45 3.05-1.15 3.05-1.15.6 1.55.22 2.7.1 2.98.72.78 1.16 1.78 1.16 3 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.05v3.04c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 6 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroLinks() {
  const [toastMessage, setToastMessage] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  function showToast(message) {
    window.clearTimeout(timeoutRef.current);
    setToastMessage(message);
    timeoutRef.current = window.setTimeout(() => setToastMessage(""), 2200);
  }

  async function copyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const emailField = document.createElement("textarea");
        emailField.value = emailAddress;
        emailField.setAttribute("readonly", "");
        emailField.style.position = "fixed";
        emailField.style.opacity = "0";
        document.body.appendChild(emailField);
        emailField.select();
        const copied = document.execCommand("copy");
        emailField.remove();
        if (!copied) throw new Error("Clipboard copy failed");
      }
      showToast("Email copied");
    } catch {
      showToast("Couldn’t copy email");
    }
  }

  return (
    <>
      <div id="links" className="mt-7 flex flex-wrap items-center gap-[18px] max-[500px]:mt-[22px] max-[500px]:flex-nowrap max-[500px]:justify-center max-[500px]:gap-[10px]" role="group" aria-label="Resume and profile links">
        <a className="inline-flex min-h-12 items-center gap-[18px] rounded-[7px] border border-[#383a42] px-[17px] text-[15px] font-semibold text-[#f2f2f0] transition-[border-color,background-color] duration-200 hover:border-[#747783] hover:bg-[#0d0e11] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#88a6ff] max-[500px]:min-h-10 max-[500px]:gap-[10px] max-[500px]:px-[10px] max-[500px]:text-[13px]" href="/Arkhaprava_Mishra_Resume.pdf" download="Arkhaprava_Mishra_Resume.pdf">
          <span>Resume</span>
          <DownloadIcon />
        </a>

        <a className={iconLinkClass} href="https://www.linkedin.com/in/arkhaprava-mishra-1183a1321/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <LinkedInIcon />
        </a>

        <a className={iconLinkClass} href="https://github.com/arkha2004" target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <GitHubIcon />
        </a>

        <button className={`${iconLinkClass} cursor-pointer`} type="button" onClick={copyEmail} aria-label={`Copy ${emailAddress}`} title="Copy email address">
          <EmailIcon />
        </button>
      </div>

      {toastMessage && <div className="fixed bottom-[26px] left-1/2 z-50 max-w-[calc(100vw-32px)] -translate-x-1/2 whitespace-nowrap rounded-full border border-[#d7d8dc] bg-[#f5f5f3] px-[18px] py-3 text-[13px] font-semibold text-[#141519] shadow-[0_12px_35px_rgb(0_0_0_/_32%)]" role="status" aria-live="polite">{toastMessage}</div>}
    </>
  );
}
