"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PerfilDAO_1 = __importDefault(require("../dao/PerfilDAO"));
class PerfilControlador extends PerfilDAO_1.default {
    consulta(req, res) {
        PerfilControlador.consultarPerfiles(res);
    }
    crear(req, res) {
        PerfilControlador.crearPerfiles(req.body, res);
    }
    eliminar(req, res) {
        PerfilControlador.eliminarPerfil(req.params.codigo, res);
    }
    actualizar(req, res) {
        PerfilControlador.actualizarPerfil(req.params.codigo, req.body, res);
    }
    consultarUno(req, res) {
        PerfilControlador.obtenerUnPerfil(req.params.codigo, res);
    }
}
// Exportar la clase como un objeto para no crear nuevos objetos al utilizarla
const perfilControlador = new PerfilControlador();
exports.default = perfilControlador;
