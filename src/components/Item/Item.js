const Item = ({ name, price, id, setSelectedItem }) => {
    const selectedItem = () => setSelectedItem ({name, price, id})   ;
    return (
        <>
        <h2>nombre del producto: {name}</h2>
        <h2>precio del producto: {price}</h2>
        <button onClick={selectedItem}>seleccionar producto</button>
        <hr/>
        </>
    );
    };
export default Item ;