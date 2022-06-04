// ////////////// VAR GLOBALES/////////////////
// let arrayItemsSeleccionados; 
// let dataApiCarrito;
// let arrayCarrito=[]
// let arrayFiltrado=[]
// let getStorage= []
// let arrayData;
// //


// ///////////////////CODIGO////////////////////////


// // Objetivos: (TODO:)

// // - Items seleccionados deben pushearse al icono del carro
// // - el carro deberia mostrar cuantos items tiene dentro?
// // - una pagina de html nueva donde muestre los items agregados desplegados con su precio, cantidad, "seguir comprando", "realizar compra", foto del producto, nombre.
// // - 


// async function getData() {
//     await fetch("https://apipetshop.herokuapp.com/api/articulos")
//         .then(response => response.json())
//         .then(json => dataApiCarrito = json)

//         arrayData = dataApiCarrito.response
//         console.log(arrayData)
//         id = 1
//         arrayData.map(item => item.id = id++)



// getDataLocalStorage ()

// let showNav = document.querySelector(".showNav")
// let ulNav = document.querySelector("#ulNav")

// showNav.addEventListener("click", () => {
//     ulNav.classList.toggle("visually-hidden")
// })
// }


// let templateCard = "";

// async function displayCarrito (arrayFiltrado){

//     if (arrayFiltrado.length > 0) {
//         arrayFiltrado.forEach (element => 
//             templateCard += 
//             `
//             <div class="col-lg-3 col-md-6 col-sm-12 my-2 m-3">
//             <div class="card">
//                 <img src="${element.imagen}" class="card-img-top border" alt="...">
//                 <div class="card-body">
//                     <h3 class="card-text mb-3">${element.nombre}</h3>
//                     <h4 class="card-title mb-3">$${element.precio} <span class="text-danger parpadeo">¡¡Ultimas Unidades!!</span></h4>
//                 </div>
//             </div>
//         </div>
//             `
//         )}else {
//             `<p> No hay productos agregados al Carrito</p>`
//     }
// }

// async function getDataLocalStorage() {

//     if (localStorage.getItem("producto")) {
//         arrayFiltrado = JSON.parse(localStorage.getItem("producto"))
//         //console.log(arrayFavoritos)
//         let data = arrayFiltrado.filter(item => arrayFiltrado.includes(item.id))
//         // console.log(arrayItems)
//         console.log(data)
//         displayCarrito(data)
//     } else {
//         arrayFiltrado = []
//     }
// }
// // Compara los id de los array carrito


// async function fnCarrito (idCard) {
//     //console.log("u" + idCard)

//         if (localStorage.getItem("producto")) {
//             arrayCarrito = JSON.parse(localStorage.getItem("producto")) //conserva lo ya guardado
//             if (arrayCarrito.includes(idCard)){ 
//             arrayCarrito= arrayCarrito.filter(id => id != idCard)
//         } else {
//             arrayCarrito.push(idCard) // ...de lo contrario, pushea las cosas al arrayCarrito
//         }   
//     } else {
//         arrayCarrito = [idCard]  
//     }
//     localStorage.setItem("producto", JSON.stringify(arrayCarrito)) // esto sigue agregando cosas nuevas

//     console.log("aaaaa D:" + arrayCarrito)

// }



// getData()

////////////// VAR GLOBALES/////////////////
let arrayItemsSeleccionados;
let dataApiCarrito;
let arrayCarrito = []
let arrayFiltrado = []
let getStorage = []
let arrayData;
//


///////////////////CODIGO////////////////////////


// Objetivos: (TODO:)

// - Items seleccionados deben pushearse al icono del carro
// - el carro deberia mostrar cuantos items tiene dentro?
// - una pagina de html nueva donde muestre los items agregados desplegados con su precio, cantidad, "seguir comprando", "realizar compra", foto del producto, nombre.
// - 


async function getData() {
    await fetch("https://apipetshop.herokuapp.com/api/articulos")
        .then(response => response.json())
        .then(json => dataApiCarrito = json)

    arrayData = dataApiCarrito.response
    console.log(arrayData)
    id = 1
    arrayData.map(item => item.id = id++)



    getDataLocalStorage()
}

async function fnCarrito(idCard) {
    //console.log("u" + idCard)

    if (localStorage.getItem("producto")) {
        arrayCarrito = JSON.parse(localStorage.getItem("producto")) //conserva lo ya guardado
        if (arrayCarrito.includes(idCard)) {
            arrayCarrito = arrayCarrito.filter(id => id != idCard)
        } else {
            arrayCarrito.push(idCard) // ...de lo contrario, pushea las cosas al arrayCarrito
        }
    } else {
        arrayCarrito = [idCard]
    }
    localStorage.setItem("producto", JSON.stringify(arrayCarrito)) // esto sigue agregando cosas nuevas

    console.log("aaaaa D:" + arrayCarrito)

}
async function getDataLocalStorage() {

    if (localStorage.getItem("producto")) {
        console.log(localStorage.getItem("producto"))
        arrayFiltrado = JSON.parse(localStorage.getItem("producto"))
        let data = arrayData.filter(item => arrayFiltrado.includes(item.id))
        console.log(data)
        displayCarrito(data)
    } else {
        arrayFiltrado = []
    }
}


// let templateCard = "";

// async function displayCarrito (arrayFiltrado){

//     if (arrayFiltrado.length > 0) {
//         arrayFiltrado.forEach (element => 
//             templateCard += 
//             `
//             <div class="col-lg-3 col-md-6 col-sm-12 my-2 m-3">
//             <div class="card">
//                 <img src="${element.imagen}" class="card-img-top border" alt="...">
//                 <div class="card-body">
//                     <h3 class="card-text mb-3">${element.nombre}</h3>
//                     <h4 class="card-title mb-3">$${element.precio} <span class="text-danger parpadeo">¡¡Ultimas Unidades!!</span></h4>
//                 </div>
//             </div>
//         </div>
//             `
//         )}else {
//             `<p> No hay productos agregados al Carrito</p>`
//     }
//     document.getElementById("carrito_detalles").innerHTML = templateCard
// }

let templateCard = "";

async function displayCarrito(arrayFiltrado) {

    if (arrayFiltrado.length > 0) {
        arrayFiltrado.forEach(element =>
            templateCard +=
            `
            <section>
<div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col">

        <div class="card mb-4">
        <div class="card-body p-4">

            <div class="row align-items-center justify-content-between">
            <div class="col-md-2">
                <img src="${element.imagen} size:"width: 5vw;"
                class="img-fluid" alt="producto">
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                <p class="small text-muted mb-4 pb-2">Name</p>
                <p class="lead fw-normal mb-0">${element.nombre}</p>
                </div>
            </div>

            <div class="col-md-2 d-flex justify-content-center">
                <div>
                <p class="small text-muted mb-4 pb-2">Quantity</p>
                <p class="lead fw-normal mb-0">1</p>
                </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                <p class="small text-muted mb-4 pb-2">Price</p>
                <p class="lead fw-normal mb-0">$${element.precio}</p>
                </div>
            </div>
            </div>
        </div>
        </div>
            `
        )
    } else {
        `<p> No hay productos agregados al Carrito</p>`
    }
    document.getElementById("carrito_detalles").innerHTML = templateCard
}



getData()


let showNav = document.querySelector(".showNav")
let ulNav = document.querySelector(".ulNav")

showNav.addEventListener("click", () => {
    ulNav.classList.toggle("visually-hidden")
})