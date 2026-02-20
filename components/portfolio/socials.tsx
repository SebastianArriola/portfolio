import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/SebastianArriola",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sebastian-arriola-a9a1b5224/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:sebastianarriola24@gmail.com",
    icon: Mail,
  },
]

export function Socials() {
  return (
    <div className="flex items-center gap-5">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
          aria-label={label}
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  )
}
