import ProjectCard from "../project-card";
import { projects } from "../../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="w-full bg-[var(--light-paper)] py-16 text-[var(--light-ink)] sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="w-full text-center sm:w-auto sm:text-left">
            <h2 id="projects-title" className="font-[var(--font-display)] text-4xl font-bold tracking-[-0.06em] text-[var(--light-ink)] sm:text-5xl">Projects</h2>
          </div>
          <p className="mx-auto w-full max-w-sm text-center text-sm leading-6 text-[var(--light-muted)] sm:mx-0 sm:w-auto sm:text-left">A couple of projects shaped by useful ideas, careful interfaces, and full-stack problem solving.</p>
        </div>

        <div className="project-showcase-grid mx-auto mt-8 w-full max-w-3xl p-3 sm:p-4">
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
