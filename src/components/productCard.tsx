import { useState, useEffect } from "react";

export interface Product {
  nome: string;
  descrizione: string;
  immagine: string;
  value: string;
}

const ProductCard = () => {

  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div className="h-full overflow-auto">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <div className="h-[55%]">
              <h2 className="text-xl font-semibold mb-2">{product.nome}</h2>
              <img src={product.immagine} alt={product.nome} className="mb-4 max-w-full h-auto rounded-md" onError={(e) => {
                e.currentTarget.src = 'https://www.geometrian.it/wp-content/uploads/2016/12/image-placeholder-500x500.jpg';
                }} 
              />
              <h1>Euro prezzo</h1>
            </div>
            <div className="h-[35%]">
              <p className="hidden text-gray-600 mb-4">{product.descrizione}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )

}

export default ProductCard