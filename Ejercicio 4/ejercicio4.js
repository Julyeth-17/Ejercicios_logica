let productos = [
    { nombre: "Pollo con almendras", precio: 40000 },
    { nombre: "Rollitos de primavera", precio: 35000 },
    { nombre: "Ssam de panceta", precio: 18000 },
    { nombre: "Caramelo Dalgona", precio: 15000 },
    { nombre: "Botella de Sake", precio: 37000 },
]

let divProductos = document.querySelector('#iMenu')

for (let x = 0; x < productos.length; x++)

    divProductos.innerHTML += `
<div class="row" style="display: flex; justify-content: center ; text-align: start">
    <div class="col-6"> ${productos[x].nombre} </div>
    <div class="col-6"> ${productos[x].precio} </div>
</div>
`

let formularioMenu = document.querySelector("#addFood")
formularioMenu.addEventListener('submit', (eventoPedido) => {
    eventoPedido.preventDefault();

let total = 0
let iPedido = []

while(true) {
    iAddFood = document.querySelector('#addFood')

    if (iAddFood.document.querySelector('#payFood') === pagar)
    break;
}

if(productos[iAddFood]) {
    iPedido.push = [iAddFood]
    Swal.fire({
        title: 'Tu plato fue agregado',
        icon: 'success',
        iconColor: '#2bff00',
        color: '#fff',
        background: '#111',
        confirmButtonText: '¡Vale!',
        confirmButtonColor: '#1f911f',
        })
        
    total += iPedido[iAddFood]
    
} else {
    Swal.fire({
        title: 'Este playo no está en el menu, lo sentimos.',
        icon: 'error',
        iconColor: '#f60505',
    })
}

})

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