import {validarFormulario} from './validacionFormularioPacientes.js'

// Creamos una funcion que nos permita recibir los datos del formulario
export function capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaRegimen,etiquetaCorreo,etiquetagrupodeingreso,etiquetaCuota,etiquetaTelefono){  
      
let nombrespacientes=etiquetaNombre.value
let documentopaciente=etiquetaDocumento.value
let regimen=etiquetaRegimen.value
let grupodeingreso=etiquetagrupodeingreso.value
let cuota=etiquetaCuota.value
let Telefonopaciente=etiquetaTelefono.value
let correopaciente=etiquetaCorreo.value

// Debemos almacenar todos los valores del formulario en una sola variable
//Obetjo=almacenar varios datos en 1soloespacio de memoria
let datosFormularioMedico={
    nombre:nombrespacientes,
    documento:documentopaciente,
    regimen:regimen,
    grupo:grupodeingreso,
    cuota:cuota,
    telefono:Telefonopaciente,
    correo:correopaciente,
}

validarFormulario(datosFormularioMedico);


}