import { connect } from "mongoose";

const ConexionDB = () => {
  const URL = String(process.env.DB_MONGO);
  connect(URL)
    .then(() => {
      console.log("Estas conectado a", process.env.DB_MONGO);
    })
    .catch((miError) => {
      console.log("No se conectó la base de datos", miError);
    });
};

export default ConexionDB;
