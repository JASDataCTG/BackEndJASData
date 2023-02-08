"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
mongoose_2.default.set("strictQuery", false);
const PerfilEsquema = new mongoose_1.Schema({
    nombrePerfil: { type: String, required: true, unique: true, trim: true },
    estadoPerfil: { type: Number, enum: [1, 2, 3], default: 1 }
}, { versionKey: false } // Insertar solo lo que se le envia
);
exports.default = (0, mongoose_1.model)("Perfil", PerfilEsquema, "Perfil");
