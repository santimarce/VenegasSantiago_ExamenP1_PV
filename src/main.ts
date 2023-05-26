// Examen Primer Parcial: Santiago Venegas

import { Persona } from "./entity/Persona";
import { Cliente } from "./entity/Cliente";
import { Vendedor, Seccion } from "./entity/Vendedor";

export interface IPersona {
    nombre: string;
    edad: number;
  }

export interface ICliente extends IPersona {
    direccion: string;
  }
export interface IVendedor extends IPersona {
    seccion: string;
  }
  
  function obtenerValoresFormulario(): [string, number, string, Seccion] {
    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    const edad = Number((document.getElementById("edad") as HTMLInputElement).value);
    const direccion = (document.getElementById("direccion") as HTMLInputElement).value;
    const seccion = (document.getElementById("seccion") as HTMLSelectElement).value as Seccion;
  
    return [nombre, edad, direccion, seccion];
  }
  
  function mostrarDatosIngresados(datos: [string, number, string, Seccion]) {
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