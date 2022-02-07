import ItemDetail from "../item-detail/ItemDetail";
import { productsAPI } from "../../helpers/promises";
import { useEffect, useState } from "react";

 const ItemDetailCountainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState(true);
 
 useEffect (() => {
     getProducts();
 }, []);

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoadingCharacters (false)
    }
  };
  
  if (loadingCharacters) {
    return <h1>Cargando Mercado 🚀🚀🚀</h1>;
  }

   return (
     <div>
          <h1>Producto seleccionado</h1>
      <p>{selectedItem && selectedItem.image}</p>
      <p>{selectedItem && selectedItem.name}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>Precio:{selectedItem && selectedItem.price}</p>
      <p>Stock:{selectedItem && selectedItem.stock}</p>
      <hr />
      
        {products.map((product) => (
        <ItemDetail key={product.id} {...product} setSelectedItem={setSelectedItem} />
      ))}
    
     </div>
   )
 };
   export default ItemDetailCountainer;