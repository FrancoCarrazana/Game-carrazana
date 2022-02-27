

//  const ItemList = [
//     {
//         id: "1",
//         name: "Uncharted 4",
//         description: "Descripcion:El desenlace del ladrón, es un videojuego de acción-aventura en tercera persona, lanzado el 10 de mayo de 2016, distribuido por Sony Computer Entertainment y desarrollado por Naughty Dog",
//         stock: "20",
//         price: "60 ",
//         image: <img alt="uncharted" width="200px" height="300px" src={"https://www.filmmusicsite.com/images/covers/normal/51148.jpg"}/>,
//         category: "Aventura"
//     },
//     {
//         id: "2", 
//         name:"Nier:Automata",
//         description: "El videojuego comparte el mismo universo que Nier, una serie derivada de la saga Drakengard. La historia sigue las batallas del androide de combate 2B, su compañero 9S, y el obsoleto prototipo A2, en una guerra de poder entre las máquinas creadas por invasores de otro mundo y los restos de la humanidad.",
//         stock: "9",
//         price: "30 ",
//         image: <img alt="nier:automata" width="200px" height="300px" src ={"http://img1.ak.crunchyroll.com/i/spire3/9bf0866121392f6822e849b6a59ef65f1478114670_full.jpg"}/>,
//         category: "Accion"
//     },
//     {
//         id: "3", 
//         name:"Valorant",
//         description: "Valorant es un videojuego de disparos táctico en equipo y en primera persona ambientado en un futuro próximo",
//         stock: "999",
//         price: "0",
//         image: <img alt="valorant" width="200px" height="300px" src ={"https://media.vandal.net/m/78531/valorant-202052910331074_1.jpg"} />,
//         category: "Disparos"
//     },
// ];

// export default ItemList;
// import { useEffect, useState } from "react";
// import { collection, getDocs, getFirestore } from "firebase/firestore";
// import { Link } from "react-router-dom";


const ItemList = () => {
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
    {products && products.map(({name, price, image, description, stock,id}) => 
     ( <div key={id}>
      <h4>{name}</h4>
      <img src={image} alt={`${name}`} />
      <h4>${price}</h4>
      <p>Descripción:{description}</p>
      <h4>Stock:{stock}</h4>
      <Link to={`/item/${id}`}><button>Seleccionar producto</button></Link>
      <hr/>
      </div>
      )
    )
    
  }
  </div>
)

}

// export default ItemList;