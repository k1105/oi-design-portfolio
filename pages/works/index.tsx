import React from "react";
import dynamic from "next/dynamic";
import Layout from "../layout";
import { CategoryProvider } from "./CategoryContext";

const CategoryContainer = dynamic(() => import("./CategoryContainer"), {
  ssr: false,
});
const WorksContainer = dynamic(() => import("./WorksContainer"), {
  ssr: false,
});

const Work = () => {
  return (
    <CategoryProvider>
      <Layout pageTitle="Works" headline="Works" width="wide">
        <>
          <CategoryContainer />
          <WorksContainer />
        </>
      </Layout>
    </CategoryProvider>
  );
};

export default Work;
