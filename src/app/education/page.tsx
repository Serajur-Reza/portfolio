import { PageHeader } from "@/components/page-header";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "BRAC University",
    period: "January 2014 - April 2018",
    description:
      "Core focus on computer science, programming, algorithms, data structures, networking and software engineering principles.",
    // gpa: "3.8/4.0",
    // achievements: [
    //   "Summa Cum Laude",
    //   "ACM Programming Team Member",
    //   "Undergraduate Teaching Assistant for Algorithms",
    // ],
  },
];

// const certifications = [
//   {
//     name: "AWS Solutions Architect Professional",
//     issuer: "Amazon Web Services",
//     year: "2023",
//   },
//   {
//     name: "Google Cloud Professional Developer",
//     issuer: "Google Cloud",
//     year: "2022",
//   },
//   {
//     name: "Certified Kubernetes Administrator",
//     issuer: "CNCF",
//     year: "2022",
//   },
//   {
//     name: "MongoDB Certified Developer",
//     issuer: "MongoDB",
//     year: "2021",
//   },
// ];

export default function EducationPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Education"
          description="My academic background and professional certifications."
        />

        <div className="space-y-8 mb-16">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="p-6 sm:p-8 rounded-lg bg-card border border-border"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-sm font-mono text-primary">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {edu.description}
                  </p>
                  {/* <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 text-sm font-mono bg-secondary text-secondary-foreground rounded">
                      GPA: {edu.gpa}
                    </span>
                  </div> */}
                  {/* <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {edu?.achievements?.map((achievement) => (
                        <li
                          key={achievement}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary" />
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications?.map((cert) => (
              <div
                key={cert.name}
                className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {cert.issuer}
                </p>
                <span className="text-xs font-mono text-primary">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
