import React from "react";
import "./page2.css";
import ME from "../../Assets/page2-background.jpg";
import Modal from "../UI/modal";

function page2(props) {
  return (
    <div className="container2">
      <h1>
        Unlimited possibilities <br /> for easy site creation
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        <br />
        voluptates ipsa molestias. Mollitia, laborum iure blanditiis deserunt
        <br />
        aspernatur sed illo.
      </p>
      <button>VIEW MORE</button>
      <Modal data = {props.lista[1]}/>
    </div>
  );
}

export default page2;
