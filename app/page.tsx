import { Nav } from "@/components/portfolio/nav"
import { Socials } from "@/components/portfolio/socials"
import { AboutSection } from "@/components/portfolio/about-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { Spotlight } from "@/components/portfolio/spotlight"
import { Footer } from "@/components/portfolio/footer"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Spotlight />
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Left Column - Sticky Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:max-w-md lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <a href="/">Sebastián Arriola</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium text-foreground/80 tracking-tight">
                Full Stack Developer SSR
              </h2>
              <p className="mt-4 max-w-xs text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium">
            4 años de experiencia.
          </span> Especializado en el desarrollo de aplicaciones web y móviles.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" size="lg" className="gap-2 border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary">
                  <a href="/Sebastian_Arriola_CV.pdf" download>
                    <FileText className="size-4" />
                    Descargar Curriculum
                  </a>
                </Button>
              </div>
              <div className="mt-16">
                <Nav />
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <Socials />
            </div>
          </header>

          {/* Right Column - Scrollable Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <div className="flex flex-col gap-24 lg:gap-36">
              {/* <AboutSection /> */}
              <ExperienceSection />
              <ProjectsSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
