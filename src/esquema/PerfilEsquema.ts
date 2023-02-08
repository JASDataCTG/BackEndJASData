import { model, Schema } from "mongoose";
import PerfilEntidad from "../entidad/PerfilEntidad";

import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const PerfilEsquema = new Schema<PerfilEntidad>(
  {
    nombrePerfil: { type: String, required: true, unique: true, trim: true },
    estadoPerfil: { type: Number, enum: [1, 2, 3], default: 1 }
  },
  { versionKey: false } // Insertar solo lo que se le envia
);

export default model("Perfil", PerfilEsquema, "Perfil");
