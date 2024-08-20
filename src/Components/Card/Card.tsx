
const Card = ( { product, isLoading } ) => {
  return (
    <div className="container-card">
        <img src={product.image} alt={product.title} className="image-card"/>

        <div className="container-descrip-price">
          <p className="description-card">{product.description}</p>
          <p className="price-card">${product.price}</p>
        </div>

        <div className="container-btns-card">
          <button className="btn-comprar">COMPRAR</button>
          <button className="btn-ver-mas">VER MAS</button>
        </div>

    </div>
  )
}

export { Card }