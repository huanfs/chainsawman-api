import Sequelize from "sequelize";

import { DB } from "../database/db.js";

export const Episodes = DB.define('episodes',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
    },
    episode: {
        type: Sequelize.STRING,
    },
    createdAt: {
        type: Sequelize.CHAR,
    },
    updatedAt : {
        type: Sequelize.CHAR,
    }
})

//ShowEpisode.sync().then(()=>{console.log("listando episódios no banco de dados")})