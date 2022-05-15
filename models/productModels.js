import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "product",
  {
    name: {
      type: DataTypes.STRING,
    },
    qtc: {
      type: DataTypes.INTEGER,
    },
    picture: {
      type: DataTypes.TEXT,
    },
    expiredAt: {
      type: DataTypes.DATE,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Product;
