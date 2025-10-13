import React from "react";

import { Hero } from "@components/hero/Hero";
import { Skills } from "@components/skills/Skills";
import { Topbar } from "@components/topbar/Topbar";
import { Layout } from "@components/layout/Layout";
import { Projects } from "@components/projects/Projects";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Topbar />
      <Hero />
      <Projects />
      <Skills />
      <div className="h-[100vh]" />
    </Layout>
  );
};

export default Home;
