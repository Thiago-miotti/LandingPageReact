import React from "react";
import "./page1.css";
import Modal from "../UI/modal";

function page1(props) {
  return (
    <div className="container1">
      <h1>
        Small Thing but <br /> Intellectual Idea
      </h1>
      <p>Browse our HTML5 responsive agency templates below</p>
      <button>VIEW MORE</button>
      <Modal data = {props.lista[0]}/>
    </div>
  );
}

export default page1;
