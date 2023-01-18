import{registrarMedico} from "../../services/resgistrarMedico.js"

export function validarFormulario(datos){

    //REFERENCIAS A ETIQUETAS QUE QUIERO VALIDAR
    let etiquetaNombre=document.getElementById("nombres")
    let etiquetaDocumento=document.getElementById("documento")
    //let etiquetaRegistro=document.getElementById("registro")
    
    //Validar 3 campos del fomrulario
    //Nombres-documento-registro del medico
    let nombresMedico=datos.nombre
    let documentoMedico=datos.documento
    let registroMedico=datos.registro
    
    //AGREGAR TODOS LOS CAMINOS POSIBLES PARA VALIDAR EL FORMUALRIO
    if(nombresMedico=="" && documentoMedico=="" && registroMedico==""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.add("is-invalid")
        //etiquetaRegistro.classList.add("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre, documento y registro son obligatorios',
          })
    }else if(nombresMedico==""&& documentoMedico!=""&& registroMedico!=""){
        etiquetaNombre.classList.add("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
        //etiquetaRegistro.classList.remove("is-invalid")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre es obligatorio',
          })
    }else if(nombresMedico!=""&& documentoMedico==""&& registroMedico!=""){
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
        //alert("nos vamos para la BD")
        registrarMedico(datos)
        etiquetaNombre.classList.remove("is-invalid")
        etiquetaDocumento.classList.remove("is-invalid")
    }

    
}