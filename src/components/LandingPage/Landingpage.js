import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./Style.css";
import test from "./Test.json";
import ProducCard from "./ProducCard";
function Landingpage() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let items = test;
  return (
    <div className="container-fluid bg-light p-3">
      <input
        type="search"
        class="form-control mt-2"
        aria-describedby="search"
        placeholder="Food Name"
        size='0.8rem'
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <div className="row  mt-5">
      {items.filter((item)=>item.Ingredient.toLowerCase().includes(query)).map((item, index) => (
          

          <div className="col-6 col-md-4 col-sm-6 col-lg-3">
            <ProducCard key={index} item={item}  />
          </div>
      ))}
    </div>
    </div>
  );
}

export default Landingpage;
