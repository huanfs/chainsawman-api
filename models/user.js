import Sequelize from "sequelize";

import { DB } from "../database/db.js";

export const CurrentUser = DB.define('usuarios',{
    username: {
        type: Sequelize.STRING,
    },
    userpassword: {
        type: Sequelize.STRING,
    }
})

//CurrentUser.sync()

