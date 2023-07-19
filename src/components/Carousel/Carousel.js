import React, { useState } from "react";
import "./carousel.css";
import flecheG from "../../assets/arrow_left.png";
import flecheD from "../../assets/arrow_right.png";

function Carousel({ slide }) {
  const [imageIndex, setImageIndex] = useState(0);

  const slideAvant = () => {
    setImageIndex((imageIndex - 1 + slide.length) % slide.length);
  };

  const slideApres = () => {
    setImageIndex((imageIndex + 1) % slide.length);
  };

  return (
    <>
      <div className="center">
        <img
          className={
            slide.length > 1 ? "fleche-gauche" : "fleche-gauche hidden"
          }
          onClick={slideAvant}
          src={flecheG}
          alt="flecheGauche"
        ></img>
        <img
          className={
            slide.length > 1 ? "fleche-droite" : "fleche-droite hidden"
          }
          onClick={slideApres}
          src={flecheD}
          alt="flecheDroite"
        ></img>
        <img className="carousel" src={slide[imageIndex]} alt="carousel"></img>
        <p className={slide.length > 1 ? "nb-slide" : "nb-slide hidden"}>
          {imageIndex + 1} / {slide.length}
        </p>
      </div>
    </>
  );
}

export default Carousel;
