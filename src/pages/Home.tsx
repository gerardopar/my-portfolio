import React from "react";

import { Topbar } from "@components/topbar/Topbar";
import { Layout } from "@components/layout/Layout";
import { Hero } from "@components/hero/Hero";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Topbar />
      <Hero />
    </Layout>
  );
};

export default Home;
