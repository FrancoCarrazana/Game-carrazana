import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemsCollection = () => {
  const db = getFirestore();
  const ItemsCollection = collection(db, 'items');
  const [products,setProducts] = useState();
  useEffect(()=> {
    getDocs(ItemsCollection).then ((snapshot)=> {
      setProducts(snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()
      })))
    }, [])
  })
  return (
    <div>
    <h2>productos</h2>
    {products && products.map(({name, price, image, description, stock}) => 
     ( <>
      <h4>{name}</h4>
      <img src={image} alt={`${name}`} />
      <h4>${price}</h4>
      <p>Descripción:{description}</p>
      <h4>Stock:{stock}</h4>
      <hr/>
      </>
      )
    )
    
  }
  </div>
)

}

export default ItemsCollection;
// const ItemCollection = () => {
//     const [product, setProduct] = useState(null);
    
//     useEffect(()=> {
//       const db = getFirestore();
//         const docRef = doc(db, "items", "39GAyjG75EoZxYKg9MXQ");
//           getDoc(docRef).then((snapshot) => {
//             setProduct({ id: snapshot.id, ...snapshot.data() });
//           })
//     },[]);
    
//     return (
//         <div>
//            <h2>productos</h2>
//           {product && (
//               <>
//               <span>{product.image}</span> 
//               <h4>{product.name}</h4>
//               <h4>${product.price}</h4>
//               <p>Descripción:{product.description}</p>
//               </>
//           )}
//         </div>
//     )
// }

// export default ItemCollection ;