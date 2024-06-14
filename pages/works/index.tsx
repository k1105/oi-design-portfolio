import Layout from "../layout";
import WorksContainer from "./WorksContainer";

export default function Work() {
  return (
    <>
      <Layout pageTitle="Works" headline="Works" width="wide">
        <>
          <div className="category-container">
            <p>Logo</p>
            <p>Branding</p>
          </div>
          <WorksContainer />
        </>
      </Layout>
      <style jsx>{`
        .category-container {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          font-size: 1.2rem;
          gap: 10px;
          p {
            display: block;
            height: 2.5rem;
            padding: 0px 20px;
            line-height: 2.1rem;
            border-radius: 1.25rem;
            border: 1px solid black;
          }
        }
      `}</style>
    </>
  );
}
