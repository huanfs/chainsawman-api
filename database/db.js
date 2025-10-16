import Sequelize from "sequelize";

import "dotenv/config";

const db_host = process.env.DB_HOST;

if (!db_host) {
    throw new Error('DB_HOST undefined');
}

export const DB = new Sequelize(db_host,{
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
