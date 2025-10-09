import React from "react";

import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/hero/Hero";

export const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default App;
