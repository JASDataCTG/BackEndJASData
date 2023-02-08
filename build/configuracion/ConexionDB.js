"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ConexionDB = () => {
    const URL = String(process.env.DB_MONGO);
    (0, mongoose_1.connect)(URL)
        .then(() => {
        console.log("Estas conectado a", process.env.DB_MONGO);
    })
        .catch((miError) => {
        console.log("No se conectó la base de datos", miError);
    });
};
exports.default = ConexionDB;
