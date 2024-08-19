
const Card = ( { product, isLoading } ) => {
  return (
    <div className="container-card">
        <img src={product.image} alt={product.title} className="image-card"/>
        {/* <p className="description-card">{product.description}</p> */}
        <p className="price-card">${product.price}</p>
    </div>
  )
}

export { Card }