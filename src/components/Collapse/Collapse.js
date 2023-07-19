import React, { useState } from "react";
import "./collapse.css";
import fleche from "../../assets/fleche.png";

function Collapse({ titre, description }) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="collapse">
      <div className=" main-collapse">
        <div className="titre-collapse" onClick={() => setOuvert(!ouvert)}>
          {titre}
          <img
            src={fleche}
            className={ouvert ? "fleche-bas" : "fleche-haut"}
          ></img>
        </div>
      </div>

      {ouvert && <p>{description}</p>}
    </div>
  );
}

export default Collapse;
