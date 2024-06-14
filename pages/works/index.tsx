import Layout from "../layout";
import WorksContainer from "./WorksContainer";

export default function Work() {
  return (
    <>
      <Layout pageTitle="Works" headline="Works" width="wide">
        <>
          <WorksContainer />
        </>
      </Layout>
    </>
  );
}
