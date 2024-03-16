import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);

  const toCart = (item) => {
    setSum((prevSum) => prevSum + item.price);
    setCart((cart) => [...cart, item.name]);
    
  };

  const printCart = () => {
    if (cart.length === 0) {
      return <p key="empty">Cart is Empty</p>;
    }

    const list = cart.map((name, index) => {
      return <p key={index}>{name}</p>;
    });

    return list;
  };

  console.log(sum);
  console.log(cart);

  return (
    <div className="App">
      <h1>Megan's Bakery</h1>{" "}
      <div className="cards">
        {bakeryData.map(
          (
            item,
            index // TODO: map bakeryData to BakeryItem components
          ) => (
            <BakeryItem
              item={item}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              toCart={toCart}
              index={index}
            ></BakeryItem>
          )
        )}
      </div>
      <div>
        <h2>Cart</h2>
        {printCart()}
        <p>Sum: {sum}</p>
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
