"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioDAO_1 = __importDefault(require("../dao/UsuarioDAO"));
class UsuarioControlador extends UsuarioDAO_1.default {
    cantidadEnPerfil(req, res) {
        UsuarioControlador.cantidadUsuariosEnPerfil(req.params.codPerfil, res);
    }
    consulta(req, res) {
        UsuarioControlador.consultarUsuarios(res);
    }
    consultPerfil(req, res) {
        UsuarioControlador.obtenerUsuariosPerfil(req.params.codPerfil, res);
    }
    crear(req, res) {
        const elCorreo = { correoUsuario: req.body.coreoUsuario };
        UsuarioControlador.crearUsuario(elCorreo, req.body, res);
    }
    iniciar(req, res) {
        UsuarioControlador.iniciarSesion(req.body, res);
    }
    eliminar(req, res) {
        UsuarioControlador.eliminarUsuario(req.params.codigo, res);
    }
    actualizar(req, res) {
        UsuarioControlador.actualizarUsuario(req.params.codigo, req.body, res);
    }
}
// Exportar la clase como un objeto para no crear nuevos objetos al utilizarla
const usuarioControlador = new UsuarioControlador();
exports.default = usuarioControlador;
