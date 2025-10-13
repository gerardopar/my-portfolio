import LumeThumbnail from "@assets/images/lume-thumb.png";

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveDemoUrl?: string;
  sourceCodeUrl: string;
}

export const projects: Project[] = [
  {
    title: "Lume – Movie Management Platform",
    description:
      "Lume is a smart movie platform that helps you discover what to watch next with AI-driven recommendations, personal watchlists, and favorites — all wrapped in a clean, minimalist interface inspired by modern streaming apps.",
    techStack: [
      "React",
      "TypeScript",
      "tRPC",
      "Node.js",
      "Express",
      "MongoDB",
      "TMDB API",
    ],
    image: LumeThumbnail,
    liveDemoUrl: "https://lume-client.onrender.com/",
    sourceCodeUrl: "https://github.com/gerardopar/lume",
  },
  {
    title: "Lume – Movie Management Platform",
    description:
      "Lume is a smart movie platform that helps you discover what to watch next with AI-driven recommendations, personal watchlists, and favorites — all wrapped in a clean, minimalist interface inspired by modern streaming apps.",
    techStack: [
      "React",
      "TypeScript",
      "tRPC",
      "Node.js",
      "Express",
      "MongoDB",
      "TMDB API",
    ],
    image: LumeThumbnail,
    liveDemoUrl: "https://lume-client.onrender.com/",
    sourceCodeUrl: "https://github.com/gerardopar/lume",
  },
  {
    title: "Lume – Movie Management Platform",
    description:
      "Lume is a smart movie platform that helps you discover what to watch next with AI-driven recommendations, personal watchlists, and favorites — all wrapped in a clean, minimalist interface inspired by modern streaming apps.",
    techStack: [
      "React",
      "TypeScript",
      "tRPC",
      "Node.js",
      "Express",
      "MongoDB",
      "TMDB API",
    ],
    image: LumeThumbnail,
    liveDemoUrl: "https://lume-client.onrender.com/",
    sourceCodeUrl: "https://github.com/gerardopar/lume",
  },
];

export default projects;
