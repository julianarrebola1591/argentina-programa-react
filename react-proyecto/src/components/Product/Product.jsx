import React from "react"
import './Product.css'

const Product = (p) => {

  return (
    <div>
       {
        p.nombre
        ? <h2>{p.nombre}</h2>
        : <h2 className="red">ERROR 404</h2>
       }
      <p>{p.descripcion}</p>
      <span>Precio: {p.precio}</span>
      <div>
        Stock: {p.stock}
      </div>
    </div>
  )

}

export default Product