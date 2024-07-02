import React, { useState } from "react";
import { IoMenu, IoSearch, IoHome } from "react-icons/io5";
import { FaRegUser, FaRegHeart, FaFire, FaChevronDown } from "react-icons/fa";
import { TbAntennaBars5, TbCategory2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { LuGitCompare } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import logo from "../../assets/images/logog.png";
function Header() {
  const [toggel, setToggel] = useState(false);
  return (
    <>
      <header className="navbar__wrapper">
        <div className="container">
          <nav className="navbar">
            <NavLink to={"/"} className="navbar__logo">
              <img src={logo} alt="" />
            </NavLink>
            <button
              className="navbar__category-btn"
              onClick={() => setToggel(!toggel)}
            >
              <IoMenu />
              <span>Katalog</span>
            </button>
            <div className="navbar__search">
              <input type="text" placeholder="Поиск по товарам" />
              <button>
                <IoSearch />
              </button>
            </div>
            <div className="navbar__collection">
              <NavLink to={"/"} className="navbar__item">
                <IoHome />
                <span>Bosh Sahifa</span>
              </NavLink>

              <NavLink to={"/"} className="navbar__item">
                <FaRegHeart />

                <span>Избранное</span>
              </NavLink>
              <NavLink to={"/"} className="navbar__item">
                <TbAntennaBars5 />

                <span>Корзина</span>
              </NavLink>
              <NavLink to={"/"} className="navbar__item">
                <FiShoppingCart />
                <span>Cart</span>
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
