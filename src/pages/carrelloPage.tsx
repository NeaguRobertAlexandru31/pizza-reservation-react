import { useState }    from "react";
/* Components */
import ProductCardCart from "../components/productCardCart";
import { Product }     from "../components/productCard";

const Cart = () => {

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(product)
  };

  return (
    <section>
      <h1>Cart</h1>
      <ProductCardCart cart={cart} />
    </section>
    
  )
}

export default Cart;