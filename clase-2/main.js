const productos = [
    {
    nombre: "arroz",
    precio: 350,
    stock: 12,
    id: 1
},
{
    nombre: "fideos",
    precio: 500,
    stock: 14,
    id: 2
},
{
    nombre: "mayonesa",
    precio: 1000,
    stock: 6,
    id: 3
},
{
    nombre: "manteca",
    precio: 650,
    stock: 1,
    id: 4
},
{
    nombre: "queso",
    precio: 1500,
    stock: 4,
    id: 5
}
]

let fideos = productos.find((producto) => {
    console.log("se ejecuto")
    return producto.nombre == 'fideos'
})


function getFruitById(id){
    let producto = productos.find((producto) => {
        return producto.id == id
    })
    return producto ? producto : 'Not found'
}

getFruitById()

function obtenerProductosMayoresA (precio){
    let producto = productos.filter((producto) => {
        return producto.precio > precio
    })
    return producto
}