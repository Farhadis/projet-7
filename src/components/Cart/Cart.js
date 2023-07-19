import "./cart.css";

const Cart = ({ title, cover }) => {
  return (
    <div className="cart">
      <img src={cover} alt={title}></img>
      <div className="titre-cart">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Cart;
