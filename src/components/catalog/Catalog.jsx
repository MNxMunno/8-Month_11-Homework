import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Catalog = () => {
  const data = [
    {
      id: 1,
      img: "https://i.postimg.cc/VLNsx545/lyustr-1.png",
      title: "Люстры",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/q7FZvDH9/lyustr-2.png",
      title: "Светильники",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/MHq061HC/lyustr-3.png",
      title: "Бра",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/tRcCHpc5/lyustr-4.png",
      title: "Торшеры",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/kXfrdcDd/lyustr-5.png",
      title: "Настольные лампы",
    },
    {
      id: 6,
      img: "https://i.postimg.cc/k5wRQLgp/lyustr-6.png",
      title: "Споты",
    },
  ];

  const card = data?.map((el) => (
    <div key={el.id} className="card">
      <div className="texts">
        <h3>{el.title}</h3>
        <a href="#">
          От 540₽
          <FaArrowRightLong />
        </a>
      </div>
      <div className="img">
        <img src={el.img} alt={el.title} />
      </div>{" "}
    </div>
  ));
  return (
    <section className="catalog">
      <div className="container">
        <div className="content">
          <div className="title">
            <h1>Каталог</h1>
            <a href="#">
              Весь каталог <FaArrowRightLong />
            </a>
          </div>
          <div className="cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
