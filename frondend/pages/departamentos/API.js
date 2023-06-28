const urlDepartamento = "http://localhost/ArTeM01-043/Reto/backend/controllerDep.php?op=GetAll";
const urlNuevoDepartamento = "http://localhost/ArTeM01-043/Reto/backend/controllerDep.php?op=Insert";
const urlDeleteDepartamento = "http://localhost/ArTeM01-043/Reto/backend/controllerDep.php?op=Delete"

export const getDepartamento = async () => {
    try {
        const departamento = await fetch(urlDepartamento);
        const result = await departamento.json();
        return result
    } catch (error) {
        console.log(error);
    }
}

export const NuevoDepartamento = async (registro) =>{
    try {
        await fetch(urlNuevoDepartamento,{
            method:"POST",
            body: JSON.stringify(registro),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const DeleteDepartamento = async idDep =>{
    try {
        await fetch(`${urlDeleteDepartamento}&id=${idDep}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}