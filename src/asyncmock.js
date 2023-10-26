const products = [
    { id: 1, nombre: "Casco", precio: 180000, img: "./img/casco.jpg" },
    { id: 2, nombre: "Chaqueta", precio: 90000, img: "./img/chaquetas.jpg" },
    { id: 3, nombre: "Guantes", precio: 35000, img: "./img/guantes.jpg" },
    { id: 4, nombre: "Lentes", precio: 45000, img: "./img/lentes.jpg" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })
}