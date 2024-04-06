import React from "react";
import "./Home.css";
import img1 from "../../images/organic-products-hero.png";
import img2 from "../../images/logo-leaf-new.png";
import img3 from "../../images/for-main.png";
import img4 from "../../images/edible-oil-300x300.jpg";
import img5 from "../../images/basil-leaf.png";
import img6 from "../../images/product11-free-img.jpg";
const Home = () => {
  return (
    <>
      <section className="section1">
        <img src={img3} alt="" />
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

      {/* Shipping */}

      <section className="shipping">
        <div className="shipping1 sh">
          <div className="up">
            <i class="fa-solid fa-truck"></i>
            <p>Free Shipping</p>
          </div>
          <p>Above $5 Only</p>
        </div>
        <div className="shipping2 sh">
          <div className="up">
            <i class="fa-solid fa-truck"></i>
            <p>Certified Organic</p>
          </div>
          <p>100% Guarantee</p>
        </div>
        <div className="shipping3 sh">
          <div className="up">
            <i class="fa-solid fa-truck"></i>
            <p>Huge Savings</p>
          </div>
          <p>At Lowest Price</p>
        </div>
        <div className="shipping4 sh">
          <div className="up">
            <i class="fa-solid fa-truck"></i>
            <p>Easy Returns</p>
          </div>
          <p>No Questions Asked</p>
        </div>
      </section>

      {/* Best Selling Products */}

      <section className="products">
        <h2>Best Selling Products</h2>
        <img src={img2} alt="" />
        <div className="productts">
          <div className="product selling-product1">
            <img src={img4} alt="" />
            <p>Groceries</p>
            <h5>Assorted Coffee</h5>
            <p>😀😀😀😀😀</p>
            <p>£35.00</p>
          </div>
          <div className="product selling-product2">
            <img src={img4} alt="" />
            <p>Groceries</p>
            <h5>Assorted Coffee</h5>
            <p>😀😀😀😀😀</p>
            <p>£35.00</p>
          </div>
          <div className="product selling-product3">
            <img src={img4} alt="" />
            <p>Groceries</p>
            <h5>Assorted Coffee</h5>
            <p>😀😀😀😀😀</p>
            <p>£35.00</p>
          </div>
          <div className="product selling-product4">
            <img src={img4} alt="" />
            <p>Groceries</p>
            <h5>Assorted Coffee</h5>
            <p>😀😀😀😀😀</p>
            <p>£35.00</p>
          </div>
        </div>
      </section>

      {/* Vegitables */}

      <section className="vegitables">
        <img src={img5} alt="" />
        <div className="vg">
          <div className="vegitable">
            <div className="upper">
              <h5>Farm Fresh Fruits</h5>
              <p>
                Ut sollicitudin quam vel purus tempus, vel eleifend felis
                varius.
              </p>
              <button>
                SHOP NOW <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <img src={img6} alt="" />
          </div>
          <div className="vegitable">
            <div className="upper">
              <h5>Farm Fresh Fruits</h5>
              <p>
                Ut sollicitudin quam vel purus tempus, vel eleifend felis
                varius.
              </p>
              <button>
                SHOP NOW <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <img src={img6} alt="" />
          </div>
          <div className="vegitable">
            <div className="upper">
              <h5>Farm Fresh Fruits</h5>
              <p>
                Ut sollicitudin quam vel purus tempus, vel eleifend felis
                varius.
              </p>
              <button>
                SHOP NOW <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <img src={img6} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
