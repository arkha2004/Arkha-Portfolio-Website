import SiteNav from "./_components/site-nav";
import SiteFooter from "./_components/site-footer";
import HomeSection from "./_components/sections/home-section";
import ProjectsSection from "./_components/sections/projects-section";
import ContactSection from "./_components/sections/contact-section";

export default function Page() {
  return (
    <div className="min-h-svh pb-7 pt-5">
      <SiteNav />

      <main>
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <HomeSection />
        </div>
        <ProjectsSection />
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
          <ContactSection />
        </div>
      </main>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <SiteFooter />
      </div>
    </div>
  );
}
