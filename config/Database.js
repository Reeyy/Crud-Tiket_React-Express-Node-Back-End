import { Sequelize } from "sequelize";
const db = new Sequelize("dts_db_bus", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
