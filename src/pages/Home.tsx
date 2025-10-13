import React from "react";

import { Hero } from "@components/hero/Hero";
import { Topbar } from "@components/topbar/Topbar";
import { Layout } from "@components/layout/Layout";
import { Projects } from "@components/projects/Projects";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Topbar />
      <Hero />
      <Projects />
      <div className="h-[100vh] bg-white" />
    </Layout>
  );
};

export default Home;
