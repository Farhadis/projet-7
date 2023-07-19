import "./apropos.css";
import bg2 from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

const Apropos = () => {
  return (
    <div>
      <Banner slide={bg2} title={""} size={"grand"} />

      <div className="center">
        <div className="main-apropos">
          <Collapse
            titre={"Fiabilité"}
            description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />

          <Collapse
            titre={"Respect"}
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          <Collapse
            titre={"Service"}
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />

          <Collapse
            titre={"Securité"}
            description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </div>
  );
};

export default Apropos;
