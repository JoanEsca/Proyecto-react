const products = [
    { id: "1", nombre: "Casco", stock:10, precio: 180000, img: "../img/casco.jpg", idCat: "3" },
    { id: "2", nombre: "Chaqueta", stock:10, precio: 90000, img: "../img/chaquetas.jpg", idCat: "3" },
    { id: "3", nombre: "Guantes", stock:10, precio: 35000, img: "../img/guantes.jpg", idCat: "2" },
    { id: "4", nombre: "Lentes", stock:10, precio: 45000, img: "../img/lentes.jpg", idCat: "2" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })
}


export const getUnProducts = (id) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const product = products.find(item => item.id === id);
            resolve(product);
        }, 500)
    })
} 

//Funcion que retorna una categoria.

export const getProductsCategory = (idCategory) =>{
    return new promise(resolve =>{
        setTimeout(() => {
            const productsCategory = products.find(item => item.idCat === idCategory);
            resolve(productsCategory);

        },100)
    })
}
