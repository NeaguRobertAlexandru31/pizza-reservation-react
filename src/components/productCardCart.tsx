import React from "react";
import { Product } from "./productCard";

interface ProductCardCartProps {
  cart: Product[];
}

const ProductCardCart: React.FC<ProductCardCartProps> = ({ cart }) => {

  return(
    <div>
    <h1>Elenco prodotti nel carrello</h1>
    <ul>
      {cart.map((product: any, index: any) => (
        <li key={index}>
          {product.nome} - {product.descrizione}
        </li>
      ))}
    </ul>
  </div>
  )

}

export default ProductCardCart