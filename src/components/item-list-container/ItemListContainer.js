import  {useState}  from "react";
import ItemCounter from "../item-count/itemCount";
import Item from "../Item/Item";

const items = [
    { id:"1", name: "Juego 1", price: "60.00" },
    { id:"2", name: "juego 2", price: "50.00" },
    { id:"3", name: "juego 3", price: "40.00" },

];

const ItemListContainer = () => { 
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <>
        <h1> Lista de juegos </h1>
        <h3> producto selecionado</h3>
        <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
        <p>{selectedItem ? selectedItem.price : "Ninguno"}</p>
        <p>{selectedItem ? selectedItem.id : "Ninguno"}</p>
        <ItemCounter stock={5}/>
        <hr/>
            {items.map(({ id ,name, price }) => (
                <Item key={id} name={name} price={price} setSelectedItem={setSelectedItem} id={id} />
            ))}
        </>
    );
}

export default ItemListContainer;
