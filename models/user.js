import Sequelize from "sequelize";

import { DB } from "../database/db.js";

export const CreateUser = DB.define('users',{
    userName: {
        type: Sequelize.STRING,
    },
    userPassword: {
        type: Sequelize.STRING,
    }
})

//CurrentUser.sync()

