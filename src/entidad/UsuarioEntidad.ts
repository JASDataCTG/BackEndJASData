import PerfilEntidad from "./PerfilEntidad";

class UsuarioEntidad {
  public nombreUsuario: string;
  public apellidoUsuario: string;
  public estadoUsuario: number;
  public nuipUsuario: string;
  public direccionUsuario: string;
  public correoUsuario: string;
  public telFijoUsuario: string;
  public celUsuario: string;
  public claveUsuario: string;
  public imagenUsuario: string;
  public fechaCreacionUsuario: Date;
  // Un usuario tiene un solo perfil pero un perfil puede tener varios usuarios
  public codPerfil: PerfilEntidad;

  constructor(
    nomu: string,
    apeu: string,
    estu: number,
    nuipu: string,
    diru: string,
    coru: string,
    tfu: string,
    celu: string,
    clu: string,
    imgu: string,
    fecu: Date,
    codp: PerfilEntidad
  ) {
    (this.nombreUsuario = nomu),
      (this.apellidoUsuario = apeu),
      (this.estadoUsuario = estu),
      (this.nuipUsuario = nuipu),
      (this.direccionUsuario = diru),
      (this.correoUsuario = coru),
      (this.telFijoUsuario = tfu),
      (this.celUsuario = celu),
      (this.claveUsuario = clu),
      (this.imagenUsuario = imgu),
      (this.fechaCreacionUsuario = fecu),
      (this.codPerfil = codp);
  }
}

export default UsuarioEntidad;
