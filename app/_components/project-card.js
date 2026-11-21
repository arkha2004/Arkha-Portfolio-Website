import ProjectPreview from "./project-preview";
import TechStack from "./tech-stack";

function ExternalArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="size-3.5">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V8.99h3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
    </svg>
  );
}

function ProjectLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full border-2 border-[var(--blue)] bg-transparent px-3 text-xs font-bold text-[var(--blue)] shadow-[0_2px_8px_rgb(0_140_255_/_18%)] transition-colors hover:bg-[rgb(0_140_255_/_8%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)]">
      {children}<ExternalArrow />
    </a>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-glass-card overflow-hidden rounded-2xl bg-transparent text-[var(--light-ink)]">
      <ProjectPreview kind={project.preview} title={project.title} />

      <div className="project-card-content flex min-h-[190px] flex-col bg-transparent p-3 sm:p-4">
        <h3 className="font-[var(--font-display)] text-xl font-bold leading-tight tracking-[-.04em] sm:text-2xl">{project.title}</h3>
        <p className="mt-3 text-[13px] leading-6 text-[var(--light-muted)]">{project.description}</p>

        <div className="mt-auto flex flex-col items-start gap-4 pt-6">
          <TechStack technologies={project.technologies} projectTitle={project.title} />
          <div className="flex items-center gap-2">
            <ProjectLink href={project.website}>Website</ProjectLink>
            <ProjectLink href={project.github}>GitHub</ProjectLink>
            {project.linkedin && <ProjectLink href={project.linkedin}><LinkedInMark /><span className="text-[13px] max-[392px]:hidden">post</span></ProjectLink>}
          </div>
        </div>
      </div>
    </article>
  );
}
