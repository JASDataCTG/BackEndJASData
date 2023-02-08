"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Impedir el acceso a quien no tenga Token
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Seguridad {
    // Crear metodo que recibe, responde y continua
    analizarToken(req, res, next) {
        var _a;
        if (req.headers.authorization) {
            try {
                const miLlave = String(process.env.CLAVE_SECRETA);
                const tokenRecibido = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
                const infoUsuario = jsonwebtoken_1.default.verify(tokenRecibido, miLlave);
                req.body.datosUsuario = infoUsuario;
                next();
            }
            catch (error) {
                res.status(401).json({ respuesta: "El token no es correcto" });
            }
        }
        else {
            res.status(401).json({ respuesta: "No puedes ingresar" });
        }
    }
}
const seguridad = new Seguridad();
exports.default = seguridad;
