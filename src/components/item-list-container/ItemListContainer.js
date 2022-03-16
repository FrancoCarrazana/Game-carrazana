import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import useProducts from "../../hooks/useProducts";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const filterProducts = products.filter(({ category }) => category === id);

  return (
    <main className="ITL">
      <div className="ITL">
        <h1 className="ITL-title">Lista de productos</h1>
        <hr />
        {!id &&
          products.map((product) => {
            if (product.id)
              return <Item className="ITL1" key={product.id} {...product} />;
          })}
        {id &&
          filterProducts.map((product) => {
            if (product.id)
              return <Item className="ITL1" key={product.id} {...product} />;
          })}
      </div>
    </main>
  );
};

export default ItemListContainer;
