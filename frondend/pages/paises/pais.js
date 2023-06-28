import {getPais} from "./API.js";
import { NuevoPais } from "./API.js";
import { DeletePais } from "./API.js";


addEventListener("DOMContentLoaded", ()=>{
    cargarPais();
})

async function cargarPais() {
    const pais = await getPais();
    const paises = document.querySelector("#datosPais");
    pais.forEach(element => {
        let platilla = `
        <tr>
            <td scope="row">${element.idPais}</td>
            <td>${element.nombrePais}</td>
            <td><button id="${element.idPais}" type="button" class="btn btn-danger delete">Eliminar</button></td>
        </tr>
        
        `
        paises.innerHTML += platilla
    });
}

const formulario = document.querySelector('#registrar')
formulario.addEventListener('submit', insertarPais)

function insertarPais(e) {
    e.preventDefault();
    const nombrePais = document.querySelector("#nombrePais").value

    const registro ={
        nombrePais
    }
    if (validation(registro)) {
        alert("Todos los Datos deben ser registrados")
    }return NuevoPais(registro)
}

function validation(Objeto) {
    return !Object.values(Objeto).every(element=>element !== "")
}

const eliminar = document.querySelector("#datosPais");
eliminar.addEventListener("click", borrar);

function borrar(e) {
    if (e.target.classList.contains('delete')) {
        const idCamper = e.target.getAttribute('id');
        const confir = confirm("Deses Eliminar este Pais?")
        if (confir) {
            DeletePais(idCamper);
        }
    }
}
