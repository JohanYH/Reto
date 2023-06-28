const urlRegion = "http://localhost/ArTeM01-043/Reto/backend/controllerReg.php?op=GetAll";
const urlNuevoRegion = "http://localhost/ArTeM01-043/Reto/backend/controllerReg.php?op=Insert";
const urlDeleteRegion = "http://localhost/ArTeM01-043/Reto/backend/controllerReg.php?op=Delete"

export const getRegion = async () => {
    try {
        const region = await fetch(urlRegion);
        const result = await region.json();
        return result
    } catch (error) {
        console.log(error);
    }
}

export const NuevoRegion = async (registrar) =>{
    try {
        await fetch(urlNuevoRegion,{
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

export const DeleteRegion = async idReg =>{
    try {
        await fetch(`${urlDeleteRegion}&id=${idReg}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}