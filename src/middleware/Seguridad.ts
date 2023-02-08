// Impedir el acceso a quien no tenga Token
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

class Seguridad{
    // Crear metodo que recibe, responde y continua
    public analizarToken(req:Request,res:Response,next:NextFunction){
        if (req.headers.authorization) {
            try {
                const miLlave = String(process.env.CLAVE_SECRETA);
                const tokenRecibido=req.headers.authorization?.split(" ")[1] as string;
                const infoUsuario=jwt.verify(tokenRecibido,miLlave);
                req.body.datosUsuario=infoUsuario;
                next();
            } catch (error) {
                res.status(401).json({respuesta:"El token no es correcto"})
            }
        } else {
            res.status(401).json({respuesta:"No puedes ingresar"})
        }
    }
}

const seguridad = new Seguridad();

export default seguridad;