import { Router } from "express";
import perfilControlador from "../controlador/PerfilControlador";

class PerfilRuta {
  // Definir una variable tipo Router
  public rutaAPI: Router;
  constructor() {
    // Inicializar la variable
    this.rutaAPI = Router();
    this.configurarRutas();
  }

  public configurarRutas() {
    // Crear endpoint para la consulta
    this.rutaAPI.get("/listado", perfilControlador.consulta);
    this.rutaAPI.get("/uno",perfilControlador.consultarUno)
    // Crear endpoint para la creación
    this.rutaAPI.post("/crear", perfilControlador.crear);
    // Crear endpoint para eliminar
    this.rutaAPI.delete("/eliminar/:codigo", perfilControlador.eliminar);
    // Crear endpoint para actualizar
    this.rutaAPI.put("/actualizar/:codigo", perfilControlador.actualizar);
  }
}

const perfilRuta = new PerfilRuta();
// Exportar la propiedad rutaAPI para tener acceso a todos los endpoints
export default perfilRuta.rutaAPI;
