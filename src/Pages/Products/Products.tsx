import { useEffect } from "react";
import { Card } from "../../Components/Card/Card"
import { useProducts } from "../../Hooks/useProducts"
import { AppNavbar } from "../../Components";


const Products = () => {

  const { isLoading, error, products, getProducts } = useProducts();

  useEffect(() => {
    getProducts()
  
  }, [])
  

  return (
    <div className="container-home">

      <AppNavbar/>

      <p className="products-text-novedades">Novedades</p>

      <div className="container-home-cards">
        {
          products.map((product, index) => (
            <Card key={index} product={product} isLoading={isLoading}/>

          ))
        }
      </div>

    </div>
  )
}

export { Products } 