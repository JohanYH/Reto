const urlCampers = "http://localhost/ArTeM01-043/Reto/backend/controller.php?op=GetAll";
const urlNuevoCamper = "http://localhost/ArTeM01-043/Reto/backend/controller.php?op=Insert";
const urlDeleteCamper = "http://localhost/ArTeM01-043/Reto/backend/controller.php?op=Delete"

export const getCampers = async () => {
    try {
        const camper = await fetch(urlCampers);
        const result = await camper.json();
        return result
    } catch (error) {
        console.log(error);
    }
}

export const nuevoCamper = async (resgistrar) =>{
    try {
        await fetch(urlNuevoCamper,{
            method: "POST",
            body: JSON.stringify(resgistrar),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteCamper = async idCamper =>{
    try {
        await fetch(`${urlDeleteCamper}&id=${idCamper}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}