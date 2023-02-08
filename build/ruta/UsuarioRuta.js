"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioControlador_1 = __importDefault(require("../controlador/UsuarioControlador"));
class UsuarioRuta {
    constructor() {
        // Inicializar la variable
        this.rutaAPI = (0, express_1.Router)();
        this.configurarRutas();
    }
    configurarRutas() {
        // Crear endpoint para la consulta
        this.rutaAPI.get("/listado", UsuarioControlador_1.default.consulta);
        // Crear endpoint para listar los usuarios por perfil
        this.rutaAPI.get("/todos/:codPerfil", UsuarioControlador_1.default.consultPerfil);
        // Crear endpoint para contar los usuarios de un perfil
        this.rutaAPI.get("/cantxperfil/:codPerfil", UsuarioControlador_1.default.cantidadEnPerfil);
        // Crear endpoin para la creación
        this.rutaAPI.post("/crear", UsuarioControlador_1.default.crear);
        // Crear endpoint para iniciar sesión de usuario
        this.rutaAPI.post("/iniciar", UsuarioControlador_1.default.iniciar);
        // Crear endpoint para eliminar
        this.rutaAPI.delete("/eliminar/:codigo", UsuarioControlador_1.default.eliminar);
        // Crear endpoint para actualizar
        this.rutaAPI.put("/actualizar/:codigo", UsuarioControlador_1.default.actualizar);
    }
}
const usuarioRuta = new UsuarioRuta();
// Exportar la propiedad rutaAPI para tener acceso a todos los endpoints
exports.default = usuarioRuta.rutaAPI;
