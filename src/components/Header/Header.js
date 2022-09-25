import React, { useEffect } from "react";
import "./Style.css";
import "remixicon/fonts/remixicon.css";
import "./glightbox.min.css";
import AOS from "aos";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <nav class="navbar bg-white p-2 ">
      <span class="navbar-brand" style={{fontWeight:700,fontFamily:"Montserrat"}}>
        Search
      </span>
      <div style={{backgroundColor:"black",width:'100%',height:'2px'}}></div>
      
    </nav>
  );
}
export default Header;
