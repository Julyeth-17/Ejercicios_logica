let clientesFormulario = document.querySelector('#iFormulario')
let bntEnviar = document.querySelector('#iEnviar')

clientesFormulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let iGeneros = e.target.iGenero.value
    let iAge = e.target.iEdad.value
    if (iGeneros == "" || iAge == "") {
        Swal.fire('Llena todos los campos')
        return
    }

    if (iAge <= 10) {
        if (iGeneros == "Hombre") {
            Swal.fire({
                title: '¡Felicidades!',
                text: 'Te llevas un juguito y una porción de Pizza Tres Carnes',
                imageUrl: 'https://i.pinimg.com/originals/54/26/29/5426292f4bc0d6f10290f700493f5b7d.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        } else {
            (iGeneros == "Mujer");
            Swal.fire({
                title: '¡Felicidades!',
                text: 'Te llevas un juguito y una porción de Pizza Hawaiana',
                imageUrl: 'https://i.pinimg.com/originals/54/26/29/5426292f4bc0d6f10290f700493f5b7d.gif',
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: 'Custom image',
            })
        }
    } else if (iAge >= 18) {
        if (iGeneros == "Hombre") {
            Swal.fire({
                title: '¡Felicidades!',
                text: 'Te llevas una cerveza y una porción de Pizza Tres Carnes',
                imageUrl: 'https://www.radioformula.com.mx/u/fotografias/m/2023/5/4/f1280x720-660232_791907_5050.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        } else {
            (iGeneros == "Mujer")
            Swal.fire({
                title: '¡Felicidades!',
                text: 'Te llevas una cerveza y una porción de Pizza Hawaiana',
                imageUrl: 'https://img.freepik.com/fotos-premium/sabrosa-pizza-cerveza-mesa-madera_392895-12737.jpg?w=2000',
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: 'Custom image',
            })
        }
    }else{
        Swal.fire({
            title: '¡Lo sentimos!',
            text: 'Intentalo en otra ocasión',
            imageUrl: 'https://thumbs.gfycat.com/DirectImperturbableHyrax-size_restricted.gif',
            imageWidth: 500,
            imageHeight: 300,
            imageAlt: 'Custom image',
        })
    }
});

clientesFormulario;