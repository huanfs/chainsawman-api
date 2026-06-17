import express from "express";
import { CreateUser } from "../models/user.js";
const router = express.Router();

router.post("/", async(req, res) => {
    try{
        const { userName, userPassword } = req.body;
        const userExists = await CreateUser.findOne({
            where:{userName: userName}
        });
        if(userExists) {
            return res.status(409).json({message: "este usuário já existe!"});
        }
        await CreateUser.create({
            userName: userName,
            userPassword: userPassword
        });
        return res.status(201).json({message: "usuário criado!"});
    }catch(err) {
        return res.status(500).json({message: "erro no servidor."});
    }
});

export default router;