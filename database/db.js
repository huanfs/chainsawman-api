import Sequelize from "sequelize";

export const DB = new Sequelize('chainsawman','root','shavershian', {
    host:'localhost',
    dialect: 'mysql',
});
