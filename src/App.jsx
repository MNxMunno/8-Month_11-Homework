import React from "react";
import "./scss/main.scss";
import Home from "./routes/home/Home";
import Header from "./components/header/Header";
import "number-brm";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
