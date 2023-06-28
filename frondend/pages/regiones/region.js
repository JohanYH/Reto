import {getRegion} from "./API.js";
import { NuevoRegion } from "./API.js";
import { DeleteRegion } from "./API.js";
import { getDepartamento } from "../departamentos/API.js";


addEventListener("DOMContentLoaded", ()=>{
    cargarRegion();
})

async function cargarRegion() {
    const Region = await getRegion();
    const Regiones = document.querySelector("#datosRegion");
    Region.forEach(element => {
        let platilla = `
        <tr>
            <td scope="row">${element.idReg}</td>
            <td>${element.nombreReg}</td>
            <td>${element.idDep}</td>
            <td><button id="${element.idReg}" type="button" class="btn btn-danger delete">Eliminar</button></td>
        </tr>
        
        `
        Regiones.innerHTML += platilla
    });
}

const formulario=document.querySelector('#registrar')
formulario.addEventListener('submit',insertarRegion)

function insertarRegion(e) {
    e.preventDefault();
    const nombreReg = document.querySelector("#nombreReg").value
    const idDep = document.querySelector("#Depfrom").value
    
    const registro ={
        nombreReg
    }

    if (validate(registro)) {
        alert("Todos los Datos deben ser registrados")
    }return NuevoRegion(registro)
}

function validate(Objeto) {
    return !Object.values(Objeto).every(element=>element !== "")
}

const eliminar = document.querySelector("#datosRegion");
eliminar.addEventListener("click", borrar);

function borrar(e) {
    if (e.target.classList.contains('delete')) {
        const idReg = e.target.getAttribute('id');
        const confir = confirm("Deses Eliminar este Region?")
        if (confir) {
            DeleteRegion(idReg);
        }
    }
}

addEventListener("DOMContentLoaded", departamento)

const Region = document.querySelector("#Depfrom")
async function departamento() {
    let data = await getDepartamento();
    data.forEach(element => {
        let plantilla = `<option value="${element.idDep}">${element.nombreDep}</option>`
        Region.innerHTML += plantilla
    })
}