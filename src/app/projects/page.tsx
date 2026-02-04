import { PageHeader } from "@/components/page-header";
import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import OnlineDiary from "../../../public/images/online-diary.png";
import FormBuilder from "../../../public/images/form-builder.png";
import Blackjack from "../../../public/images/blackjack.png";

const featuredProjects = [
  {
    title: "Online Diary with Ai Sentiment analysis",
    description:
      "An online diary application where you can write whatever you want, and it will find out what you feel while writing.",
    image: OnlineDiary,
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Nest.js",
      "Gemini Ai",
    ],
    githubFrontend: "https://github.com/Serajur-Reza/online-diary-frontend",
    githubBackend: "https://github.com/Serajur-Reza/online-diary",
    live: "https://online-diary-ruby.vercel.app/",
  },
  {
    title: "Simple HTML Form Generator",
    description:
      "A form generator application with drag and drop feature where you can drag and drop elements to create an HTML form with markup for using in your web applications",
    image: FormBuilder,
    technologies: ["React", "TypeScript", "Redux"],
    githubFrontend: "https://github.com/Serajur-Reza/form-builder",
    githubBackend: "",
    live: "https://form-builder-lake-two.vercel.app/",
  },
  {
    title: "Blackjack Card Game",
    description:
      "A simple blackjack card game where you and computer will play.",
    image: Blackjack,
    technologies: ["React", "TypeScript", "Redux"],
    githubFrontend: "https://github.com",
    githubBackend: "",
    live: "https://react-blackjack-vite.netlify.app/",
  },
];

// const otherProjects = [
//   {
//     title: "CLI Task Manager",
//     description:
//       "A powerful command-line tool for managing tasks and projects with Git integration.",
//     technologies: ["Rust", "SQLite"],
//     github: "https://github.com",
//   },
//   {
//     title: "E-commerce API",
//     description:
//       "RESTful API for e-commerce platforms with payment integration and inventory management.",
//     technologies: ["Node.js", "Express", "MongoDB"],
//     github: "https://github.com",
//   },
//   {
//     title: "Weather App",
//     description:
//       "Beautiful weather application with location-based forecasts and severe weather alerts.",
//     technologies: ["React Native", "TypeScript"],
//     github: "https://github.com",
//     live: "https://example.com",
//   },
//   {
//     title: "Code Snippet Manager",
//     description:
//       "A desktop app for organizing and sharing code snippets with syntax highlighting.",
//     technologies: ["Electron", "Vue.js", "IndexedDB"],
//     github: "https://github.com",
//   },
//   {
//     title: "Markdown Blog Engine",
//     description:
//       "Static site generator optimized for developer blogs with MDX support.",
//     technologies: ["Next.js", "MDX", "Tailwind"],
//     github: "https://github.com",
//     live: "https://example.com",
//   },
//   {
//     title: "Budget Tracker",
//     description:
//       "Personal finance app with expense tracking, budgeting, and financial insights.",
//     technologies: ["Flutter", "Firebase", "Charts"],
//     github: "https://github.com",
//   },
// ];

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Projects"
          description="A selection of projects I've worked on, from side projects to production applications."
        />

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative group">
                  <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <Image
                        // width={200}
                        // height={100}
                        src={project?.image}
                        fill={true}
                        className="w-16 h-16 opacity-50"
                        alt={project?.title}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                </div>
              </div>
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="text-sm font-mono text-primary mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="p-6 rounded-lg bg-card border border-border mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div
                  className={`flex flex-wrap gap-2 mb-4 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex items-center gap-4 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  {project?.githubFrontend ? (
                    <Link
                      href={project?.githubFrontend}
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="GitHub repository"
                    >
                      Github Frontend
                    </Link>
                  ) : null}

                  {project?.githubBackend ? (
                    <Link
                      href={project?.githubBackend}
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="GitHub repository"
                    >
                      Github Backend
                    </Link>
                  ) : null}

                  <Link
                    href={project.live}
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {/* <div>
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Other Noteworthy Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                    {project.live && (
                      <Link
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
