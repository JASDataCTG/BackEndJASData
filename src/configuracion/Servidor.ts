import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import ConexionDB from "./ConexionDB";
import apiPerfilRuta from "../ruta/PerfilRuta";
import apiUsuarioRuta from "../ruta/UsuarioRuta";
import seguridad from "../middleware/Seguridad";

class Servidor {
  public app: express.Application;

  constructor() {
    // Habilitar el proyecto para usar variables de ambiente
    dotenv.config({ path: "variables.env" });
    // Conectar a Mongo
    ConexionDB();
    this.app = express();
    this.iniciarConfiguracion();
    this.iniciarRutas();
  }

  public iniciarConfiguracion() {
    // Estabkecer el puerto
    this.app.set("PORT", process.env.PORT);
    // Permitirt o bloquear acceso al BackEnd
    this.app.use(cors());
    // Mostrar mensajes de log en la consola
    this.app.use(morgan("dev"));
    //Limitar el tamaño de los archivos JSON
    this.app.use(express.json({ limit: "50MB" }));
    // Para qwue la API reciba las consultas en formato antiguo y nuevo
    this.app.use(express.urlencoded({ extended: true }));
  }

  public iniciarRutas(): void {
    this.app.use("/api/perfil", seguridad.analizarToken, apiPerfilRuta);
    this.app.use("/api/usuario", apiUsuarioRuta);
  }

  public iniciarServidor(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("BackEnd listo en el puerto", this.app.get("PORT"));
    });
  }
}

export default Servidor;
