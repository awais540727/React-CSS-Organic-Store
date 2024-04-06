import React from "react";
import "./Home.css";
import img1 from "../../images/organic-products-hero.png";
import img2 from "../../images/logo-leaf-new.png";

const Home = () => {
  return (
    <>
      <section className="section1">
        <div className="left">
          <img src={img1} alt="" />
        </div>
        <div className="right">
          <img src={img2} alt="" />
          <h4>Best Quality Products</h4>
          <h2>Join The Organic Movement!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button>
            <i class="fa-solid fa-cart-shopping"></i>Shop Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
