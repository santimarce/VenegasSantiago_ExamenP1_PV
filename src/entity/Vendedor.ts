// Examen Primer Parcial: Santiago Venegas

import { Persona } from "./Persona";

export enum Seccion {
  Mujeres = "mujeres",
  Niños = "niños",
  Hombres = "hombres",
}

export class Vendedor extends Persona {
  constructor(nombre: string, edad: number, public seccion: Seccion) {
    super(nombre, edad);
  }
}
