import { Sequelize } from "sequelize";

const db = new Sequelize("db_main", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
