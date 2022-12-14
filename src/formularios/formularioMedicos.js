import {validarFormulario} from './validacionFormularioMedico.js'

// Creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistro,etiquetaCorreo,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFoto){  
      
let nombreMedico=etiquetaNombre.value
let documentoMedico=etiquetaDocumento.value
let especialidadMedico=etiquetaEspecialidad.value
let registroMedico=etiquetaRegistro.value
let correoMedico=etiquetaCorreo.value
let sedeMedico=etiquetaSede.value
let horarioMedico=etiquetaHorario.value
let descripcionMedico=etiquetaDescripcion.value
let fotoMedico=etiquetaFoto.value

// Debemos almacenar todos los valores del formulario en una sola variable
//Obetjo=almacenar varios datos en 1soloespacio de memoria
let datosFormularioMedico={
    nombre:nombreMedico,
    documento:documentoMedico,
    especialidad:especialidadMedico,
    registro:registroMedico,
    correo:correoMedico,
    sede:sedeMedico,
    horario:horarioMedico,
    descripcion:descripcionMedico,
    foto:fotoMedico
}

validarFormulario(datosFormularioMedico);


}