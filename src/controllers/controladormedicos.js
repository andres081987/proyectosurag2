//etiquetas que controle:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")

//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()   
    // Swal.fire(
    //     'Exito!',
    //     'El especialista ha sido registrado!',
    //     'success'
    //   )

    //recibiendo los datos del formulario
    let nombresMedico=etiquetaNombre.value
    console.log(nombresMedico)
    let documentoMedico=etiquetaDocumento.value
    console.log(documentoMedico)
})