import React, { useState, useEffect, Dispatch, SetStateAction } from "react";

export interface Product {
  nome: string;
  descrizione: string;
  immagine: string;
  value: string;
}

interface ProductCardProps {
  setCart: Dispatch<SetStateAction<Product[]>>;
}

const ProductCard: React.FC<ProductCardProps> = ({  }) => {

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./public/products.json');
        if (!response.ok) {
          throw new Error('Errore nella richiesta dei dati');
        }

        const data = await response.json();
        // Utilizza Pixabay per ottenere immagini correlate
        const pixabayApiKey = '42812744-2656cfb6a40247f86be374ea5';
        
        const productsWithImages = await Promise.all(
          data.map(async (product: Product) => {
            const query = `${product.nome} pizza italian`;
            const pixabayUrl = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${query}&image_type=photo`;

            try {
              const pixabayResponse = await fetch(pixabayUrl);
              if (!pixabayResponse.ok) {
                throw new Error('Errore nella richiesta di Pixabay');
              }

              const pixabayData = await pixabayResponse.json();
              const image = pixabayData.hits[0]?.webformatURL || '';

              return {
                ...product,
                immagine: image,
              };
            } catch (error) {
              const castedError = error as Error;
              console.error('Si è verificato un errore durante il recupero dei dati:', castedError.message);
              return product; // Mantieni il prodotto originale se c'è un errore con Pixabay
            }
          })
        );

        setProducts(productsWithImages);
        console.log(productsWithImages);
      } catch (error) {
        const castedError = error as Error;
        console.error('Si è verificato un errore durante il recupero dei dati:', castedError.message);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(product)
  };

  return (
    <div className="container mx-auto max-h-[75vh] overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <div className="h-[55%]">
              <img src={product.immagine} alt={product.nome} className="mb-4 max-w-full h-auto rounded-md" onError={(e) => {
                e.currentTarget.src = 'https://www.geometrian.it/wp-content/uploads/2016/12/image-placeholder-500x500.jpg';
                }} 
              />
            </div>
            <div className="h-[35%]">
              <h2 className="text-xl font-semibold mb-2">{product.nome}</h2>
              <p className="text-gray-600 mb-4">{product.descrizione}</p>
            </div>
            <div className="h-[10%]">
            <input
              className="border-2"
              type="number"
              min="0"
            />
            <button onClick={() => addToCart(product)}>
                clicl
            </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
    
  )

}

export default ProductCard