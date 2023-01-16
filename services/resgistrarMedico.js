export async function registrarMedico(medico){

    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"

    let peticion={
        method:"POST",
        body:JSON.stringify(medico)
    }

    let respuesta=await fetch(url,peticion)
    let respuestaOK=await respuesta.json()

}