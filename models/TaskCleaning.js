import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";

const TaskCleaning = sequelize.define('TaskCleaning', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isUUID: 4
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  last_time_done: {
    type: DataTypes.DATE,
    allowNull: false
  },
  frequency_days: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  

  },{
    tableName: 'task_cleaning'
  }
);

export {TaskCleaning}