export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="text-sm font-semibold tracking-widest text-foreground mb-8 lg:hidden">
        Sobre mi
      </h2>
      <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
        <p>
          I started my journey in development back in 2016 when I decided to build a custom
          theme for a forum I was part of. That simple curiosity about{" "}
          <span className="text-foreground font-medium">how things work on the web</span>{" "}
          turned into a deep passion for software engineering that has shaped my career ever since.
        </p>
        <p>
          Fast-forward to today, and I&apos;ve had the privilege of building software at a{" "}
          <a href="#experience" className="text-primary font-medium hover:underline underline-offset-4">
            fast-growing startup
          </a>
          , a{" "}
          <a href="#experience" className="text-primary font-medium hover:underline underline-offset-4">
            large enterprise
          </a>
          , and a{" "}
          <a href="#experience" className="text-primary font-medium hover:underline underline-offset-4">
            digital agency
          </a>
          . My main focus these days is building accessible, performant full-stack applications
          that deliver exceptional user experiences while maintaining clean, scalable architectures
          on the backend.
        </p>
        <p>
          When I&apos;m not at the computer, I&apos;m usually rock climbing, reading sci-fi novels,
          experimenting with new coffee brewing methods, or contributing to open-source projects
          that catch my interest.
        </p>
      </div>
    </section>
  )
}
