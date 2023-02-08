import { model, Schema, Types } from "mongoose";
import UsuarioEntidad from "../entidad/UsuarioEntidad";

import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const UsuarioEsquema = new Schema<UsuarioEntidad>(
  {
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
    codPerfil: { type: Types.ObjectId, ref: "Perfil", required: true },
  },
  { versionKey: false } // Insertar solo lo que se le envia sin crear propiedades de Mongoose
);

export default model("Usuario", UsuarioEsquema, "Usuario");
