import { Code2, Palette, Search, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Track = { eyebrow: string; title: string; description: string; meta: string; theme: "blue" | "yellow" | "green"; icon: LucideIcon };
export const tracks: Track[] = [
  {
    eyebrow: "EXPLORE THE NEW",
    title: "Research & discovery",
    description:
      "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
    meta: "Problem finding · User research · Project thinking",
    theme: "blue",
    icon: Search,
  },
  {
    eyebrow: "MAKE SOMETHING",
    title: "Design & creativity",
    description:
      "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
    meta: "UI/UX · Visual storytelling · Prototyping",
    theme: "yellow",
    icon: Palette,
  },
  {
    eyebrow: "CREATE THE FUTURE",
    title: "Development",
    description:
      "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
    meta: "Web & mobile · Cloud · AI foundations",
    theme: "green",
    icon: Code2,
  },
];

export const learningCards = [
  {
    icon: Users,
    title: "Study together",
    body: "Work through foundations in peer learning sessions. Bring your questions; leave with a next step.",
    link: "Study groups & guided practice",
  },
  {
    icon: Code2,
    title: "Try it hands-on",
    body: "Experience a tool or technique in a workshop, then put it to work in a small experiment.",
    link: "Workshops & technical sessions",
  },
  {
    icon: Users,
    title: "Share the process",
    body: "Exchange feedback, talk through your decisions, and learn from different ways of thinking.",
    link: "Projects & sharing sessions",
  },
];

export const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.",
  },
  {
    question: "Is this only for computer science students?",
    answer:
      "Different disciplines bring different perspectives. You're welcome to explore a track that fits your interests.",
  },
  {
    question: "How can I find learning opportunities?",
    answer:
      "Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.",
  },
];
