

import { Link } from "react-router-dom";

const Item = ({ id, name, price, description, image,  }) => {
  
  
  return (
    <>
        <div>
          <h2>Nombre del producto: {name}</h2>
          <p>Descripción del producto: {description}</p>
          <h2>precio del producto: {price}</h2>
          <img src={image} alt={`${name}`} />
          <br/>
          <Link to={`/item/${id}`}><button>Seleccionar producto</button></Link>
        </div>
        <hr />
      </>
    );
  };
  
  export default Item;