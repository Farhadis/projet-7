import { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Cart from "../../components/Cart/Cart";
import "./home.css";
import bg from "../../assets/IMG.png";
import { NavLink } from "react-router-dom";


function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const getLogements = async () => {
      const response = await fetch("http://localhost:8000/logement");

      const responseData = await response.json();

      setLogements(responseData);
    };

    getLogements();
  }, []);

  return (
    <div>
      <Banner
        slide={bg}
        title={"Chez Vous, partout et ailleur"}
        size={"petit"}
      />

      <div className="main-cart">
        <div className="carts-home">
          {logements.map((item) => (
            <NavLink
              className="nav-link"
              key={item.id}
              to={"/logement/" + item.id + "#"}
            >
              <Cart
                key={item.id}
                id={item.id}
                title={item.title}
                cover={item.cover}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
