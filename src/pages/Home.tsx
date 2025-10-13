import React from "react";

import { Hero } from "@components/hero/Hero";
import { Footer } from "@components/footer/Footer";
import { Skills } from "@components/skills/Skills";
import { Topbar } from "@components/topbar/Topbar";
import { Layout } from "@components/layout/Layout";
import { Contact } from "@components/contact/Contact";
import { Projects } from "@components/projects/Projects";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Topbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Home;
