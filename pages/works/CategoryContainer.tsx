import React, { useState, useEffect } from "react";
import { client } from "@/libs/client";
import { useCategory } from "../../components/CategoryContext";

const CategoryContainer = () => {
  const [data, setData] = useState<Category[] | null>(null);
  const { selectedCategory, setSelectedCategory } = useCategory();

  useEffect(() => {
    async function fetchData() {
      const response = await client.get({ endpoint: "category" });
      setData(response.contents);
    }

    fetchData();
  }, []);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="category-container">
        {data &&
          data.map((category, index) => (
            <p
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={selectedCategory?.id === category.id ? "selected" : ""}
            >
              {category.name}
            </p>
          ))}
      </div>
      <style jsx>{`
        .category-container {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          font-size: 1.2rem;
          gap: 10px;
        }

        p {
          color: var(--light-yellow);
          display: block;
          height: 2.5rem;
          padding: 0px 20px;
          line-height: 2.1rem;
          border-radius: 1.25rem;
          border: 2px solid var(--light-yellow);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        p:hover,
        p.selected {
          background-color: var(--light-yellow);
          color: white;
        }
      `}</style>
    </>
  );
};

export default CategoryContainer;
