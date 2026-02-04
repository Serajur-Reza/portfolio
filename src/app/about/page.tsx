import { PageHeader } from "@/components/page-header";

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="About Me"
          description="A passionate developer who loves turning ideas into reality through code."
        />

        <div className="grid  gap-12">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {`Hello! I'm Reza, a software engineer based in Bangladesh. I enjoy
              building softwares maintaining the best practice, optimizing the
              most possible, and providing the most user friendly solutions.`}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {`I graduated from BRAC University with a degree in Computer Science, and since
              then I've had the privilege of working at startups, a large
              corporation My main focus these
              days is building accessible, inclusive products and digital
              experiences.`}
            </p>
            {/* <p className="text-muted-foreground leading-relaxed">
              When I'm not at the computer, I'm usually rock climbing, reading,
              hanging out with my family, or exploring new coffee shops in the
              city.
            </p> */}

            <div className="pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {`Technologies I've been working with recently:`}
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Nest.js",
                  "PostgreSQL",
                ].map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <span className="text-primary mr-2 font-mono">{">"}</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* <div className="lg:col-span-2">
            <div className="relative group">
              <div className="relative rounded-lg overflow-hidden bg-secondary aspect-square">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">
                        JD
                      </span>
                    </div>
                    <p className="text-sm">Your Photo Here</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
