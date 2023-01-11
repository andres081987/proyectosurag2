//IMPORTACIONES
import {capturarDatos} from '../formularios/formulariopacientes.js';

//etiquetas que controle:
let etiquetaNombre=document.getElementById("nombrespacientes")
let etiquetaDocumento=document.getElementById("documentopaciente")
let etiquetaRegimen=document.getElementById("regimen")
let etiquetaGrupo=document.getElementById("grupodeingreso")
let etiquetaCuota=document.getElementById("cuota")
let etiquetaTelefono=document.getElementById("Telefonopaciente")
let etiquetaCorreo=document.getElementById("correopaciente")
let etiquetaBotonpaciente=document.getElementById("botonenviopaciente")

//detectar el evento de clic
etiquetaBotonpaciente.addEventListener("click",function(evento){
    evento.preventDefault()   
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaRegimen,etiquetaGrupo,etiquetaCuota,etiquetaTelefono,etiquetaCorreo,etiquetaBotonpaciente)       
});