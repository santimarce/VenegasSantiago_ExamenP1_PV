"use strict";
// Examen Primer Parcial: Santiago Venegas
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendedor = exports.Seccion = void 0;
const Persona_1 = require("./Persona");
var Seccion;
(function (Seccion) {
    Seccion["Mujeres"] = "mujeres";
    Seccion["Ni\u00F1os"] = "ni\u00F1os";
    Seccion["Hombres"] = "hombres";
})(Seccion = exports.Seccion || (exports.Seccion = {}));
class Vendedor extends Persona_1.Persona {
    constructor(nombre, edad, seccion) {
        super(nombre, edad);
        this.seccion = seccion;
    }
}
exports.Vendedor = Vendedor;
