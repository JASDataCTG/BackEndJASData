import { Router } from "express";
import usuarioControlador from "../controlador/UsuarioControlador";

class UsuarioRuta {
  // Definir una variable tipo Router
  public rutaAPI: Router;
  constructor() {
    // Inicializar la variable
    this.rutaAPI = Router();
    this.configurarRutas();
  }

  public configurarRutas() {
    // Crear endpoint para la consulta
    this.rutaAPI.get("/listado", usuarioControlador.consulta);
    // Crear endpoint para listar los usuarios por perfil
    this.rutaAPI.get("/todos/:codPerfil", usuarioControlador.consultPerfil);
    // Crear endpoint para contar los usuarios de un perfil
    this.rutaAPI.get(
      "/cantxperfil/:codPerfil",
      usuarioControlador.cantidadEnPerfil
    );
    // Crear endpoin para la creación
    this.rutaAPI.post("/crear", usuarioControlador.crear);
    // Crear endpoint para iniciar sesión de usuario
    this.rutaAPI.post("/iniciar", usuarioControlador.iniciar);
    // Crear endpoint para eliminar
    this.rutaAPI.delete("/eliminar/:codigo", usuarioControlador.eliminar);
    // Crear endpoint para actualizar
    this.rutaAPI.put("/actualizar/:codigo", usuarioControlador.actualizar);
  }
}

const usuarioRuta = new UsuarioRuta();
// Exportar la propiedad rutaAPI para tener acceso a todos los endpoints
export default usuarioRuta.rutaAPI;
