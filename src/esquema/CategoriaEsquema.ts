import { model, Schema } from "mongoose";
import CategoriaEntidad from "../entidad/CategoriaEntidad";

import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const CategoriaEsquema = new Schema<CategoriaEntidad>(
  {
    nombreCategoria: { type: String, required: true, unique: true, trim: true },
    estadoCategoria: { type: Number, enum: [1, 2, 3], default: 1 }
  },
  { versionKey: false } // Insertar solo lo que se le envia
);

export default model("Categoria", CategoriaEsquema, "Categoria");