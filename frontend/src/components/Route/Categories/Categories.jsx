import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      

      <div className={`${styles.section} bg-[#fffff1] p-6 rounded-lg mb-12`} id="categories">
      <div className={`${styles.heading}`}>
          <h1>Categories</h1>
        </div>
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((category) => {
              const handleSubmit = () => {
                navigate(`/products?category=${category.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 shadow-md text-black" // Added 'text-black' for black shadow
                  key={category.id}
                  onClick={handleSubmit}
                >
                  <h5 className={`text-[18px] leading-[1.3]`}>{category.title}</h5>
                  <img
                    src={category.image_Url}
                    className="w-[120px] object-cover"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
