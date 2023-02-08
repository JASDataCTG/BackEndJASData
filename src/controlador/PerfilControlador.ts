import { Request, Response } from "express";
import PerfilDAO from "../dao/PerfilDAO";

class PerfilControlador extends PerfilDAO {
  public consulta(req: Request, res: Response) {
    PerfilControlador.consultarPerfiles(res);
  }

  public crear(req: Request, res: Response) {
    PerfilControlador.crearPerfiles(req.body, res);
  }

  public eliminar(req: Request, res: Response) {
    PerfilControlador.eliminarPerfil(req.params.codigo, res);
  }

  public actualizar(req: Request, res: Response) {
    PerfilControlador.actualizarPerfil(req.params.codigo, req.body, res);
  }

  public consultarUno(req: Request, res: Response): void {
    PerfilControlador.obtenerUnPerfil(req.params.codigo, res);
  }
}

// Exportar la clase como un objeto para no crear nuevos objetos al utilizarla
const perfilControlador = new PerfilControlador();
export default perfilControlador;
