export function validarFormulario(datos){

    //REFERENCIAS A ETIQUETAS QUE QUIERO VALIDAR
    let etiquetaNombre=document.getElementById("nombrespacientes")
    let etiquetaDocumento=document.getElementById("documentopaciente")
    //let etiquetaRegistro=document.getElementById("registro")
    
    //Validar 3 campos del fomrulario
    //Nombres-documento-registro del medico
    let nombresPacientes=datos.nombre
    let documentoPaciente=datos.documento
    
    //AGREGAR TODOS LOS CAMINOS POSIBLES PARA VALIDAR EL FORMUALRIO
    if(nombresPacientes=="" && documentoPaciente==""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        //etiquetaRegistro.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre, documento y registro son obligatorios',
          })
    }else if(nombresPacientes==""&& documentoPaciente!=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
        //etiquetaRegistro.classList.remove("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre es obligatorio',
          })
    }else if(nombresPacientes!=""&& documentoPaciente==""){
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        //etiquetaRegistro.classList.remove("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El documento es obligatorio',
          })
    // }else if(nombresMedico!=""&& documentoMedico!=""&& registroMedico==""){
    //     etiquetaNombre.classList.remove("is-invalid")
    //     etiquetaDocumento.classList.remove("is-invalid")
    //     //etiquetaRegistro.classList.add("is-invalid")
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'EL registtro es obligatorio',
    //       })

    }else{
        alert("nos vamos para la BD")
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }

    
}