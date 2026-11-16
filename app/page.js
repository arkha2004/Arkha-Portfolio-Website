import SiteNav from "./_components/site-nav";
import SiteFooter from "./_components/site-footer";
import HomeSection from "./_components/sections/home-section";
import ProjectsSection from "./_components/sections/projects-section";
import ContactSection from "./_components/sections/contact-section";

export default function Page() {
  return (
    <div className="min-h-svh px-5 pb-7 pt-5 sm:px-8 sm:pt-7 lg:px-12">
      <SiteNav />

      <main className="mx-auto w-full max-w-6xl">
        <HomeSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <div className="mx-auto w-full max-w-6xl">
        <SiteFooter />
      </div>
    </div>
  );
}
