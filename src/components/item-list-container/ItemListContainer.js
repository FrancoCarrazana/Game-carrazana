import  {useEffect, useState}  from "react";
import Item from "../Item/Item";
import { productsAPI } from "../../helpers/promises";

const ItemListContainer = () => { 
    const [selectedItem, setSelectedItem] = useState(null);
    const [products,setProducts] = useState ([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () =>{ 
        try {
         const result = await productsAPI;
        setProducts(result);
        } catch (error) {
        console.error(error);
        } finally {
            setLoading (false);
            console.log("finalizacion del consumo de API");
        }
    };

    if (loading) {
        return <h1>Cargando ...</h1>
    }
    return (
        <>
        <h1> Lista de juegos </h1>
        <h3> producto selecionado</h3>
        <p>{selectedItem && selectedItem.name}</p>
        <p>{selectedItem && selectedItem.description}</p>
        <p>{selectedItem && selectedItem.price}</p>
        <p>{selectedItem && selectedItem.stock}</p>
        
        <hr/>
        {products.map((product) => (
        <Item key={product.id} {...product} setSelectedItem={setSelectedItem} />
      ))}
        </>
    );
}

export default ItemListContainer;
