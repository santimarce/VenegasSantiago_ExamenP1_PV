// Examen Primer Parcial: Santiago Venegas

import { Persona } from "./Persona";

export class Cliente extends Persona {
  constructor(nombre: string, edad: number, public direccion: string) {
    super(nombre, edad);
  }
}
