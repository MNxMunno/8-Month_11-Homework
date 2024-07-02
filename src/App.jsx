import React from "react";
import "./scss/main.scss";
import Home from "./routes/home/Home";
import Header from "./components/header/Header";
import "number-brm";

const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
