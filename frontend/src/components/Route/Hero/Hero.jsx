import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div className={`relative h-[70vh] sm:h-[80vh] w-full bg-gray-200 ${styles.noramlFlex}`}>
      <div className={`${styles.section} w-full max-w-4xl mx-auto text-center py-20`}>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-6">
          Welcome to Our Fresh Vegetable Collection
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Discover the freshest selection of vegetables for your kitchen.
        </p>
        <Link to="/products">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full">
            Explore Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
