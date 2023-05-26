"use strict";
// Examen Primer Parcial: Santiago Venegas
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Persona_1 = require("./Persona");
class Cliente extends Persona_1.Persona {
    constructor(nombre, edad, direccion) {
        super(nombre, edad);
        this.direccion = direccion;
    }
}
exports.Cliente = Cliente;
