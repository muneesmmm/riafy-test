import React, { useEffect, useState } from "react";
import "./Style.css";
import "remixicon/fonts/remixicon.css";
import "./glightbox.min.css";
import AOS from "aos";
import "./Style.css";
import test from "./Test.json";
import ProducCard from "./ProducCard";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let items = test;
  return (
    <div>
      <nav className="navbar bg-white p-2 fixed-top">
        <span
          className="navbar-brand"
          style={{ fontWeight: 700, fontFamily: "Montserrat" }}
        >
          Search
        </span>
        <div
          style={{ backgroundColor: "black", width: "100%", height: "2px" }}
        ></div>
        <input
          type="search"
          style={{ width: "100%" }}
          className="form-control mt-2"
          aria-describedby="search"
          placeholder="Food Name"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </nav>

      <div className="bg-light" style={{marginTop:'100px'}}>
        <div className="mt-5 pt-3">
          <header
            className="title p-3"
            style={{ fontWeight: 700, fontFamily: "Poppins" }}
          >
            Foods
          </header>
        </div>
        <div className="container">
        <div className="row  ">
          {items
            .filter((item) => item.Ingredient.toLowerCase().includes(query))
            .map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-sm-6">
                <ProducCard item={item} />
              </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
