import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading , setLoading] =  useState(true);
    const db = getFirestore();
    useEffect(()=> {

        getProducts()
        .then(()=>setLoading(false))
    }, []);

    const getProducts = async ()=> {

        try {
            const catalogo = []
           const result = await getDocs(
               collection(db, 'items')            
           )
           result.forEach((doc) => {
               catalogo.push(doc.data())
          }); 
          console.log(catalogo)
           setProducts(catalogo)
                     
        } catch (error) {
            console.log(error)
            
        }finally {
            console.log("Finalización del consumo de la API productsAPI");
          }
    };

    return {
        products,
        loading
    };

};

export default useProducts;

// import { useEffect, useState } from "react";
// import { productsAPI } from "../helpers/promises";

// const useProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     try {
//       const result = await productsAPI;
//       setProducts(result);
//     } catch (error) {
//       console.log({ error });
//     } finally {
//       console.log("Finalización del consumo de la API productsAPI");
//     }
//   };

//   return {
//     products,
//   };
// };

// export default useProducts;