let productos = [
    { id: 1, nombre: "Pollo con almendras", precio: 40000 },
    { id: 2, nombre: "Rollitos de primavera", precio: 35000 },
    { id: 3, nombre: "Ssam de panceta", precio: 18000 },
    { id: 4, nombre: "Caramelo Dalgona", precio: 15000 },
    { id: 5, nombre: "Botella de Sake", precio: 37000 },
]

let divProductos = document.querySelector('#iFood')
productos.forEach(comida => {
divProductos.innerHTML += `
<li class="list-group-item">${comida.nombre} - $: ${comida.precio}</li>
`
})

let btnProductos = document.querySelector('#iaddFood')
let menUsuario = []

btnProductos.addEventListener("submit", (evento) => {
    evento.preventDefault()
    let solicitudComida = evento.target.platoUsuario.value
    if (solicitudComida != "pagar") {
        let validacionComida = productos.filter(plato => plato.nombre == solicitudComida)
        menUsuario.push(validacionComida[0])
        Swal.fire({
            title: 'Tu plato fue agregado',
            icon: 'success',
            iconColor: '#2bff00',
            color: '#fff',
            background: '#111',
            confirmButtonText: '¡Vale!',
            confirmButtonColor: '#1f911f',
        })
        
    } else {
        let precioTotal = 0
        menUsuario.forEach(pedido => {
            precioTotal = precioTotal + pedido.precio
        });
        document.querySelector("#payFood").innerHTML = `El precio a pagar es: $ ${precioTotal}`
        menUsuario = []
        console.log("precio total")
    }
})



    // let validarComida = productos.filter(plato => plato.nombre == solicitudComida)
    // menUsuario.push(validarComida[0]);
    // Swal.fire({
    //     title: 'Tu plato fue agregado',
    //     icon: 'success',
    //     iconColor: '#2bff00',
    //     color: '#fff',
    //     background: '#111',
    //     confirmButtonText: '¡Vale!',
    //     confirmButtonColor: '#1f911f',
    // })




//     let addComida = false;
//     (!addComida('proMenu')) ? addComida = true : '';

//     if (!addComida) {

//         let contador = 0
//         if (localStorage.getItem('contador') == "") {
//             localStorage.setItem('contador', 0)
//         } else {
//             contador = localStorage.getItem('contador')
//             contador = parseInt(contador)
//             contador++
//         }


//         let iComida = []
//         if (localStorage.getItem('agregarComida') != null) {
//             iComida = localStorage.getItem('agregarComida')
//             agregarComida = JSON.parse(agregarComida)
//         }

//         iComida.push({ id: contador, titulo: e.target.proMenu.value })

//         localStorage.setItem('notas', JSON.parseInt(iComida))
//         localStorage.setItem('contador', contador)

//         e.target.reset()
//         Swal.fire({
//             title: 'Tu plato fue agregado',
//             icon: 'success',
//             iconColor: '#2bff00',
//             color: '#fff',
//             background: '#111',
//             confirmButtonText: '¡Vale!',
//             confirmButtonColor: '#1f911f',
//         })

//     }
// listarMenu()

// })

// function listarMenu() {
//     if (parseInt(localStorage.getItem('contador')) >= 0) {

//         let productosFood = document.querySelector("#addFood")

//         productosFood.innerHTML = ''
//         let iComidaSeleccionada = JSON.parse(localStorage.getItem("proMenu"))

//         iComidaSeleccionada.forEach((precioComida) => {
//             grillaNotas.innerHTML += `
            
//             <form class="row container iFood">
//             <div class="input-group col-12 mt-4 mb-3">
//                 <input type="text" style="border-radius: 2px;" id="addFood ${precioComida.precio}" placeholder="¿Qué deseas comer?">
//                 <button class="btn btn-outline-secondary border-2" type="submit" id="button-addon2">Agregar</button>
//             </div>
//             <div class="col mb-3" id="payFood ${precioComida.precio}">
//                 <input type="text" placeholder="¿Pagamos?">
//             </div>
//         </form>
//         `
//         })
//         }
// }