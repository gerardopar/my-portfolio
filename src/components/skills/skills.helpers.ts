export type Skill = {
  title: string;
  description: string;
  items: string[];
  type: "react" | "typescript" | "api" | "db" | "tooling";
};

export const skills: Skill[] = [
  {
    title: "React Ecosystem",
    description:
      "Building fast, interactive UIs across web and mobile using reusable components, hooks, and Capacitor for native experiences.",
    items: ["React", "React Native", "Expo", "Capacitor", "Ionic"],
    type: "react",
  },
  {
    title: "TypeScript & Tooling",
    description:
      "Writing safe, scalable code with static types, modular packages, and modern dev tooling.",
    items: ["TypeScript", "Zod"],
    type: "typescript",
  },
  {
    title: "API Architecture",
    description:
      "Creating fully-typed backend APIs with input validation, auth, and caching baked in.",
    items: ["Node.js", "tRPC", "GraphQL", "Express", "Firebase Admin"],
    type: "api",
  },
  {
    title: "Database & Storage",
    description:
      "Managing structured data and assets across cloud-native services.",
    items: ["MongoDB", "Mongoose", "Redis", "AWS S3", "Prisma"],
    type: "db",
  },
  {
    title: "Developer Toolkit",
    description:
      "Optimizing performance, developer experience, and creative workflows using essential tools, modern patterns, and AI-assisted development.",
    items: [
      "Firebase",
      "Vite",
      "Zustand",
      "React Query",
      "Tailwindcss",
      "Git",
      "Apollo Client",
      "Jira",
      "Figma",
      "Playwright",
      "Storybook",
      "Postman",
      "Slack",
      "Lottie",
      "Prompt Engineering",
      "Windsurf",
    ],
    type: "tooling",
  },
];

export default skills;
