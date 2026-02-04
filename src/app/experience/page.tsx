import { PageHeader } from "@/components/page-header";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    title: "Software Engineer",
    company: "Friends Corp.",
    // companyUrl: "https://example.com",
    period: "October 2024 - January 2025",
    description:
      "Build a whole frontend of a Human resource management application, worked on different features and optimization. Build 2 admin dashboards for 2 different clients",
    technologies: ["TypeScript", "React"],
  },
  {
    title: "Software Engineer",
    company: "Amharc Tech",
    // companyUrl: "https://example.com",
    period: "February 2024 - October 2024",
    description:
      "Built and shipped multiple product features from concept to production for a home service provider application. Collaborated with designers and product managers to deliver user-centric solutions.",
    technologies: ["JavaScript", "Next.js"],
  },
  {
    title: "Associate Software Engineer",
    company: "Brain Station 23",
    // companyUrl: "https://example.com",
    period: "March 2021 - February 2023",
    description:
      "Worked multiple projects like food delivery applications, streaming site, ride sharing applications. Build different features, collaborate with designers, QA engineers, senior developers.",
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Vue.js",
      "React Native",
      "Git",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Brain Station 23",
    // companyUrl: "https://example.com",
    period: "September 2020 - February 2021",
    description:
      "Contributed to an admin dashboard of a service provider. Learnt new technologies and best practices and was trained to use them.",
    technologies: ["React", "TypeScript", "Git"],
  },
];

export default function ExperiencePage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Experience"
          description="My professional journey and the companies I've had the pleasure to work with."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1 md:-translate-x-1.5 mt-2" />

                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16"
                      : "md:order-2 md:pl-16 md:text-left"
                  }`}
                >
                  <span className="inline-block text-sm font-mono text-primary mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <h5 className="inline-flex items-center text-primary  mb-3">
                    {exp.company}
                    {/* <ExternalLink className="ml-1 h-3 w-3" /> */}
                  </h5>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? "" : ""}`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={
                    index % 2 === 0
                      ? "hidden md:block"
                      : "hidden md:block md:order-1"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
