
const Card = ( { product, isLoading } ) => {
  return (
    <div className="container-card">
        <img src={product.image} alt={product.title} className="image-card"/>
        <p>{product.description}</p>
        <p>${product.price}</p>
    </div>
  )
}

export { Card }