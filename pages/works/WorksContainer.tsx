import WorkCard from "./WorkCard";
import { useState, useEffect } from "react";
import { client } from "@/libs/client";

export default function WorksContainer() {
  const [data, setData] = useState<Work[] | null>(null);
  // propsからデータを使用
  useEffect(() => {
    async function fetchData() {
      const response = await client.get({ endpoint: "works" });
      setData(response.contents);
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="main">
        {data ? (
          data.map((work, index) => (
            <div key={index}>
              <WorkCard
                title={work.title}
                image={work.images![0].url}
                slug={work.slug}
              />
            </div>
          ))
        ) : (
          <>
            {[0, 1, 2, 3, 4, 5].map((_, index) => (
              <div key={index}>
                <WorkCard title="now loading..." />
              </div>
            ))}
          </>
        )}
      </div>

      <style jsx>{`
        .main {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .main::after {
          content: "";
          width: 21vw;
        }
      `}</style>
    </>
  );
}

// getStaticProps関数。ビルド時に実行される
export async function getStaticProps() {
  // データの取得
  const data = await client.get({
    endpoint: "works",
  });

  console.log(data);

  // 取得したデータをpropsとしてページコンポーネントに渡す
  return {
    props: { data }, // 注意: 実際にこのデータ構造がclient.getから返されるかはAPIの設計に依存します
  };
}
