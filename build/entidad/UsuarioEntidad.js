"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioEntidad {
    constructor(nomu, apeu, estu, nuipu, diru, coru, tfu, celu, clu, imgu, fecu, codp) {
        (this.nombreUsuario = nomu),
            (this.apellidoUsuario = apeu),
            (this.estadoUsuario = estu),
            (this.nuipUsuario = nuipu),
            (this.direccionUsuario = diru),
            (this.correoUsuario = coru),
            (this.telFijoUsuario = tfu),
            (this.celUsuario = celu),
            (this.claveUsuario = clu),
            (this.imagenUsuario = imgu),
            (this.fechaCreacionUsuario = fecu),
            (this.codPerfil = codp);
    }
}
exports.default = UsuarioEntidad;
