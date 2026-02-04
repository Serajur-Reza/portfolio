import { PageHeader } from "@/components/page-header";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      // { name: "Python", level: 85 },
      // { name: "Go", level: 70 },
      // { name: "Rust", level: 60 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 70 },
      { name: "Tailwind CSS", level: 90 },
      // { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 70 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 70 },
      // { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", level: 80 },
      // { name: "Docker", level: 85 },
      // { name: "AWS", level: 80 },
      // { name: "CI/CD", level: 85 },
      { name: "Linux", level: 70 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Skills"
          description="A comprehensive overview of my technical skills and proficiency levels."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Redux",
              "Tanstack Query",
              "TypeOrm",
              "Prisma",
              "Jira",
              "VS Code",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
