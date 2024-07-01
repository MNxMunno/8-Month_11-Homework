import React from "react";
import Banner from "../../static/banner/Banner";
import Catalog from "../../components/catalog/Catalog";
import Nornlight from "../../components/nornlight/Nornlight";

const Home = () => {
  return (
    <>
      <Banner />
      <Catalog />
      <Nornlight />
    </>
  );
};

export default Home;
