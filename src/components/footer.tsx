import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Serajur-Reza", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/serajurreza/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  // { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "mailto:rezainfinity54@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Crafted with care. {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
