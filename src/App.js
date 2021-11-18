import React from "react";
import Intro from "./components/introduction/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
    </div>
  );
}

export default App;
