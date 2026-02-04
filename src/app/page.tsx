import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm mb-4">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            <span className="text-balance">Serajur Reza Chowdhury</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6">
            <span className="text-balance">I write code.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            {`I'm a full-stack software engineer specializing in building optimized software solutions. Currently focused on building user friendly, optimized, reliable softwares.`}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/Serajur-Reza"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/serajurreza/"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            {/* <Link
              href="https://twitter.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
              target="_blank"
            >
              <Blog className="h-6 w-6" />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
