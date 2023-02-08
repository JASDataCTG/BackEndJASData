import { Response } from "express";
import CategoriaEsquema from "../esquema/CategoriaEsquema";
//import UsuarioEsquema from "../esquema/UsuarioEsquema";

class CategoriaDAO {
  // Consultar los datos de una categoria por un código específico
  // ************************************************************************************
  protected static async obtenerUnaCategoria(
    identificador: any,
    res: Response
  ): Promise<any> {
    const jsonCategoria = { _id: identificador };
    const existeCategoria = await CategoriaEsquema.findOne(
      jsonCategoria
    ).exec();
    if (existeCategoria) {
      res.status(200).json(existeCategoria);
    } else {
      res
        .status(400)
        .json({
          respuesta: "No existe la categoría con el identificador ingresado",
        });
    }
  }
  // ************************************************************************************

  // Obtener categorias en orden descendente (-1)
  // ************************************************************************************
  protected static async consultarCategorias(res: Response): Promise<any> {
    const datos = await CategoriaEsquema.find().sort({ _id: -1 });
    res.status(200).json(datos);
  }
  // ************************************************************************************

  // Crear categoria verificando su existencia
  // ************************************************************************************
  protected static async crearCategoria(
    parametros: any,
    res: Response
  ): Promise<any> {
    delete parametros._id;
    delete parametros.datosUsuario;
    const existe = await CategoriaEsquema.findOne(parametros);

    if (existe) {
      res.status(400).json({ respuesta: "La categoría ya existe" });
    } else {
      const objPerfil = new CategoriaEsquema(parametros);
      objPerfil.save((miError, objeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "Error al crear la categoría" });
        } else {
          res.status(200).json({ id: objeto._id });
        }
      });
    }
  }
  // ************************************************************************************

  // Eliminar categoria por código, verificando antes que no tenga usuarios asociados
  // ************************************************************************************
  protected static async eliminarCategoria(
    parametro: any,
    res: Response
  ): Promise<any> {
    const llave = { _id: parametro };
    //Para modificar apenas se tenga ProductoEsquema
    const cantidad = await CategoriaEsquema.countDocuments({
      codPerfil: llave,
    });
    if (cantidad > 0) {
      res
        .status(400)
        .json({ respuesta: "Error, la categoría tiene usuarios relacionados" });
    } else {
      const existe = await CategoriaEsquema.findById(parametro).exec();
      if (existe) {
        CategoriaEsquema.deleteOne(
          { _id: parametro },
          (miError: any, objeto: any) => {
            //PerfilEsquema.findByIdAndDelete(parametro, (miError: any, objeto: any) => {
            if (miError) {
              res
                .status(400)
                .json({ respuesta: "Error al eliminar la categoría" });
            } else {
              res.status(200).json({ eliminado: objeto });
            }
          }
        );
      } else {
        res.status(400).json({ respuesta: "La categoría NO existe" });
      }
    }
  }
  // ************************************************************************************

  // Actualizar perfil por código y con body JSON
  // ************************************************************************************
  protected static async actualizarCategoria(
    codigo: string,
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await CategoriaEsquema.findById(codigo).exec();
    if (existe) {
      CategoriaEsquema.findByIdAndUpdate(
        { _id: codigo },
        { $set: parametros },
        (miError: any, objeto: any) => {
          if (miError) {
            res
              .status(400)
              .json({ respuesta: "Error al actualizar la categoría" });
          } else {
            res.status(200).json({ antiguo: objeto, nuevo: parametros });
          }
        }
      );
    } else {
      res.status(400).json({ respuesta: "La categoría NO existe" });
    }
  }
  // ************************************************************************************
}

export default CategoriaDAO;