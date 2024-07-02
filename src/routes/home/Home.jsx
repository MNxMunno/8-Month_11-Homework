import React from "react";
import Banner from "../../static/banner/Banner";
import Catalog from "../../components/catalog/Catalog";
import Nornlight from "../../components/nornlight/Nornlight";
import Products from "../../components/products/Products";
import Brend from "../../components/brend/Brend";

const Home = () => {
  return (
    <>
      <Banner />
      <Catalog />
      <Nornlight />
      <Products />
      <Brend />
    </>
  );
};

export default Home;
