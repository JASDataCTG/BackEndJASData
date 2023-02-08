"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
mongoose_2.default.set("strictQuery", false);
const UsuarioEsquema = new mongoose_1.Schema({
    nombreUsuario: { type: String, required: true, trim: true },
    apellidoUsuario: { type: String, required: true, trim: true },
    estadoUsuario: { type: Number, enum: [1, 2, 3], default: 1 },
    nuipUsuario: { type: String, required: true, unique: true, trim: true },
    direccionUsuario: { type: String, trim: true },
    correoUsuario: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    telFijoUsuario: { type: String, trim: true },
    celUsuario: { type: String, trim: true },
    claveUsuario: { type: String, required: true },
    imagenUsuario: { type: String, trim: true },
    fechaCreacionUsuario: { type: Date, default: Date.now() },
    codPerfil: { type: mongoose_1.Types.ObjectId, ref: "Perfil", required: true },
}, { versionKey: false } // Insertar solo lo que se le envia sin crear propiedades de Mongoose
);
exports.default = (0, mongoose_1.model)("Usuario", UsuarioEsquema, "Usuario");
