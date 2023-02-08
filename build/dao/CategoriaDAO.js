"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriaEsquema_1 = __importDefault(require("../esquema/CategoriaEsquema"));
//import UsuarioEsquema from "../esquema/UsuarioEsquema";
class CategoriaDAO {
    // Consultar los datos de una categoria por un código específico
    // ************************************************************************************
    static obtenerUnaCategoria(identificador, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonCategoria = { _id: identificador };
            const existeCategoria = yield CategoriaEsquema_1.default.findOne(jsonCategoria).exec();
            if (existeCategoria) {
                res.status(200).json(existeCategoria);
            }
            else {
                res
                    .status(400)
                    .json({
                    respuesta: "No existe la categoría con el identificador ingresado",
                });
            }
        });
    }
    // ************************************************************************************
    // Obtener categorias en orden descendente (-1)
    // ************************************************************************************
    static consultarCategorias(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield CategoriaEsquema_1.default.find().sort({ _id: -1 });
            res.status(200).json(datos);
        });
    }
    // ************************************************************************************
    // Crear categoria verificando su existencia
    // ************************************************************************************
    static crearCategoria(parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            delete parametros._id;
            delete parametros.datosUsuario;
            const existe = yield CategoriaEsquema_1.default.findOne(parametros);
            if (existe) {
                res.status(400).json({ respuesta: "La categoría ya existe" });
            }
            else {
                const objPerfil = new CategoriaEsquema_1.default(parametros);
                objPerfil.save((miError, objeto) => {
                    if (miError) {
                        res.status(400).json({ respuesta: "Error al crear la categoría" });
                    }
                    else {
                        res.status(200).json({ id: objeto._id });
                    }
                });
            }
        });
    }
    // ************************************************************************************
    // Eliminar categoria por código, verificando antes que no tenga usuarios asociados
    // ************************************************************************************
    static eliminarCategoria(parametro, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const llave = { _id: parametro };
            const cantidad = yield CategoriaEsquema_1.default.countDocuments({
                codPerfil: llave,
            });
            if (cantidad > 0) {
                res
                    .status(400)
                    .json({ respuesta: "Error, la categoría tiene usuarios relacionados" });
            }
            else {
                const existe = yield CategoriaEsquema_1.default.findById(parametro).exec();
                if (existe) {
                    CategoriaEsquema_1.default.deleteOne({ _id: parametro }, (miError, objeto) => {
                        //PerfilEsquema.findByIdAndDelete(parametro, (miError: any, objeto: any) => {
                        if (miError) {
                            res
                                .status(400)
                                .json({ respuesta: "Error al eliminar la categoría" });
                        }
                        else {
                            res.status(200).json({ eliminado: objeto });
                        }
                    });
                }
                else {
                    res.status(400).json({ respuesta: "La categoría NO existe" });
                }
            }
        });
    }
    // ************************************************************************************
    // Actualizar perfil por código y con body JSON
    // ************************************************************************************
    static actualizarCategoria(codigo, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const existe = yield CategoriaEsquema_1.default.findById(codigo).exec();
            if (existe) {
                CategoriaEsquema_1.default.findByIdAndUpdate({ _id: codigo }, { $set: parametros }, (miError, objeto) => {
                    if (miError) {
                        res
                            .status(400)
                            .json({ respuesta: "Error al actualizar la categoría" });
                    }
                    else {
                        res.status(200).json({ antiguo: objeto, nuevo: parametros });
                    }
                });
            }
            else {
                res.status(400).json({ respuesta: "La categoría NO existe" });
            }
        });
    }
}
exports.default = CategoriaDAO;
