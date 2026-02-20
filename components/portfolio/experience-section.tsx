import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

interface Experience {
  id: number
  period: string
  title: string
  company: string
  url: string
  items: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    id:1,
    period: "2024 — ACTUALIDAD",
    title: "Full Stack Developer",
    company: "Seidor",
    url: "https://www.seidor.com/es-ar",
    items: [
      "Desarrollo de aplicación web en Next.js y PostgreSQL para la generación de pedidos de compra en SAP Business One, reduciendo licencias SAP y costos operativos.",
      "Integraciones .NET 8 entre SAP Business One y Tienda Nube, sincronizando artículos, precios, socios de negocio, facturación y pagos mediante webhooks, reduciendo tareas manuales y errores operativos.",
      "Desarrollo de solución en .NET 8 para procesar conjuntos de piezas de SolidWorks y generar automáticamente BOMs en SAP Business One, reduciendo la carga manual y los tiempos de alta.",
      "Mantenimiento y evolución de APIs REST que integran SAP Business One con distintos sistemas externos (Salesforce, Tienda Nube, entre otros)."
    ],
    technologies: ["Next.js", "TypeScript", "React", ".NET", "PostgreSQL"],
  },
  {
    id:2,
    period: "2023 — 2024",
    title: "Full Stack Developer",
    company: "Zarcom Solutions",
    url: "https://www.zarcom.com.ar/",
    items: [
      "Desarrollo y mantenimiento de plataforma web (AngularJS + API REST .NET) y aplicación móvil en Flutter, integradas con Oracle DB, para gestión geoespacial y tracking de flotas en tiempo real, mejorando la visibilidad operativa y reduciendo tiempos de respuesta.",
      "Diseño y optimización de stored procedures, jobs y queries en Oracle para el procesamiento eficiente de datos geográficos y operativos",
    ],
    technologies: ["AngularJS", ".NET", "Flutter", "SQL Oracle"],
  },
  {
    id:3,
    period: "2022 — 2023",
    title: "Front End Developer",
    company: "Artech",
    url: "https://www.artech-consulting.com.ar/",
    items: [
      "Desarrollo de aplicaciones móviles de picking en React Native, con escaneo EAN, control de stock y modo offline, optimizando procesos y reduciendo tiempos de relevamiento en almacenes/depositos.",
    ],
    technologies: ["React", "React Native"],
  },
  {
    id:4,
    period: "2019 — 2022",
    title: "Soporte IT",
    company: "Artech",
    url: "https://www.artech-consulting.com.ar/",
    items: [
      "Mantenimiento de servidores y equipos.",
      "Administración de identidades y dispositivos mediante Azure Active Directory, gestión de políticas de acceso y permisos, control de actualizaciones del sistema operativo y software corporativo, configuración de conexiones VPN y provisión de equipos para usuarios.",
    ],
    technologies: ["Azure Active Directory"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-sm font-semibold tracking-widest text-foreground mb-8 lg:hidden">
        EXPERIENCIA
      </h2>
      <div className="flex flex-col gap-2">
        {experiences.map((exp) => (
          <a
            key={exp.id}
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-lg p-4 -mx-4 transition-all duration-300 hover:bg-secondary/60"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <div className="shrink-0 text-xs font-mono font-medium tracking-wide text-muted-foreground pt-1 sm:w-32">
                {exp.period}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                  {exp.title} &middot; {exp.company}
                  <ArrowUpRight className="inline-block ml-1 size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {exp.items.map((item, i) => (
                    <li key={i} className="relative pl-4 text-sm text-muted-foreground leading-relaxed before:absolute before:left-0 before:top-[9px] before:size-1.5 before:rounded-full before:bg-primary/60">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
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
          </a>
        ))}
      </div>
    </section>
  )
}
