export type Skill = {
  title: string;
  description: string;
  tools: string[];
  type: "react" | "typescript" | "api" | "db" | "tooling";
};

export const skills: Skill[] = [
  {
    title: "React Ecosystem",
    description:
      "Building fast, interactive UIs across web and mobile using reusable components, hooks, and animations.",
    tools: [
      "React",
      "React Native",
      "Framer Motion",
      "Expo",
      "React Navigation",
    ],
    type: "react",
  },
  {
    title: "TypeScript & Tooling",
    description:
      "Writing safe, scalable code with static types, modular packages, and modern dev tooling.",
    tools: ["TypeScript", "Zod", "pnpm", "Nx", "ESBuild"],
    type: "typescript",
  },
  {
    title: "API Architecture",
    description:
      "Creating fully-typed backend APIs with input validation, auth, and caching baked in.",
    tools: ["Node.js", "tRPC", "GraphQL", "Express", "Firebase Admin"],
    type: "api",
  },
  {
    title: "Database & Storage",
    description:
      "Managing structured data and assets across cloud-native services.",
    tools: ["MongoDB", "Mongoose", "Redis", "AWS S3", "Prisma"],
    type: "db",
  },
  {
    title: "CI/CD & Infra",
    description:
      "Deploying full-stack apps with zero-downtime deploys, background jobs, and observability.",
    tools: ["Render", "Fly.io", "Vercel", "GitHub Actions", "Sentry"],
    type: "tooling",
  },
];

export default skills;
