import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('apidb', 'postgres', 'B3r23rk3rk', {
    host: 'localhost',
    dialect: 'postgres'
});