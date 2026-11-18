export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto flex min-h-[55svh] w-full max-w-6xl scroll-mt-24 items-center py-24">
      <div className="w-full text-center sm:text-left">
        <h2 id="contact-title" className="font-[var(--font-display)] text-4xl font-bold tracking-[-0.055em] text-[#f5f5f3] sm:text-5xl">Contact</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#85868a]">Have a project or opportunity in mind? I’d love to hear from you.</p>
        <a className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-[#f5f5f3] transition-colors hover:border-white/40" href="mailto:arkha.the.coder@gmail.com">arkha.the.coder@gmail.com</a>
      </div>
    </section>
  );
}
