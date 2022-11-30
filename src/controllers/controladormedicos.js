//IMPORTACIONES
import {capturarDatos} from '../formularios/formularioMedicos.js'

//etiquetas que controle:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetaDocumento=document.getElementById("documento")
let etiquetaEspecialidad=document.getElementById("especialidad")
let etiquetaRegistro=document.getElementById("registro")
let etiquetaCorreo=document.getElementById("correo")
let etiquetaSede=document.getElementById("sede")
let etiquetaHorario=document.getElementById("horario")
let etiquetaDescripcion=document.getElementById("descripcion")
let etiquetaFoto=document.getElementById("foto")

//detectar el evento de clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()   
    capturarDatos(etiquetaNombre,etiquetaDocumento,etiquetaEspecialidad,etiquetaRegistro,etiquetaCorreo,etiquetaSede,etiquetaHorario,etiquetaDescripcion,etiquetaFoto)
       
})