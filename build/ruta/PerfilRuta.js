"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PerfilControlador_1 = __importDefault(require("../controlador/PerfilControlador"));
class PerfilRuta {
    constructor() {
        // Inicializar la variable
        this.rutaAPI = (0, express_1.Router)();
        this.configurarRutas();
    }
    configurarRutas() {
        // Crear endpoint para la consulta
        this.rutaAPI.get("/listado", PerfilControlador_1.default.consulta);
        this.rutaAPI.get("/uno", PerfilControlador_1.default.consultarUno);
        // Crear endpoint para la creación
        this.rutaAPI.post("/crear", PerfilControlador_1.default.crear);
        // Crear endpoint para eliminar
        this.rutaAPI.delete("/eliminar/:codigo", PerfilControlador_1.default.eliminar);
        // Crear endpoint para actualizar
        this.rutaAPI.put("/actualizar/:codigo", PerfilControlador_1.default.actualizar);
    }
}
const perfilRuta = new PerfilRuta();
// Exportar la propiedad rutaAPI para tener acceso a todos los endpoints
exports.default = perfilRuta.rutaAPI;
