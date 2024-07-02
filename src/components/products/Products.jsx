import React from "react";
import { useGetProductsQuery } from "../../context/api/ProductApi";
import img from "../../assets/not_img.jpg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import Img from "../img/Img";

const Products = () => {
  const { data } = useGetProductsQuery();
  const product = data?.data?.products;
  const card = product?.map((pro) => (
    <div key={pro.id} className="card">
      <div className="img">
        <img src={pro.urls[0] ? pro.urls[0] : img} alt="" />
      </div>
      <h3>{pro.title}</h3>
      <div className="card_bottom">
        <div className="prices">
          <del>{(pro.price * 8873 * 1.1)?.brm()}₽</del>
          <p>{(pro.price * 8873)?.brm()}₽</p>
        </div>
        <button>
          <MdOutlineShoppingCart />
        </button>
      </div>
      <button className="heart">
        <FaRegHeart />
      </button>
    </div>
  ));

  return (
    <section className="products">
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Products;
