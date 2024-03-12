import React, { useState } from "react";
import ProductCard, { Product } from "../components/productCard"

const PizzePage: React.FC = () => {

  const [cart, setCart] = useState<Product[]>([]);

  return (
    <section className="">
      <ProductCard setCart={setCart} />
    </section>
  )

}

export default PizzePage