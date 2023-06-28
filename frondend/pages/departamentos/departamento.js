import {getDepartamento} from "./API.js";
import { NuevoDepartamento } from "./API.js";
import { DeleteDepartamento } from "./API.js";
import {  getPais} from "../paises/API.js";


addEventListener("DOMContentLoaded", ()=>{
    cargarDep();
})

async function cargarDep() {
    const camper = await getDepartamento();
    const campers = document.querySelector("#datosDep");
    camper.forEach(element => {
        let platilla = `
        <tr>
            <td scope="row">${element.idDep}</td>
            <td>${element.nombreDep}</td>
            <td>${element.idPais}</td>
            <td><button id="${element.idDep}" type="button" class="btn btn-danger delete">Eliminar</button></td>
        </tr>
        
        `
        campers.innerHTML += platilla
    });
}

const formulario=document.querySelector('#registrar')
formulario.addEventListener('submit',insertarCamper)

function insertarCamper(e) {
    e.preventDefault();
    const nombreDep = document.querySelector("#nombreDep").value
    const idPais = document.querySelector("#Paisfrom").value

    const registro ={
        nombreDep,
        idPais
    }

    if (validate(registro)) {
        alert("Todos los Datos deben ser registrados")
    }return NuevoDepartamento(registro)
}

function validate(Objeto) {
    return !Object.values(Objeto).every(element=>element !== "")
}

const eliminar = document.querySelector("#datosDep");
eliminar.addEventListener("click", borrar);

function borrar(e) {
    if (e.target.classList.contains('delete')) {
        const idCamper = e.target.getAttribute('id');
        const confir = confirm("Deses Eliminar el Departamento?")
        if (confir) {
            DeleteDepartamento(idCamper);
        }
    }
}

addEventListener("DOMContentLoaded",pais)

const paises = document.querySelector("#Paisfrom")

async function pais() {
    let data = await getPais();
    data.forEach(element => {
        let plantilla = `<option value="${element.idPais}">${element.nombrePais}</option>`
        paises.innerHTML += plantilla
    })
}