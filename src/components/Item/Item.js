import Button from "react-bootstrap/esm/Button";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "./item.css";
const Item = ({ id, name, price, description, image }) => {
  return (
    <>
      <div className="div1">
        <h2>Nombre del producto: {name}</h2>
        <p>Descripción del producto: {description}</p>
        <h2>precio del producto: {price}</h2>
        <Carousel>
          <Image className="IC-img" src={image} alt={`${name}`} />
        </Carousel>
        <br />
        <Link to={`/item/${id}`}>
          <Button className="IC-button" variant="primary" size="lg">
            Seleccionar un producto
          </Button>
        </Link>
      </div>
      <hr />
    </>
  );
};

export default Item;
