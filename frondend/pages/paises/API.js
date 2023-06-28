const urlPais = "http://localhost/ArTeM01-043/Reto/backend/controllerPais.php?op=GetAll";
const urlNuevoPais = "http://localhost/ArTeM01-043/Reto/backend/controllerPais.php?op=Insert";
const urlDeletePais = "http://localhost/ArTeM01-043/Reto/backend/controllerPais.php?op=Delete"

export const getPais = async () => {
    try {
        const pais = await fetch(urlPais);
        const result = await pais.json();
        return result
    } catch (error) {
        console.log(error);
    }
}

export const NuevoPais = async (registrar) =>{
    try {
        await fetch(urlNuevoPais,{
            method:"POST",
            body: JSON.stringify(registrar),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const DeletePais = async idPais =>{
    try {
        await fetch(`${urlDeletePais}&id=${idPais}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}