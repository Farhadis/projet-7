import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import R from "../../assets/R.png";
import RED from "../../assets/RED.png";
import "./loge.css";
import Tags from "../../components/Tags/Tags";
import Collapse from "../../components/Collapse/Collapse";
import ListLogements from "../../Data/ListLogemens.json";
import Erreur from "../Erreur/Erreur";

function Loge() {
  const idLoge = useParams();

  const logementId = ListLogements.find(
    (logement) => logement.id === idLoge.id
  );

  // ... vers la page d'erreur ......................

  if (!logementId) {
    return <Erreur />;
  }

  // ..... TAGS .................................

  const tags = logementId.tags.map((tags, index) => {
    return <Tags key={index} name={tags} />;
  });

  const title = logementId.title;
  const sousTitre = logementId.location;

  const listEquipement = logementId.equipments.map((equipments, index) => {
    return <li key={index}>{equipments}</li>;
  });

  // ..ETOILES...................

  let notes = [];
  let etoile = true;
  for (let i = 0; i < 5; i++) {
    if (i === parseInt(logementId?.rating)) {
      etoile = false;
    }
    if (etoile === true) {
      notes.push(
        <img key={i} className="etoile rouge" src={RED} alt="etoile rouge" />
      );
    } else {
      notes.push(
        <img key={i} className="etoile gris" src={R} alt="etoile gris" />
      );
    }
  }

  return (
    <>
      <Carousel slide={logementId.pictures} />

      <div className="main-loge">
        <div className="titre-tags">
          <div className="titre-loge">
            <h1 className="titre">{title}</h1>
            <p className="titre-h3">{sousTitre}</p>
          </div>

          <div className="main-tags-loge">{tags}</div>
        </div>

        <div className="host-etoiles">
          <div className="etoiles-loge">{notes}</div>

          <div className="host">
            <p className="host-nom">{logementId.host.name}</p>
            <img
              className="host-img"
              src={logementId.host.picture}
              alt="proprio"
            />
          </div>
        </div>
      </div>

      <div className="collapses-loge">
        <div className="collapse-loge">
          <Collapse
            titre={"Description"}
            description={logementId.description}
          />
        </div>

        <div className="collapse-loge">
          <Collapse titre={"Equipement"} description={listEquipement} />
        </div>
      </div>
    </>
  );
}

export default Loge;
