import React, { useState, useEffect } from "react";
import { client } from "@/libs/client";
import { useCategory } from "../../components/CategoryContext";
import WorkCard from "./WorkCard";

const WorksContainer = () => {
  const [data, setData] = useState<Work[] | null>(null);
  const { selectedCategory } = useCategory();

  useEffect(() => {
    async function fetchData() {
      const response = await client.get({ endpoint: "works" });
      setData(response.contents);
    }

    fetchData();
  }, []);

  const filteredData = data?.filter((work) =>
    selectedCategory
      ? work.category.some((c) => c.id === selectedCategory.id)
      : true
  );

  return (
    <>
      <div className="main">
        {filteredData ? (
          filteredData.map((work, index) => (
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
};

export default WorksContainer;
