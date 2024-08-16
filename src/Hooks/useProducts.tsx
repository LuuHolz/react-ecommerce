import { useState } from 'react'

const useProducts = () => {

    const [ products, setProducts ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [ error, setError ] = useState('');

    const getProducts = async() => {

        setIsLoading(true);

        try{
            const response = await fetch( 'https://fakestoreapi.com/products' );
            const data = await response.json();

            setProducts(data);
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

  return { isLoading, error, products, getProducts }
}

export  { useProducts };