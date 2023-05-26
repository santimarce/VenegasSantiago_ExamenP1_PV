"use strict";
// Examen Primer Parcial: Santiago Venegas
Object.defineProperty(exports, "__esModule", { value: true });
function obtenerValoresFormulario() {
    const nombre = document.getElementById("nombre").value;
    const edad = Number(document.getElementById("edad").value);
    const direccion = document.getElementById("direccion").value;
    const seccion = document.getElementById("seccion").value;
    return [nombre, edad, direccion, seccion];
}
function mostrarDatosIngresados(datos) {
    const [nombre, edad, direccion, seccion] = datos;
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Dirección:", direccion);
    console.log("Sección:", seccion);
}
function completarProceso() {
    console.log("Programa hecho por Santiago Venegas");
    const datosFormulario = obtenerValoresFormulario();
    mostrarDatosIngresados(datosFormulario);
}
