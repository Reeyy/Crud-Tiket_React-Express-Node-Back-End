import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const User = db.define(
  "user",

  {
    name: DataTypes.STRING,
    nomorHp: DataTypes.INTEGER,
    nomorKtp: DataTypes.INTEGER,
    kelas: DataTypes.STRING,
    jadwal: DataTypes.STRING,
    jumlahPenumpang: DataTypes.INTEGER,
    jumlahPenumpangLansia: DataTypes.INTEGER,
    hargaTiket: DataTypes.INTEGER,
    totalBayar: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);
export default User;

(async () => {
  await db.sync();
})();
