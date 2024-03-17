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
    setSum((prevSum) => parseFloat(prevSum.toFixed(2)) + parseFloat(item.price.toFixed(2)));
    setCart((cart) => [...cart, item]);
    
  };

  const printCart = () => {
    if (cart.length === 0) {
      return <p key="empty">Cart is Empty</p>;
    }

    const cartItems = cart.reduce((acc, item) => {
      const existingItem = acc.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        acc.push({ ...item, count: 1, name: item.name });
      }
      return acc;
    }, []);

    return cartItems.map((cartItem, index) => {
      console.log(cartItem.name);
      return (
        <p key={index}>
          {cartItem.count}x {cartItem.name}
        </p>
      );
    });

    // return list;
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
