import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const {allProducts} = useSelector((state) => state.products);
   
  return (
    <div>
      <div className={`${styles.section}`}>
  <div className={`${styles.heading}`}>
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">All  Products</h1>
  </div>
  <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
    {allProducts && allProducts.length !== 0 && (
      <>
        {allProducts.map((product, index) => (
          <div
            key={index}
          >
            <ProductCard data={product} />
          </div>
        ))}
      </>
    )}
  </div>
</div>

    </div>
  );
};

export default FeaturedProduct;
