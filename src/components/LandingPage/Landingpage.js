import React, { useEffect } from "react";
import AOS from "aos";
import "./Style.css";
import test from "./Test.json";
import ProducCard from "./ProducCard";
function Landingpage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let items = test;
  return (
    <div className="container bg-light mt-5 p-3">
      <div className="row  mt-5">
      {items.map((item, index) => (
          

          <div className="col-6 col-md-4 col-sm-6 col-lg-3">
            <ProducCard key={index} item={item}  />
          </div>
      ))}
    </div>
    </div>
  );
}

export default Landingpage;
