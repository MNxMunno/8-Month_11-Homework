import React from "react";
import Btn from "../../static/btn/Btn";

const Nornlight = () => {
  return (
    <section className="nornlight">
      <div className="container">
        <div className="content">
          <div className="titles">
            <h1>Почему NORNLIGHT?</h1>
            <Btn text={"О компании"} />
          </div>
          <div className="cards"></div>
        </div>
      </div>
    </section>
  );
};

export default Nornlight;
