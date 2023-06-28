import {getCampers} from "./API.js";
import { nuevoCamper } from "./API.js";
import { deleteCamper } from "./API.js";
import { getRegion } from "../regiones/API.js";


addEventListener("DOMContentLoaded", ()=>{
    cargarCamper();
})

async function cargarCamper() {
    const camper = await getCampers();
    const campers = document.querySelector("#datosCampers");
    camper.forEach(element => {
        let platilla = `
        <tr>
            <td scope="row">${element.idCamper}</td>
            <td>${element.nombreCamper}</td>
            <td>${element.apellidoCamper}</td>
            <td>${element.fechaNac}</td>
            <td>${element.idReg}</td>
            <td><button id="${element.idCamper}" type="button" class="btn btn-danger delete">Eliminar</button></td>
        </tr>
        
        `
        campers.innerHTML += platilla
    });
}

const formulario=document.querySelector('#resgistrar')
formulario.addEventListener('submit',insertarCamper)
function insertarCamper(e) {
    e.preventDefault();
    const nombreCamper = document.querySelector("#nombreCamper").value
    const apellidoCamper = document.querySelector("#apellidoCamper").value
    const fechaNac = document.querySelector("#fechaNac").value
    const idReg = document.querySelector("#Regionfrom").value

    const registro ={
        nombreCamper,
        apellidoCamper,
        fechaNac,
        idReg
    }
    if (validation(registro)) {
        alert("Todos los Datos deben ser registrados")
    }return nuevoCamper(registro)
}   

function validation(Objeto) {
    return !Object.values(Objeto).every(element=>element !== "")
}

const eliminar = document.querySelector("#datosCampers");
eliminar.addEventListener("click", borrar);

function borrar(e) {
    if (e.target.classList.contains('delete')) {
        const idCamper = e.target.getAttribute('id');
        console.log(idCamper);
        
        const confir = confirm("Deses Eliminar el Camper?")
        if (confir) {
            deleteCamper(idCamper);
        }
    }
}

addEventListener("DOMContentLoaded",regiones)

const region = document.querySelector("#Regionfrom")

async function regiones() {
    let data = await getRegion();
    data.forEach(element => {
        let plantilla = `<option value="${element.idReg}">${element.nombreReg}</option>`
        region.innerHTML += plantilla
    })
}
