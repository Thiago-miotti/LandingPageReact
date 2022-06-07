import React from "react";
import "./page3.css";
import Modal from "../UI/modal";

function page3(props) {
  return (
    <div className="container3">
      <h1>
        Unlimited possibilities <br /> for easy site creation
      </h1>

      <button>VIEW MORE</button>

      <Modal data = {props.lista[2]}/>
    </div>
  );
}

export default page3;
