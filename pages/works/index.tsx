import Layout from "../layout";
import { CategoryProvider } from "../../components/CategoryContext";
import CategoryContainer from "./CategoryContainer";
import WorksContainer from "./WorksContainer";

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
