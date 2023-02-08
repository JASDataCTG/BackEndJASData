class CategoriaEntidad {
    public nombreCategoria: string;
    public estadoCategoria: number;
  
    constructor(nomc: string, estc: number) {
      this.nombreCategoria = nomc;
      this.estadoCategoria = estc;
    }
  }
  
  export default CategoriaEntidad;