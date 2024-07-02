import React from "react";
import Banner from "../../static/banner/Banner";
import Catalog from "../../components/catalog/Catalog";
import Nornlight from "../../components/nornlight/Nornlight";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <>
      <Banner />
      <Catalog />
      <Nornlight />
      <Products />
    </>
  );
};

export default Home;
