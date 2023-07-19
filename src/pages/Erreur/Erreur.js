import log from "../../assets/404.png";
import "./erreur.css";
import { NavLink } from "react-router-dom";

function Erreur() {
  return (
    <div>
      <div className="logo-erreur">
        <img className="logo-erreur" src={log}></img>
        <p className="titre">Oups! La page que vous demmandez n'existe pas</p>
        <NavLink to="/">Retourner sur la page d'acceuil</NavLink>
      </div>
    </div>
  );
}

export default Erreur;
