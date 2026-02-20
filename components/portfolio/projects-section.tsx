import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Star } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Guitars South",
    description:
      "E-commerce desarrollado en React utilizando Redux Toolkit y Firebase Database. Permite la simulación de un proceso de compra completo, incluyendo la selección de productos, gestión del carrito, y finalización de la compra. El proyecto se enfoca en ofrecer una experiencia de usuario fluida y eficiente, con un diseño moderno y responsive.",
    technologies: ["React", "Firebase", "React-Redux"],
    image: "/portfolio/banner.png",
    url: "https://ecommerce-react-coderhouse.netlify.app/"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-sm font-semibold tracking-widest text-foreground mb-8 lg:hidden">
        PROYECTOS
      </h2>
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-lg p-4 -mx-4 transition-all duration-300 hover:bg-secondary/60"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="shrink-0 sm:w-32 sm:pt-1">
                <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-md overflow-hidden border border-border/50 bg-secondary">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                  {project.title}
                  <ArrowUpRight className="inline-block ml-1 size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-3 flex items-center gap-4">
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-0 text-xs font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
