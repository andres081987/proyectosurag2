export async function registrarMedico(medico){

    let url="https://apigestorapp.vercel.app/gestionapp/especialistas"

    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(medico)
    }

    let respuesta=await fetch(url,peticion)
    let respuestaOK=await respuesta.json()

    console.log(respuestaOK)

}