"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const ConexionDB_1 = __importDefault(require("./ConexionDB"));
const PerfilRuta_1 = __importDefault(require("../ruta/PerfilRuta"));
const UsuarioRuta_1 = __importDefault(require("../ruta/UsuarioRuta"));
const Seguridad_1 = __importDefault(require("../middleware/Seguridad"));
class Servidor {
    constructor() {
        // Habilitar el proyecto para usar variables de ambiente
        dotenv_1.default.config({ path: "variables.env" });
        // Conectar a Mongo
        (0, ConexionDB_1.default)();
        this.app = (0, express_1.default)();
        this.iniciarConfiguracion();
        this.iniciarRutas();
    }
    iniciarConfiguracion() {
        // Estabkecer el puerto
        this.app.set("PORT", process.env.PORT);
        // Permitirt o bloquear acceso al BackEnd
        this.app.use((0, cors_1.default)());
        // Mostrar mensajes de log en la consola
        this.app.use((0, morgan_1.default)("dev"));
        //Limitar el tamaño de los archivos JSON
        this.app.use(express_1.default.json({ limit: "50MB" }));
        // Para qwue la API reciba las consultas en formato antiguo y nuevo
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    iniciarRutas() {
        this.app.use("/api/perfil", Seguridad_1.default.analizarToken, PerfilRuta_1.default);
        this.app.use("/api/usuario", UsuarioRuta_1.default);
    }
    iniciarServidor() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("BackEnd listo en el puerto", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;
