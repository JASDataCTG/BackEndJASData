import { Request, Response } from "express";
import UsuarioDAO from "../dao/UsuarioDAO";

class UsuarioControlador extends UsuarioDAO {
  public cantidadEnPerfil(req: Request, res: Response): void {
    UsuarioControlador.cantidadUsuariosEnPerfil(req.params.codPerfil, res);
  }
  public consulta(req: Request, res: Response) {
    UsuarioControlador.consultarUsuarios(res);
  }

  public consultPerfil(req: Request, res: Response): void {
    UsuarioControlador.obtenerUsuariosPerfil(req.params.codPerfil, res);
  }

  public crear(req: Request, res: Response) {
    const elCorreo = { correoUsuario: req.body.coreoUsuario };
    UsuarioControlador.crearUsuario(elCorreo, req.body, res);
  }

  public iniciar(req: Request, res: Response): void {
    UsuarioControlador.iniciarSesion(req.body, res);
  }

  public eliminar(req: Request, res: Response) {
    UsuarioControlador.eliminarUsuario(req.params.codigo, res);
  }

  public actualizar(req: Request, res: Response) {
    UsuarioControlador.actualizarUsuario(req.params.codigo, req.body, res);
  }
}

// Exportar la clase como un objeto para no crear nuevos objetos al utilizarla
const usuarioControlador = new UsuarioControlador();
export default usuarioControlador;
