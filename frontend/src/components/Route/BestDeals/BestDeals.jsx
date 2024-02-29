
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  
  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);

  return (
    <div>
      <div className={styles.section}>
        <div className={styles.heading}>
          <h1>Best  Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-25 lg:grid-cols-4 lg:gap-25 xl:grid-cols-5 xl:gap-30 mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
