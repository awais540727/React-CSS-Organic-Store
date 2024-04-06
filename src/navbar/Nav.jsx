import React from "react";
import exmImage1 from "../images/organic-store-logo5.svg";
import "./Nav.css";
function Nav() {
  return (
    <>
      {/* Nav bar */}

      <nav>
        <div className="left">
          <img src={exmImage1} alt="" />
          <ul>
            <li>Everything</li>
            <li>Groceries</li>
            <li>Fruits</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>$0.00</li>
            <li>
              <i class="fa-brands fa-shopify"></i>
            </li>
            <li>
              <i class="fa-solid fa-user"></i>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
