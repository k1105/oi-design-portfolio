import React from "react";
import Layout from "../layout";
import CategoryContainer from "./CategoryContainer";
import WorksContainer from "./WorksContainer";
import { CategoryProvider } from "./CategoryContext";

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
