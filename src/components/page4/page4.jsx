import React from "react";
import "./page4.css";
import Modal from "../UI/modal";

function page4(props) {
  return (
    <div className="container4">
      <div className="child-container">
        <h1>
          A Better Website <br /> Means Better User <br /> Experience
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          <br />
          voluptates ipsa molestias. Mollitia, laborum iure blanditiis deserunt
          <br />
          aspernatur sed illo.
        </p>
        <button className="button4"><Modal data = {props.lista[3]}/></button>  
      </div>
    </div>
  );
}

export default page4;
