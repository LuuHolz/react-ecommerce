import { useEffect } from "react";
import { AppNavbar, Card } from "../../Components"
import { useProducts } from "../../Hooks/useProducts"


const Home = () => {

  const { isLoading, error, products, getProducts } = useProducts();

  useEffect(() => {
    getProducts()
  
  }, [])
  

  return (
    <>
      <AppNavbar/>

      {
        products.map((product, index) => (
          <Card key={index} product={product} isLoading={isLoading}/>

        ))
      }
    </>
  )
}

export { Home } 